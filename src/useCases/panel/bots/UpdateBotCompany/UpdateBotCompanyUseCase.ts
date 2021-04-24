import { response } from "express";
import { BotConfig } from "./../../../../entities/BotConfig";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { ICompanyBotsRepository } from "../../../../repositories/CompanyBotsRepository";

interface IUpdateBotCompanyUseCase {
  execute(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export class UpdateBotCompanyUseCase implements IUpdateBotCompanyUseCase {
  constructor(private readonly companyBotsRepository: ICompanyBotsRepository) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    const promisses: any = [];

    if (httpRequest.body.botLegacy) {
      try {
        const response = await this.companyBotsRepository.update(
          httpRequest.params.id,
          httpRequest.body.botLegacy
        );

        promisses.push(response);
      } catch (error) {
        return {
          body: { error },
          status: 400,
        };
      }
    }

    try {
      const response = await this.companyBotsRepository.updateConfig(
        httpRequest.params.id,
        httpRequest.body.botConfig
      );

      promisses.push(response);
    } catch (error) {
      return {
        body: { error },
        status: 400,
      };
    }

    const responses = await Promise.all(promisses);

    return {
      body: responses,
      status: 200,
    };
  }
}
