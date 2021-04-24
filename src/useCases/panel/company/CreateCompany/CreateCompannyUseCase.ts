//cadastrar uma companhia no banco de dados
import { Company } from "../../../../entities/Company";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository";
import { IEncryptionController } from "../../../../utils/protocols/EncryptionController";

interface ICreateCompannyController {
  execute(request: any, response: any): void
}

export class CreateCompannyController implements ICreateCompannyController {

  constructor(
    private readonly companyRepository: ICompanyRepository,
    private readonly encryptionController: IEncryptionController
  ) { 
  }

  async execute(request: HttpRequest): Promise<HttpResponse> {

    const passwordHash = await this.encryptionController.genPassword(request.body.password)

    const companyData: Company = {
      ...request.body,
      password: passwordHash
    }

    const response = await this.companyRepository.create(companyData)

    return { body: response, status: 200 }
  }
}