import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { GetBotsActiveCompanyFactory } from "../../../factories/panel/bots/GetBotsActiveCompanyFactory";

export async function getBotsActiveCompanyRouteAdpter(request: Request, response: Response) {

  const getBotsCompanyFactory = GetBotsActiveCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {
      active: request.query.active
    },
    user: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getBotsCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}