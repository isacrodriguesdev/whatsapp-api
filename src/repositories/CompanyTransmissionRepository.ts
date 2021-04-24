import { Transmission } from "../entities/Transmission";
import { TransmissionBot } from "../entities/TransmissionBot";

export interface ICompanyTransmissionRepository {
  create(transmissionId: Transmission): Promise<any>;
  getAll(companyId: string): Promise<Transmission[]>;
  createTransmissionBots(transmissionBot: TransmissionBot): Promise<any>;
}