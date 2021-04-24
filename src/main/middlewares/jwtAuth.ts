import { Request, Response, NextFunction } from "express";
import { IJwtControllerAdpter } from "../../helpers/jwt/JwtControllerAdpter";
import { HttpRequest, HttpResponse } from "../../protocols/http";

export class jwtAuth {

  constructor(private readonly jwtProvider: IJwtControllerAdpter) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    const roles: string[] = ["admin"]

    if (!httpRequest.headers.authorization) {
      return { body: { error: "token not provided" }, status: 401 }
    }

    try {

      const decoded = await this.jwtProvider.verifyToken(httpRequest.headers.authorization)

      const allowed = roles.map((role) => {
        if (httpRequest.roles && httpRequest.roles.includes(role)) {
          return true
        }
      })

      if (allowed.includes(true)) {
        return { body: {}, status: 201, user: decoded }
      } else {
        return { body: { error: "not authenticated" }, status: 401 }
      }

    } catch (error) {
      return { body: { error: "not authenticated" }, status: 401 }
    }
  }
}