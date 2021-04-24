import { assign } from "../helpers/assign/Assign";
import { Uuid } from "../helpers/uuid/Uuidv4";

interface INewTransmissionBot {
  id?: string;
  bot_id: string;
  transmission_id: string;
  company_id: string;
  status: "waiting" | "cancelled" | "completed" | "paused";
  max_send: number;
  total_sended?: number;
  created_at?: Date;
}

export class TransmissionBot {
  public readonly id: string;
  public readonly bot_id: string;
  public readonly transmission_id: string;
  public readonly company_id: string;
  public status: "waiting" | "cancelled" | "completed" | "paused";
  public max_send: number;
  public total_sended: number;
  public created_at: Date;

  constructor(transmission: INewTransmissionBot) {
    this.id = assign(transmission.id, Uuid());
    this.bot_id = transmission.bot_id;
    this.transmission_id = transmission.transmission_id;
    this.company_id = transmission.company_id;
    this.status = assign(transmission.status, "waiting")
    this.max_send = transmission.max_send;
    this.total_sended = assign(transmission.total_sended, 0);
    this.created_at = assign(transmission.created_at, new Date());
  }
}
