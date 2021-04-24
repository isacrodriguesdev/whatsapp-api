import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter";
import { CreateBotCompanyUseCase } from "../../../../useCases/panel/bots/CreateBotCompany/CreateBotCompanyUseCase";
import { ValidateCreateDataControllerAdpter } from "../../../../helpers/validators/joi/ValidateCreateDataControllerAdpter";
import { BCryptControllerAdpter } from "../../../../helpers/cryptography/bcrypt/BCryptControllerAdpter";

export function CreateBotCompanyFactory() {
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter();
  const validateCreateDataControllerAdpter = new ValidateCreateDataControllerAdpter();
  const bCryptControllerAdpter = new BCryptControllerAdpter();

  return new CreateBotCompanyUseCase(
    companyBotsRepositoryAdpter,
    validateCreateDataControllerAdpter,
    bCryptControllerAdpter
  );
}
