import { Company } from "../../../../entities/Company";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository";

export class UpdateCompanyUseCase {

  constructor(
    private readonly companyRepository: ICompanyRepository
  ) {}

  async execute(request: HttpRequest): Promise<any> {
    
    try {
      const updatedResponse = await this.companyRepository.update(request.user.id, request.body)
      return { status: 200, body: updatedResponse }
    } catch (error) {
      return { status: 400, body: "updated failed" }
    }

  }
}