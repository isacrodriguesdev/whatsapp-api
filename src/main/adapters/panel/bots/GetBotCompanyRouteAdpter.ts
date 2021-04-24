import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { GetBotCompanyFactory } from "../../../factories/panel/bots/GetBotCompanyFactory"

export async function getBotCompanyRouteAdpter(request: Request, response: Response) {

  const getBotCompanyFactory = GetBotCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {},
    params: {
      id: request.params.id
    }
  }

  const httpResponse: HttpResponse = await getBotCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}