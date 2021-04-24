import { IJwtControllerAdpter } from "../../../../helpers/jwt/JwtControllerAdpter";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository"
import { IEncryptionController } from "../../../../utils/protocols/EncryptionController";

interface ILoginCompanyUseCase {
  execute(request: HttpRequest): Promise<HttpResponse>
}

export class LoginCompanyUseCase implements ILoginCompanyUseCase {

  constructor(
    private readonly companyRepository: ICompanyRepository,
    private readonly jwtProvider: IJwtControllerAdpter,
    private readonly encryptionController: IEncryptionController
  ) { }

  async execute(request: HttpRequest): Promise<HttpResponse> {

    const company = await this.companyRepository.existsCompany(request.body.email)

    if (!company) {
      return { body: { error: "Not authorized" }, status: 401 }
    }

    const correctPassword = await this.encryptionController.comparePassword(request.body.password, company.password)

    if(!correctPassword) {
      return { body: { error: "Incorrect password" }, status: 401 }
    }

    const dataToken = {
      id: company.id,
      email: company.email,
      cnpj_cpf: company.cnpj_cpf
    }

    const dataUser = {
      ...company,
      password: undefined,
    }

    const token = this.jwtProvider.createToken(dataToken)

    return {
      body: {
        user: dataUser,
        token
      },
      status: 200
    }
  }

}