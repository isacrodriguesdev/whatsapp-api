import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter"
import { CreateBotCompanyUseCase } from "../../../../useCases/panel/bots/CreateBotCompany/CreateBotCompanyUseCase"
import { ValidateCreateDataControllerAdpter } from "../../../../helpers/validators/joi/ValidateCreateDataControllerAdpter"

export function CreateBotCompanyFactory() {
  
  const companyBotsRepositoryAdpter = new CompanyBotsRepositoryAdpter()
  const validateCreateDataControllerAdpter = new ValidateCreateDataControllerAdpter()

  return new CreateBotCompanyUseCase(companyBotsRepositoryAdpter, validateCreateDataControllerAdpter)
}
