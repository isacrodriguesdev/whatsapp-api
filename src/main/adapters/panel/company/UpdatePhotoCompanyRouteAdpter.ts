import { UpdatePhotoCompanyFactory } from "../../../factories/panel/company/UpdatePhotoCompanyFactory"
import { Request, Response } from "express"
import { HttpRequest, HttpResponse } from "../../../../protocols/http"

export async function updatePhotoCompanyAdpter(request: Request, response: Response) {

  const updatePhotoCompanyFactory = UpdatePhotoCompanyFactory()

  const httpRequest: HttpRequest = {
    body: request.body,
    user:  {
      id: request.user.id
    },
    file: request.file
  }

  const httpResponse: HttpResponse = await updatePhotoCompanyFactory.execute(httpRequest)

  response.status(httpResponse.status).json(httpResponse.body)
}