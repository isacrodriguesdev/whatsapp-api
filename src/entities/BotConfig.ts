import { assign } from "../helpers/assign/Assign"
import { Uuid } from "../helpers/uuid/Uuidv4"

interface INewBotConfig {
  id?: string
  bot_id: string
  trasmission_max_users_by_send?: number
  initial_message_active?: boolean 
  initial_message_type?: string
  initial_message_file?: string
  initial_message_file_size?: string
  initial_message?: string
  updated_at?: Date
  created_at?: Date
}
export class BotConfig {

  readonly id?: string
  readonly bot_id: string
  public active: boolean
  public trasmission_max_users_by_send?: number
  public initial_message_active?: boolean
  public initial_message_type?: string
  public initial_message_file?: string
  public initial_message_file_size?: string
  public initial_message?: string
  public updated_at?: Date
  public created_at?: Date

  constructor(botConfig: INewBotConfig) {

    this.id = assign(botConfig.id, Uuid())
    this.bot_id = botConfig.bot_id
    this.active = true
    this.trasmission_max_users_by_send = assign(botConfig.trasmission_max_users_by_send, 1000)
    this.initial_message_active = assign(botConfig.initial_message_active, false)
    this.initial_message_type = assign(botConfig.initial_message_type, 'text')
    this.initial_message_file = assign(botConfig.initial_message_file, null)
    this.initial_message_file_size = assign(botConfig.initial_message_file_size, null)
    this.initial_message = assign(botConfig.initial_message, null)
    this.updated_at = assign(botConfig.updated_at, new Date())
    this.created_at = assign(botConfig.created_at, new Date())
  }
} 