import { UpdateCompanyFactory } from "../../../factories/panel/company/UpdateCompanyFactory"
import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http"

export async function updateCompanyRouteAdpter(request: Request, response: Response) {

  const updateCompanyFactory = UpdateCompanyFactory()

  const httpRequest: HttpRequest = {
    body: request.body,
    user:  {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await updateCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}