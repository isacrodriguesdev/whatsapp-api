import { CompanyRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyRepositoryAdpter"
import { UpdatePasswordCompanyUseCase } from "../../../../useCases/panel/company/UpdatePasswordCompany/UpdatePasswordCompanyUseCase"
import { BCryptControllerAdpter } from "../../../../helpers/cryptography/bcrypt/BCryptControllerAdpter"

export function UpdatePasswordCompanyFactory() {
  const companyRepositoryAdpter = new CompanyRepositoryAdpter()
  const bCryptControllerAdpter = new BCryptControllerAdpter()
  return new UpdatePasswordCompanyUseCase(companyRepositoryAdpter, bCryptControllerAdpter)
}