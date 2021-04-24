import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository";
import { IEncryptionController } from "../../../../utils/protocols/EncryptionController";

export class UpdatePasswordCompanyUseCase {
  constructor(
    private readonly companyRepository: ICompanyRepository,
    private readonly encryptionController: IEncryptionController
  ) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    // console.log( await this.encryptionController.genPassword("123456") )

    if (!httpRequest.body.password || !httpRequest.body.oldPassword)
      return { body: { error: "password not informed" }, status: 400 };

    const company = await this.companyRepository.getOne(httpRequest.user.id);
    const validPassword = await this.encryptionController.comparePassword(
      httpRequest.body.oldPassword,
      company.password
    );

    if (!validPassword)
      return { body: { error: "password not match" }, status: 400 };

    const newPassword = await this.encryptionController.genPassword(
      httpRequest.body.password
    );
    const response = await this.companyRepository.update(httpRequest.user.id, {
      password: newPassword,
    });

    return { body: response, status: 200 };
  }
}
