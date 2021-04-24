import { assign } from "../helpers/assign/Assign";
import { Uuid } from "../helpers/uuid/Uuidv4";

interface INewTransmission {
  id?: string;
  name: string;
  date: Date;
  message_text?: string;
  message_type: string;
  message_file?: string;
  message_location?: string;
  message_phone_firstname?: string;
  message_phone_number?: string;
  updated_at?: Date;
  created_at?: Date;
}

export class Transmission {
  public readonly id: string;
  public name: string;
  public date: Date;
  public message_text?: string;
  public message_type: string;
  public message_file?: string;
  public message_location?: string;
  public message_phone_firstname?: string;
  public message_phone_number?: string;
  public updated_at?: Date;
  public created_at: Date;

  constructor(transmission: INewTransmission) {
    this.id = assign(transmission.id, Uuid());
    this.name = transmission.name;
    this.date = transmission.date;
    this.message_text = assign(transmission.message_text, null);
    this.message_type = transmission.message_type;
    this.message_file = transmission.message_file;
    this.message_location = assign(transmission.message_location, null);
    this.message_phone_number = assign(transmission.message_phone_number, null);
    this.message_phone_firstname = assign(transmission.message_phone_firstname, null);
    this.created_at = assign(transmission.created_at, new Date());
    this.updated_at = assign(transmission.updated_at, new Date());
  }
}
