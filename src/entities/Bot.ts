import { assign } from "../helpers/assign/Assign";
import { Uuid } from "../helpers/uuid/Uuidv4";

interface INewBot {
  id?: string
  company_id: string
  token: string
  name: string
  username: string
  password: string
  location: string
  rule_trasmission_max_send_users_by_day?: number
  rule_trasmission_max_send_messages_by_day?: number
  provider_type: string | null
  created_at?: Date
  updated_at?: Date
}

export class Bot {

  public readonly id?: string
  public readonly company_id: string
  public readonly token: string
  public name: string
  public username: string
  public password: string
  public location: string
  public rule_trasmission_max_send_users_by_day?: number
  public rule_trasmission_max_send_messages_by_day?: number
  public provider_type?: string | null
  public created_at?: Date
  public updated_at?: Date

  constructor(bot: INewBot) {
    this.id = assign(bot.id, Uuid())
    this.name = bot.name
    this.company_id = bot.company_id
    this.token = bot.token
    this.username = bot.username
    this.location = bot.location
    this.password = bot.password
    this.rule_trasmission_max_send_users_by_day = assign(bot.rule_trasmission_max_send_users_by_day, 1000)
    this.rule_trasmission_max_send_messages_by_day = assign(bot.rule_trasmission_max_send_messages_by_day, 2)
    this.provider_type = assign(bot.provider_type, null)
    this.created_at = assign(bot.created_at, new Date())
    this.updated_at = assign(bot.updated_at, new Date())
  }
}