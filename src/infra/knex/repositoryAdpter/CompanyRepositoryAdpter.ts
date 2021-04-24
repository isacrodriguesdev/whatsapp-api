import { Company } from "../../../entities/Company"
import { ICompanyRepository } from "../../../repositories/CompanyRepository"
import { knexDatabase } from "../KnexDatabase"

//controller -> Regra de negócio
//Respository -> funões do banco de dados

export class CompanyRepositoryAdpter implements ICompanyRepository {

  create(company: Company): Promise<boolean> {
    return knexDatabase("companies").insert(company)
  }
 
  getOne(id: string): Promise<any> {
    return knexDatabase("companies")
      .where("id", id)
      .first()
  }

  update(companyId: string, company?: Company): Promise<any> {
    return knexDatabase("companies")
      .where("id", companyId)
      .select('id').update(company) 
  }

  existsCompany(email: string): Promise<Company> {
    return knexDatabase("companies")
      .where("email", email)
      .first()
  }
}
