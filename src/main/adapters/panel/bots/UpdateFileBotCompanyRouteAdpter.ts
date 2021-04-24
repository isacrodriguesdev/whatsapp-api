import { HttpRequest, HttpResponse } from "../../../../protocols/http";
import { Request, Response } from "express";
import { UpdateFileBotCompanyFactory } from "../../../factories/panel/bots/UpdateFileBotCompanyFactory";

export async function UpdateFileBotCompanyRouteAdpter(
  request: Request,
  response: Response
) {
  const updateFileBotCompanyFactory = UpdateFileBotCompanyFactory();

  const httpRequest: HttpRequest = {
    body: request.body,
    params: {
      id: request.params.id,
    },
    file: request.file,
  };

  const httpResponse: HttpResponse = await updateFileBotCompanyFactory.execute(
    httpRequest
  );

  response.status(httpResponse.status).json(httpResponse.body);
}
