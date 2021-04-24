import { HttpResponse } from './../../../../protocols/http';
import { request } from "express";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

export class UpdateConfigBotCompanyUseCase {
  constructor(
    private readonly companyBotsRepository: ICompanyBotsRepository
  ) { }

  async execute(httpRequest: HttpRequest) {

    let dataFile = {}

    try {

      const botConfig = await this.companyBotsRepository.getConfig(httpRequest.params.id)

      if (httpRequest.body.initial_message_type === 'text') {
        dataFile = { ...dataFile, initial_message_file: null }
      }
      else if (httpRequest.file) {
        dataFile = { ...dataFile, initial_message_file: httpRequest.file.filename }
      }
      else if (botConfig.initial_message_file) {
        dataFile = { ...dataFile, initial_message_file: botConfig.initial_message_file }
      }

      const updateResponse = await this.companyBotsRepository.updateConfig(httpRequest.params.id, {
        ...httpRequest.body,
        ...dataFile
      })

      return { body: updateResponse, status: 200 }
    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}