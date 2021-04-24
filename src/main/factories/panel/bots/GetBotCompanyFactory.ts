import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { GetBotCompanyUseCase } from "../../../../useCases/panel/bots/GetBotCompany/GetBotCompanyUseCase"

export function GetBotCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new GetBotCompanyUseCase(companyBotsRepositoryAdpter)
}