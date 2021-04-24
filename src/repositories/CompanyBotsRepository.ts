import { BotConfig } from "../entities/BotConfig";
import { Bot } from "../entities/Bot";

export interface ICompanyBotsRepository {
  getAll(companyId: string): Promise<Bot[]>
  getOne(id: string): Promise<Bot>
  update(botId: string, bot: Bot, botConfig: BotConfig): Promise<any>
  create(bot: Bot): Promise<any>
  getConfig(botId: string): Promise<BotConfig>
  deleteBot(botId: string): Promise<any>
  updateConfig(botId: string, config: BotConfig): Promise<any>
  createConfig(config: BotConfig): Promise<any>
}