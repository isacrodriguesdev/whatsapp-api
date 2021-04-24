import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter";
import { UpdateFileBotCompanyUseCase } from "../../../../useCases/panel/bots/UpdateFileBotCompany/UpdateFileBotCompanyUseCase";

export function UpdateFileBotCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter();

  return new UpdateFileBotCompanyUseCase(companyBotsRepositoryAdpter);
}
