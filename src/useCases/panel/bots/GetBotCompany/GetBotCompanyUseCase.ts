import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

export class GetBotCompanyUseCase {

  constructor(private readonly companyBotsRepository: ICompanyBotsRepository) {}

  async execute(request: HttpRequest): Promise<HttpResponse> {

    const botData = await this.companyBotsRepository.getOne(request.params.id)

    return { 
      body: botData,
      status: 200
    }
  }
}