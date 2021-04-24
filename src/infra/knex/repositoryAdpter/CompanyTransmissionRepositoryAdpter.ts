import { Company } from "../../../entities/Company"
import { Transmission } from "../../../entities/Transmission"
import { ICompanyTransmissionRepository } from "../../../repositories/CompanyTransmissionRepository"
import { knexDatabase } from "../KnexDatabase"

//controller -> Regra de negócio
//Respository -> funões do banco de dados

export class CompanyTransmissionRepositoryAdpter implements ICompanyTransmissionRepository {

  getAllBot(botId: string): Promise<Transmission[]> {
    return knexDatabase("transmissions")
      .where("bot_id", botId)
  }

  create(transmission: Transmission): Promise<any>{
    return knexDatabase("transmissions")
      .insert(transmission)
  }

  getAllCompany() {
    return knexDatabase("")
  }

  getOne() {
    return knexDatabase("").first()
  }

  update() {
    return knexDatabase("")
  }
}
