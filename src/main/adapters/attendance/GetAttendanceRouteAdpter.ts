import { HttpRequest, HttpResponse } from "../../../protocols/http"
import { Request, Response } from "express"
import { GetAttendanceFactory } from "../../factories/attendance/GetAttendanceFactory"

export async function getAttendanceRouteAdpter(request: Request, response: Response) {

  const getAttendanceFactory = GetAttendanceFactory()

  const httpRequest: HttpRequest = {
    body: {}, 
    params: {
      botId: request.params.bot_id
    },
    user: {
      id: request.user.id
    }
  }

  const httpResponse: HttpResponse = await getAttendanceFactory.execute(httpRequest)
  
  return response.status(httpResponse.status).json(httpResponse.body)
}