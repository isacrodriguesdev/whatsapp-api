import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { GetBotsCompanyFactory } from "../../../factories/panel/bots/GetBotsCompanyFactory";

export async function getBotsCompanyRouteAdpter(request: Request, response: Response) {

  const getBotsCompanyFactory = GetBotsCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {},
    user:  { 
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getBotsCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}