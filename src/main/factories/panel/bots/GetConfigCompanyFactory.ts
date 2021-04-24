import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { GetConfigBotCompanyUseCase } from "../../../../useCases/panel/bots/GetConfigBotCompany/GetConfigBotCompanyUseCase"

export function GetConfigCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new GetConfigBotCompanyUseCase(companyBotsRepositoryAdpter)
}