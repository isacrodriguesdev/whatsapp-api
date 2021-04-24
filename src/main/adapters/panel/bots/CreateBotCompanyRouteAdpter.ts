import { HttpRequest, HttpResponse } from "../../../../protocols/http"
import { Request, Response } from "express"
import { CreateBotCompanyFactory } from "../../../factories/panel/bots/CreateBotCompanyFactory"

export async function createBotCompanyRouteAdpter(request: Request, response: Response) {

  const createBotCompanyFactory = CreateBotCompanyFactory()

  const httpRequest: HttpRequest = {
    body: request.body,
    user: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await createBotCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
  
}