import { Transmission } from "../entities/Transmission";

export interface ICompanyTransmissionRepository {
  getOne(transmissionId: string): Promise<Transmission>
  getAllBot(botId: string): Promise<Transmission[]>
  getAllCompany(companyId: string): Promise<Transmission[]>
  create(transmissionId: Transmission): Promise<any>
  update(botId: string): Promise<any>
}