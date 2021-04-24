import {CompanyRepositoryAdpter} from "../../../../infra/knex/repositoryAdpter/CompanyRepositoryAdpter"
import { UpdatePhotoCompanyUseCase } from "../../../../useCases/panel/company/UpdatePhotoCompany/UpdatePhotoCompanyUseCase"

export function UpdatePhotoCompanyFactory() {
  const companyRepositoryAdpter = new CompanyRepositoryAdpter()
  return new UpdatePhotoCompanyUseCase(companyRepositoryAdpter)
}