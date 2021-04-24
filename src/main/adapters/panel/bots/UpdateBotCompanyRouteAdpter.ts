import { HttpRequest, HttpResponse } from "../../../../protocols/http"
import { Request, Response } from "express"
import { UpdateBotCompanyFactory } from "../../../factories/panel/bots/UpdateBotCompanyFactory"

export async function updateBotCompanyRouteAdpter(request: Request, response: Response) {

  const updateBotCompanyFactory = UpdateBotCompanyFactory()

  const httpRequest: HttpRequest = {
    body: request.body,
    params: {
      id: request.params.id
    }
  }

  const httpResponse: HttpResponse = await updateBotCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
  
}