import { Transmission } from "../entities/Transmission";

export interface ICompanyTransmissionRepository {
  create(transmission: Transmission): Promise<any>;
  getAll(companyId: string): Promise<Transmission[]>;
}
