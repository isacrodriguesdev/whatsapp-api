import { BotConfig } from "../../../entities/BotConfig";
import { Bot } from "../../../entities/Bot";
import { ICompanyBotsRepository } from "../../../repositories/CompanyBotsRepository";
import { knexDatabase } from "../KnexDatabase"

export class CompanyBotsRepositoryAdpter implements ICompanyBotsRepository {

  create(bot: Bot): Promise<any> {
    return knexDatabase("bots").insert(bot)
  }

  getAll(companyId: string): Promise<Bot[]> {
    return knexDatabase("bots")
      .where("company_id", companyId)
  }

  getOne(id: string): Promise<Bot> {
    return knexDatabase("bots")
      .select(
        'bots_config.active',
        'bots.name',
        'bots.token',
        'bots.password',
        'bots.photo'
      )
      .join('bots_config', { 'bots.id': 'bots_config.bot_id' })
      .where("bots.id", id).first()
  }

  update(botId: string, bot: Bot, botConfig: BotConfig): Promise<any> {
    return Promise.all([
      knexDatabase("bots_config")
        .where("bot_id", botId).update({ ...botConfig }),

      knexDatabase("bots")
        .where("id", botId).update({ ...bot })
    ])
  }

  deleteBot(botId: string): Promise<any> {
    return knexDatabase("bots")
      .where("bot_id", botId)
      .delete()
  }

  getConfig(botId: string): Promise<BotConfig> {
    return knexDatabase("bots_config")
      .where("bot_id", botId)
      .first()
  }

  updateConfig(botId: string, botConfig: BotConfig): Promise<any> {
    return knexDatabase("bots_config")
      .where("bot_id", botId)
      .update(botConfig)
  }

  createConfig(botConfig: BotConfig): Promise<any> {
    return knexDatabase("bots_config")
      .insert(botConfig)
  }


}