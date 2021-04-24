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

      const transmissions = await this.companyTransmissionRepository.getAllBot(httpRequest.params.id)

      return { body: transmissions, status: 200 }

    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}