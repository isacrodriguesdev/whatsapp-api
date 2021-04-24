import { HttpRequest, HttpResponse } from "../../../../protocols/http"
import { Request, Response } from "express"
import { GetOneCompanyFactory } from "../../../factories/panel/bots/GetOneCompanyFactory"

export async function getOneCompanyRouteAdpter(request: Request, response: Response) {

  const getOneCompanyFactory = GetOneCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getOneCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}
