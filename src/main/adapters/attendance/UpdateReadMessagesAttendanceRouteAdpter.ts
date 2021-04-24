
import { HttpRequest, HttpResponse } from "../../../protocols/http"
import { Request, Response } from "express"
import { UpdateReadMessagesAttendanceFactory } from "../../factories/attendance/UpdateReadMessagesAttendanceFactory"

export async function updateReadMessagesAttendanceRouteAdpter(request: Request, response: Response) {

  const updateReadMessagesAttendanceFactory = UpdateReadMessagesAttendanceFactory()

  const httpRequest: HttpRequest = {
    body: {}, 
    params: {
      id: request.params.id
    },
  }

  const httpResponse: HttpResponse = await updateReadMessagesAttendanceFactory.execute(httpRequest)
  
  return response.status(httpResponse.status).json(httpResponse.body)
}