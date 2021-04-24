import { response } from "express";
import { BotConfig } from "../../../../entities/BotConfig";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { ICompanyTransmissionRepository } from "../../../../repositories/CompanyTransmissionRepository";

export class CreateTransmissionCompanyUseCase {

  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository,
    private readonly companyTransmissionRepository: ICompanyTransmissionRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const botConfig: BotConfig = await this.companyBotsRepository.getConfig(httpRequest.params.id)
      const created = await this.companyTransmissionRepository.create({
        ...httpRequest.body,
        bot_id: httpRequest.params.id,
        total_shot: botConfig.trasmission_max_users_by_send
      })

      return { body: created, status: 200 }
    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}