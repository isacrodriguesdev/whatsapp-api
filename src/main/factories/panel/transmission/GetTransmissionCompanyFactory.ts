import { CompanyTransmissionRepositoryAdpter } from "../../../../infra/knex/repositoryAdpter/CompanyTransmissionRepositoryAdpter"
import { GetTransmissionCompanyUseCase } from "../../../../useCases/panel/transmission/ListTransmissionCompany/ListTransmissionCompanyUseCase"

export function GetTransmissionCompanyFactory() {
  const companyTransmissionRepositoryAdpter = new CompanyTransmissionRepositoryAdpter()

  return new GetTransmissionCompanyUseCase(companyTransmissionRepositoryAdpter)
}