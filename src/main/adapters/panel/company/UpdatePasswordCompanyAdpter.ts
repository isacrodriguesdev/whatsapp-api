import { UpdatePasswordCompanyFactory } from "../../../factories/panel/company/UpdatePasswordFactory"
import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http"

export async function updatePasswordCompanyAdpter (request: Request, response: Response) {

  const updatePasswordCompanyFactory = UpdatePasswordCompanyFactory()

  const httpRequest: HttpRequest = {
    body: request.body,
    user:  {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await updatePasswordCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}