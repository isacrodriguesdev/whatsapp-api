import { BotConfig } from "../../../entities/BotConfig";
import { Bot } from "../../../entities/Bot";
import { ICompanyBotsRepository } from "../../../repositories/CompanyBotsRepository";
import { knexDatabase } from "../KnexDatabase";

export class CompanyBotsRepositoryAdpter implements ICompanyBotsRepository {
  create(bot: Bot): Promise<any> {
    return knexDatabase("bots").insert(bot);
  }

  getAll(companyId: string): Promise<Bot[]> {
    return knexDatabase("bots")
      .select(
        "bots_config.active",
        "bots.id",
        "bots.name",
        "bots.photo",
        "bots.created_at"
      )
      .join("bots_config", { "bots.id": "bots_config.bot_id" })
      .where("company_id", companyId)
      .orderBy([{ column: 'active', order: 'desc' },{ column: 'created_at', order: 'desc' }, 'name'])
  }

  getAllActive(companyId: string, active: boolean): Promise<Bot[]> {
    return knexDatabase("bots")
      .select(
        "bots_config.active",
        "bots.id",
        "bots.name",
        "bots.photo"
      )
      .join("bots_config", { "bots.id": "bots_config.bot_id" })
      .where({ "company_id": companyId, "bots_config.active": active });
  }

  getOne(id: string): Promise<Bot> {
    return knexDatabase("bots")
      .select(
        "bots_config.active",
        "bots.name",
        "bots.token",
        "bots.password",
        "bots.photo"
      )
      .join("bots_config", { "bots.id": "bots_config.bot_id" })
      .where("bots.id", id)
      .first();
  }

  update(botId: string, bot: Bot): Promise<any> {
    return knexDatabase("bots")
      .where("id", botId)
      .update({ ...bot });
  }

  getLastRegisteredUsers(botId: string, limit: number = 7): Promise<any[]> {
    return knexDatabase("users")
      .select("id", "photo", "first_name", "last_name")
      .where("bot_id", botId)
      .orderBy("created_at","desc")
      .limit(limit);
  }

  updateConfig(botId: string, botConfig: BotConfig): Promise<any> {
    return knexDatabase("bots_config")
      .where("bot_id", botId)
      .update({ ...botConfig });
  }

  async deleteBot(botId: string): Promise<any> {
    const lelero = await knexDatabase("bots")
      .where("id", botId)
      .del()
      .catch(console.log);
    console.log(lelero);
  }

  getConfig(botId: string): Promise<BotConfig> {
    return knexDatabase("bots_config").where("bot_id", botId).first();
  }

  createConfig(botConfig: BotConfig): Promise<any> {
    return knexDatabase("bots_config").insert(botConfig);
  }
}
