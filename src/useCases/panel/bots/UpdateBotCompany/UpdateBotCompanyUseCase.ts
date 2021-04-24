import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

interface IUpdateBotCompanyUseCase {
  execute(request: HttpRequest): Promise<HttpResponse>
}

export class UpdateBotCompanyUseCase implements IUpdateBotCompanyUseCase {

  constructor(private readonly companyBotsRepository: ICompanyBotsRepository) { }

  async execute(request: HttpRequest): Promise<HttpResponse> {

    const response = await this.companyBotsRepository
      .update(request.params.id, request.body.botLegacy, request.body.botConfig)

    return {
      body: response,
      status: 200
    }
  }
}