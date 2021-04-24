import { BCryptControllerAdpter } from "../../../../helpers/cryptography/bcrypt/BCryptControllerAdpter";
import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter";
import { DeleteBotCompanyUseCase } from "../../../../useCases/panel/bots/DeleteBotCompany/DeleteBotCompanyUseCase";

export function DeleteBotCompanyFactory() {
  const companyBotsRepository = new CompanyBotsRepositoryAdpter();
  const bCryptControllerAdpter = new BCryptControllerAdpter();
  return new DeleteBotCompanyUseCase(
    companyBotsRepository,
    bCryptControllerAdpter
  );
}
