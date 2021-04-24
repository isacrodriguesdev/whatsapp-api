import { GetAttendanceMessagesFactory } from "../../factories/attendance/GetAttendanceMessagesFactory";

import { HttpRequest, HttpResponse } from "../../../protocols/http"
import { Request, Response } from "express"

export async function getAttendanceMessagesRouteAdpter(request: Request, response: Response) {

  const getAttendanceMessagesFactory = GetAttendanceMessagesFactory()

  const httpRequest: HttpRequest = {
    body: {}, 
    params: {
      id: request.params.id
    },
    user: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getAttendanceMessagesFactory.execute(httpRequest)
  
  return response.status(httpResponse.status).json(httpResponse.body)
}