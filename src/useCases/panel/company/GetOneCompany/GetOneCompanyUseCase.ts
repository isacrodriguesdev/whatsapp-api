import { Company } from "../../../../entities/Company";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository";

interface ICreateCompannyController{
  execute(request: HttpRequest): Promise<HttpResponse>
}

export class GetOneCompanyUseCase implements ICreateCompannyController{

  constructor(
    private readonly companyRepository: ICompanyRepository,
  ) { }

  async execute(request: HttpRequest): Promise<HttpResponse> {
    const company = await this.companyRepository.getOne(request.body.id)

    const companyData = { ...company, password: undefined }

    return { status: 200, body: companyData }
  }
}

