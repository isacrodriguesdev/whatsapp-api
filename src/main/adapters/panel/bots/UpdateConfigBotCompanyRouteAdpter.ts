import { HttpRequest, HttpResponse } from "../../../../protocols/http"
import { Request, Response } from "express"
import { UpdateConfigBotCompanyFactory } from "../../../factories/panel/bots/UpdateConfigBotCompanyFactory"

export async function UpdateConfigBotCompanyRouteAdpter(request: Request, response: Response) {

  const updateConfigBotCompanyFactory = UpdateConfigBotCompanyFactory()


  const httpRequest: HttpRequest = {
    body: request.body,
    params: {
      id: request.params.id
    },
    file: request.file
  }

  const httpResponse: HttpResponse = await updateConfigBotCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}