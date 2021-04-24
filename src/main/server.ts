import express from "express";
import { middlewares } from "./config/middlewares";
import { diskStorage } from "./middlewares/multer";

import { getOneCompanyRouteAdpter } from "./adapters/panel/company/GetOneCompanyRouteAdpter";
import { loginCompanyRouteAdpter } from "./adapters/panel/company/LoginCompanyRouteAdpter";
import { updateCompanyRouteAdpter } from "./adapters/panel/company/UpdateCompanyRouteAdpter";
import { getBotsCompanyRouteAdpter } from "./adapters/panel/bots/GetBotsCompanyRouteAdpter";
import { getBotsActiveCompanyRouteAdpter } from "./adapters/panel/bots/GetBotsActiveCompanyRouteAdpter";
import { getBotCompanyRouteAdpter } from "./adapters/panel/bots/GetBotCompanyRouteAdpter";
import { updateBotCompanyRouteAdpter } from "./adapters/panel/bots/UpdateBotCompanyRouteAdpter";
import { GetConfigBotCompanyRouteAdpter } from "./adapters/panel/bots/GetConfigBotCompanyRouteAdpter";
import { updatePasswordCompanyAdpter } from "./adapters/panel/company/UpdatePasswordCompanyAdpter";
import { updatePhotoCompanyAdpter } from "./adapters/panel/company/UpdatePhotoCompanyRouteAdpter";

import { loginAttendantRouteAdpter } from "./adapters/attendance/LoginAttendantRouteAdpter";
import { getAttendanceRouteAdpter } from "./adapters/attendance/GetAttendanceRouteAdpter";

import { jwtAuthRouteAdpter as jwtAuth } from "./adapters/JwtAuthRouteAdpter";
import { UpdateFileBotCompanyRouteAdpter } from "./adapters/panel/bots/UpdateFileBotCompanyRouteAdpter";

import { createBotCompanyRouteAdpter } from "./adapters/panel/bots/CreateBotCompanyRouteAdpter";
import { deleteBotCompanyRouteAdapter } from "./adapters/panel/bots/DeleteBotCompanyRouteAdapter";


/** Transmissions */
import { createTransmissionCompanyRouteAdpter } from "./adapters/panel/transmission/CreateTransmissionCompanyRouteAdpter";
import { getTransmissionCompanyRouteAdpter } from "./adapters/panel/transmission/GetTransmissionCompanyRouteAdpter";


const app = express();
middlewares(app);

app.get("/", (request, response) => {
  response.send("Welcome :)");
});


/***************************
 * ROUTER BOTS FILE PUT
 ***************************/
app.put(
  "/company/bots/file/:id",
  jwtAuth().handle,
  diskStorage("files").single("file"),
  UpdateFileBotCompanyRouteAdpter
);
/***************************
 * ROUTER BOTS GET
 ***************************/
app.get(
  "/company/bots/config/:id",
  jwtAuth().handle,
  GetConfigBotCompanyRouteAdpter
);
/***************************
 * ROUTER BOTS DELETE
 ***************************/
app.delete(
  "/company/bots/delete/:id/:password",
  jwtAuth().handle,
  deleteBotCompanyRouteAdapter
);

/***************************
 * ROUTER BOTS PUT
 ***************************/
app.put(
  "/company/bots/:id",
  jwtAuth().handle,
  diskStorage("photos").single("photo"),
  updateBotCompanyRouteAdpter
);

/***************************
 * ROUTER BOTS
 ***************************/
app.get("/company/bots/data/:id", jwtAuth().handle, getBotCompanyRouteAdpter);
app.post("/company/bots/create", jwtAuth().handle, createBotCompanyRouteAdpter);
app.get("/company/bots/list", jwtAuth().handle, getBotsCompanyRouteAdpter);
app.get("/company/bots/active", jwtAuth().handle, getBotsActiveCompanyRouteAdpter);

app.put(
  "/company/update/password",
  jwtAuth().handle,
  updatePasswordCompanyAdpter
);
app.put(
  "/company/update/photo",
  jwtAuth().handle,
  diskStorage("photos").single("photo"),
  updatePhotoCompanyAdpter
);

app.put("/company/update", jwtAuth().handle, updateCompanyRouteAdpter);
app.get("/company/data", jwtAuth().handle, getOneCompanyRouteAdpter);
app.post("/company/login", loginCompanyRouteAdpter);
app.post("/operator/login", loginAttendantRouteAdpter);
app.get("/attendance/list/:bot_id", jwtAuth().handle, getAttendanceRouteAdpter);



/************************** Campaign ************************/
app.post(
  "/company/transmission/create",
  jwtAuth().handle,
  diskStorage("files").single("file"),
  createTransmissionCompanyRouteAdpter
);

app.get("/company/transmission/list", jwtAuth().handle, getTransmissionCompanyRouteAdpter);

app.use(express.static(__dirname + "/../../uploads"));

app.listen(3333, () => {
  console.log("Servidor started");
});

/*
2918b4e9-0605-4205-affc-35c2b35ce3ab dep
aa8851f3-d74b-4a35-9bac-fc9b8f52d13c bot
6da28d8c-2036-46e9-9ce4-07be8d63e536 user
4fa32c48-0568-4607-957c-72c145f026e2 att

*/
