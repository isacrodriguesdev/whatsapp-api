import { Bot } from "../../../../entities/Bot";
import { BotConfig } from "../../../../entities/BotConfig";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { IValidateCreateDataController } from "../../../../utils/validations/ValidateDataController";

export class CreateBotCompanyUseCase {

  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository,
    private readonly validateCreateDataController: IValidateCreateDataController
  ) { }

  async execute(httpRequest: HttpRequest) {
    if (!httpRequest.body.password) {
      return { status: 400, body: { error: "password not informed" } };
    }

    const bot = new Bot({
      ...httpRequest.body,
      company_id: httpRequest.user.id,
    });

    if (!bot.id) {
      return { status: 400, body: { error: "id not created" } };
    }
    const botConfig = new BotConfig({ bot_id: bot.id });

    try {
      
      const validBot = await this.validateCreateDataController.validateBot(bot);
      await this.companyBotsRepository.create(validBot);
      await this.companyBotsRepository.createConfig(
        botConfig
      );

      return { status: 200, body: { created: validBot } };
    } catch (error) {
      return { status: 400, body: { error } };
    }
  }
}
