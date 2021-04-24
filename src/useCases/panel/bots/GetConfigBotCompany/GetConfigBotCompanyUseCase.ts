import { Bot } from "../../../../entities/Bot";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

export class GetConfigBotCompanyUseCase {

  constructor(private readonly companyBotsRepository: ICompanyBotsRepository) {
  }

  async execute(httpRequest: HttpRequest) {

    try {
      const botConfig = await this.companyBotsRepository.getConfig(httpRequest.params.id)
      const botConfigData = { 
        ...botConfig,
        initial_message: botConfig.initial_message ? botConfig.initial_message.toString() : null
      }
      return {
        body: botConfigData,
        status: 200
      }
    } catch (error) {
      return { status: 400, body: { error } }
    }
  }
}