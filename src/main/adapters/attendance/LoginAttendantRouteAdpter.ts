import { HttpRequest, HttpResponse } from "../../../protocols/http"
import { Request, Response } from "express"
import { LoginAttendantFactory } from "../../factories/attendance/LoginAttendantFactory"

export async function loginAttendantRouteAdpter(request: Request, response: Response) {

  console.log(request.body)

  const loginCompanyFactory = LoginAttendantFactory()

  const httpRequest: HttpRequest = {
    body: {
      email: request.body.email,
      password: request.body.password
    }
  }

  const httpResponse: HttpResponse = await loginCompanyFactory.execute(httpRequest)
  
  return response.status(httpResponse.status).json(httpResponse.body)
}