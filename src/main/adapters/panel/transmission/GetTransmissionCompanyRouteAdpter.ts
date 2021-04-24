import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { GetTransmissionCompanyFactory } from "../../../factories/panel/transmission/GetTransmissionCompanyFactory";

export async function getTransmissionCompanyRouteAdpter(request: Request, response: Response) {

  const getTransmissionCompanyFactory = GetTransmissionCompanyFactory()

  const httpRequest: HttpRequest = {
    body: {},
    user: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getTransmissionCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}