import { CompanyRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyRepositoryAdpter"
import { GetOneCompanyUseCase } from "../../../../useCases/panel/company/GetOneCompany/GetOneCompanyUseCase"


export function GetOneCompanyFactory() {
  const companyRepositoryAdpter = new CompanyRepositoryAdpter()

  return new GetOneCompanyUseCase(companyRepositoryAdpter)
}