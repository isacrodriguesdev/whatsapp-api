import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { GetBotsCompanyUseCase } from "../../../../useCases/panel/bots/ListBotsCompany/GetBotsCompanyUseCase"

export function GetBotsCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new GetBotsCompanyUseCase(companyBotsRepositoryAdpter)
}