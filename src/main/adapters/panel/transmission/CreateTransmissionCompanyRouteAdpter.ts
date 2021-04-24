import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { Request, Response } from "express";
import { CreateTransmissionCompanyFactory } from "../../../factories/panel/bots/CreateTransmissionCompanyFactory";

export async function createTransmissionCompanyRouteAdpter(
  request: Request,
  response: Response
) {
  const updateFileBotCompanyFactory = CreateTransmissionCompanyFactory();

  const httpRequest: HttpRequest = {
    body: request.body,
    user: {
      id: request.user.id
    },
    file: request.file,
  };

  const httpResponse: HttpResponse = await updateFileBotCompanyFactory.execute(
    httpRequest
  );

  response.status(httpResponse.status).json(httpResponse.body);
}
