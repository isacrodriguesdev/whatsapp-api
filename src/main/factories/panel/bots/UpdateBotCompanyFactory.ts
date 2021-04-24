import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { UpdateBotCompanyUseCase } from "../../../../useCases/panel/bots/UpdateBotCompany/UpdateBotCompanyUseCase"

export function UpdateBotCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new UpdateBotCompanyUseCase(companyBotsRepositoryAdpter)
}