import { Uuid } from "../helpers/uuid/Uuidv4"

export class Transmission {
  constructor(
    public id: string = Uuid(),
    public bot_id: string,
    public name: string,
    public date: Date,
    public status: string,
    public company_uid: string,
    public message_text: string,
    public message_type: string,
    public message_file: string,
    public message_location: string,
    public message_phone_firstname: string,
    public message_phone_number: string,
    public total_shot: number = 1000,
    public current_shot: number = 0,
    public remaining_shot: number = 0,
  ) {
  }
}
