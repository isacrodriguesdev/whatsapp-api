import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { GetConfigCompanyFactory } from "../../../factories/panel/bots/GetConfigCompanyFactory";

export async function GetConfigBotCompanyRouteAdpter(request: Request, response: Response) {

  const getBotsCompanyFactory = GetConfigCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {},
    params: {
      id: request.params.id
    }
  }

  const httpResponse: HttpResponse = await getBotsCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}