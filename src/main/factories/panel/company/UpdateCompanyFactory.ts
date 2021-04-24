import { CompanyRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyRepositoryAdpter"
import { UpdateCompanyUseCase } from "../../../../useCases/panel/company/UpdateCompany/UpdateCompanyUseCase"

export function UpdateCompanyFactory() {
  const companyRepositoryAdpter = new CompanyRepositoryAdpter()
  return new UpdateCompanyUseCase(companyRepositoryAdpter)
}