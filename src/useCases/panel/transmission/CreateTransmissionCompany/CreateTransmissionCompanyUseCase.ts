import { Transmission } from './../../../../entities/Transmission';
import { HttpResponse } from "./../../../../protocols/http";
import { request } from "express";
import { HttpRequest } from "../../../../protocols/http";
import { ICompanyTransmissionRepository } from "../../../../repositories/CompanyTransmissionRepository";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";
import { TransmissionBot } from '../../../../entities/TransmissionBot';

export class CreateTransmissionCompanyUseCase {
  constructor(
    private readonly companyTransmissionRepository: ICompanyTransmissionRepository,
    private readonly companyBotsRepository: ICompanyBotsRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    let dataFile = {};

    try {

      if (httpRequest.body.message_type === "text") {
        dataFile = { ...dataFile, message_file: null };
      } else {
        dataFile = {
          ...dataFile,
          message_file: httpRequest.file.filename,
        };
      }

      const newTransmission = new Transmission({
        ...{ ...httpRequest.body, bots: undefined },
        ...dataFile
      })

      await this.companyTransmissionRepository.create(newTransmission)

      const createResponse = httpRequest.body.bots.split(',')
        .forEach(async (id: string) => {
          const config = await this.companyBotsRepository.getConfig(id)
          return await this.companyTransmissionRepository.createTransmissionBots(
            new TransmissionBot({
              ...{ ...httpRequest.body, bots: undefined },
              bot_id: id,
              company_id: httpRequest.user.id,
              transmission_id: newTransmission.id,
              max_send: config.trasmission_max_users_by_send,
              total_sended: 0
            })
          )
        });

      return { body: createResponse, status: 200 };
    } catch (error) {
      return { body: { error }, status: 400 };
    }

  }
}
