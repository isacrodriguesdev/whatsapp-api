import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { UpdateConfigBotCompanyUseCase } from "../../../../useCases/panel/bots/UpdateConfigBotCompany/UpdateConfigBotCompanyUseCase"

export function UpdateConfigBotCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()

  return new UpdateConfigBotCompanyUseCase(companyBotsRepositoryAdpter)
}