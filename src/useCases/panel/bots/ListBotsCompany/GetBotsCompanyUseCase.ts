import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

export class GetBotsCompanyUseCase {

  constructor(private readonly companyBotsRepository: ICompanyBotsRepository) {}

  async execute(request: HttpRequest): Promise<HttpResponse> {

    const bots = await this.companyBotsRepository.getAll(request.user.id)

    return { 
      body: bots,
      status: 200
    }
  }
}