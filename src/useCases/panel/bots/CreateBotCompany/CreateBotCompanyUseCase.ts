import { Bot } from "../../../../entities/Bot";
import { BotConfig } from "../../../../entities/BotConfig";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { IEncryptionController } from "../../../../utils/protocols/EncryptionController";
import { IValidateCreateDataController } from "../../../../utils/validations/ValidateDataController";

export class CreateBotCompanyUseCase {
  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository,
    private readonly validateCreateDataController: IValidateCreateDataController,
    private readonly encryptionController: IEncryptionController
  ) { }

  async execute(httpRequest: HttpRequest) {
    if (!httpRequest.body.password) {
      return { status: 400, body: { error: "password not informed" } };
    }

    const passwordEncrypt = await this.encryptionController.genPassword(
      httpRequest.body.password
    );

    const bot = new Bot({
      ...httpRequest.body,
      company_id: httpRequest.user.id,
      password: passwordEncrypt,
    });

    if (!bot.id) {
      return { status: 400, body: { error: "id not created" } };
    }
    const botConfig = new BotConfig({ bot_id: bot.id, trasmission_max_users_by_send: 1000 });

    try {
      const validBot = await this.validateCreateDataController.validateBot(bot);
      const createdBot = await this.companyBotsRepository.create(validBot);
      const createdBotConfig = await this.companyBotsRepository.createConfig(
        botConfig
      );

      return { status: 200, body: { created: validBot } };
    } catch (error) {
      return { status: 400, body: { error } };
    }
  }
}
