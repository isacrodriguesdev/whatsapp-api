import { Transmission } from "../../../entities/Transmission";
import { TransmissionBot } from "../../../entities/TransmissionBot";
import { ICompanyTransmissionRepository } from "../../../repositories/CompanyTransmissionRepository";
import { knexDatabase } from "../KnexDatabase";

export class CompanyTransmissionRepositoryAdpter implements ICompanyTransmissionRepository {
  create(transmission: Transmission): Promise<any> {
    return knexDatabase("transmissions").insert(transmission);
  }

  createTransmissionBots(transmissionBot: TransmissionBot): Promise<any> {
    return knexDatabase("transmission_bots").insert(transmissionBot);
  }

  async getAll(companyId: any): Promise<Transmission[]> {
    const transmissions = await knexDatabase.raw(`
    SELECT 
      transmissions.name, 
      transmissions.date,
      transmissions.message_type,
      bots.*
    FROM transmissions 
      INNER JOIN (
        SELECT 
          transmission_id,status,max_send,total_sended
        FROM transmission_bots WHERE company_id = '${companyId}' GROUP BY transmission_id,status,max_send,total_sended) 
      AS bots ON bots.transmission_id = transmissions.id`)

    return transmissions.rows
  }

}
