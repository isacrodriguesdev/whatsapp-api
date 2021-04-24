import { Bot } from "../../entities/Bot";
import { BotConfig } from "../../entities/BotConfig";

export interface IValidateCreateDataController {
  validateBot(bot: Bot): Promise<any>
  validateBotConfig(bot: BotConfig): Promise<any>
}