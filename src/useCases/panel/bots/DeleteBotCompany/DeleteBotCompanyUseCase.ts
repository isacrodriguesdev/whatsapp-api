import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { HttpRequest, HttpResponse } from "./../../../../protocols/http";
import { IEncryptionController } from "../../../../utils/protocols/EncryptionController";

export class DeleteBotCompanyUseCase {
  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository,
    private readonly encryptionController: IEncryptionController
  ) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.params.password)
      return { body: { error: "password not informed" }, status: 400 };

    try {
      const bot = await this.companyBotsRepository.getOne(
        httpRequest.params.id
      );

      const validPassword = await this.encryptionController.comparePassword(
        httpRequest.params.password,
        bot.password
      );

      if (!validPassword)
        return { body: { error: "password not match" }, status: 400 };

      const response = await this.companyBotsRepository.deleteBot(
        httpRequest.params.id
      );

      return {
        body: { name: bot.name, deleted: response },
        status: 200,
      };
    } catch (error) {
      console.log(error);
      return {
        body: { error },
        status: 400,
      };
    }
  }
}
