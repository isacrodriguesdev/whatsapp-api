import { JwtControllerAdpter } from "../../../../helpers/jwt/JwtControllerAdpter"
import { CompanyRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyRepositoryAdpter"
import { LoginCompanyUseCase } from "../../../../useCases/panel/company/LoginCompany/LoginCompanyUseCase"
import { BCryptControllerAdpter } from "../../../../helpers/cryptography/bcrypt/BCryptControllerAdpter"

export function LoginCompanyFactory() {
  const companyRepositoryAdpter = new CompanyRepositoryAdpter()
  const jwtControllerAdpter = new JwtControllerAdpter()
  const bCryptControllerAdpter = new BCryptControllerAdpter()

  return new LoginCompanyUseCase(companyRepositoryAdpter, jwtControllerAdpter, bCryptControllerAdpter)
}