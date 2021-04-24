import { HttpRequest, HttpResponse } from "../../../../protocols/http"
import { Request, Response } from "express"
import { LoginCompanyFactory } from "../../../factories/panel/company/LoginCompanyFactory"

export async function loginCompanyRouteAdpter(request: Request, response: Response) {

  const loginCompanyFactory = LoginCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {
      email: request.body.email,
      password: request.body.password
    }
  }

  const httpResponse: HttpResponse = await loginCompanyFactory.execute(httpRequest)
  
  return response.status(httpResponse.status).json(httpResponse.body)
}