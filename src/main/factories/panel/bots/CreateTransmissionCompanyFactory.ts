import { CompanyBotsRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyBotsRepositoryAdpter";
import { CompanyTransmissionRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyTransmissionRepositoryAdpter";
import { CreateTransmissionCompanyUseCase } from "../../../../useCases/panel/transmission/CreateTransmissionCompany/CreateTransmissionCompanyUseCase";

export function CreateTransmissionCompanyFactory() {
  const companyTransmissionRepository = new CompanyTransmissionRepositoryAdpter();
  const companyBotsRepository = new CompanyBotsRepositoryAdpter();

  return new CreateTransmissionCompanyUseCase(companyTransmissionRepository, companyBotsRepository);
}
