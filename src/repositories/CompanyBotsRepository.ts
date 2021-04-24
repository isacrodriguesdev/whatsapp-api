import { BotConfig } from "../entities/BotConfig";
import { Bot } from "../entities/Bot";

export interface ICompanyBotsRepository {
  create(bot: Bot): Promise<any>;
  getAll(companyId: string): Promise<Bot[]>;
  getAllActive(companyId: string, active: boolean): Promise<Bot[]>
  getOne(id: string): Promise<Bot>;
  update(botId: string, bot: Bot): Promise<any>;
  deleteBot(botId: string): Promise<any>;
  createConfig(config: BotConfig): Promise<any>;
  getConfig(botId: string): Promise<BotConfig>;
  updateConfig(botId: string, botConfig: BotConfig): Promise<any>;
  getLastRegisteredUsers(botId: string): Promise<any[]>;
}
