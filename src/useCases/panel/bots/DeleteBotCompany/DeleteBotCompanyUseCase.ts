
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { HttpRequest, HttpResponse } from "./../../../../protocols/http"

export class DeleteBotCompanyUseCase {

  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const response = await this.companyBotsRepository.deleteBot(httpRequest.params.id)

      return {
        body: response,
        status: 200
      }
    } catch (error) {
      
      return {
        body: { error},
        status: 400
      }
    }
  }
}
