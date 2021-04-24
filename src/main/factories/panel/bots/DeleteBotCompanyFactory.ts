import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter";
import { DeleteBotCompanyUseCase } from "../../../../useCases/panel/bots/DeleteBotCompany/DeleteBotCompanyUseCase";

export function DeleteBotCompanyFactory() {
  const companyBotsRepository = new CompanyBotsRepositoryAdpter()
  return new DeleteBotCompanyUseCase(companyBotsRepository)
}