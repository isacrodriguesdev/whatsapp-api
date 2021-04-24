import { Request, Response } from "express";
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { DeleteBotCompanyFactory } from "../../../factories/panel/bots/DeleteBotCompanyFactory";

export async function deleteBotCompanyRouteAdapter(request: Request, response: Response) {

  const deleteBotCompanyFactory = DeleteBotCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {},
    params: {
      id: request.params.id
    }
  }

  const httpResponse: HttpResponse = await deleteBotCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}