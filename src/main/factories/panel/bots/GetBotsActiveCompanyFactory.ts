import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { GetBotsActiveCompanyUseCase } from "../../../../useCases/panel/bots/ListBotsActiveCompany/ListBotsActiveCompanyUseCase"

export function GetBotsActiveCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new GetBotsActiveCompanyUseCase(companyBotsRepositoryAdpter)
}