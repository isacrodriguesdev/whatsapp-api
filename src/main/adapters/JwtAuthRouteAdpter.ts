
import { HttpRequest, HttpResponse, } from "../../protocols/http"
import { NextFunction, Request, Response } from "express"
import { JwtAuthFactory } from "../factories/JwtAuthFactory"

// user 

export function jwtAuthRouteAdpter(...roles: string[]) {

  const jwtAuthFactory = JwtAuthFactory()

  async function handle(request: Request, response: Response, next: NextFunction) {
    const httpRequest: HttpRequest = {
      body: {},
      headers: {
        authorization: request.headers.authorization
      },
      roles: [...roles, "admin"]
    }

    const httpResponse: HttpResponse = await jwtAuthFactory.execute(httpRequest)

    if (httpResponse.status === 401) {
      return response.status(httpResponse.status).send(httpResponse.body)
    }

    request.user = httpResponse.user
    request.roles = httpResponse.roles

    next()

  }

  return { handle }

}