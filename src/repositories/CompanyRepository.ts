import { Company } from "../entities/Company"

// isso é apenas um contrato
export interface ICompanyRepository {
  update(companyId: string, company: any): Promise<any>
  getOne(id: string): Promise<Company>
  create(company: Company): Promise<boolean>
  existsCompany(email: string): Promise<Company>
}