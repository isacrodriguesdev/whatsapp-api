import express from "express"
import { middlewares } from "./config/middlewares"
import { diskStorage } from "./middlewares/multer"

import { getOneCompanyRouteAdpter } from "./adapters/panel/company/GetOneCompanyRouteAdpter"
import { loginCompanyRouteAdpter } from "./adapters/panel/company/LoginCompanyRouteAdpter"
import { updateCompanyRouteAdpter } from "./adapters/panel/company/UpdateCompanyRouteAdpter"
import { getBotsCompanyRouteAdpter } from "./adapters/panel/bots/GetBotsCompanyRouteAdpter"
import { getBotCompanyRouteAdpter } from "./adapters/panel/bots/GetBotCompanyRouteAdpter"
import { updateBotCompanyRouteAdpter } from "./adapters/panel/bots/UpdateBotCompanyRouteAdpter"
import { GetConfigBotCompanyRouteAdpter } from "./adapters/panel/bots/GetConfigBotCompanyRouteAdpter"
import { updatePasswordCompanyAdpter } from "./adapters/panel/company/UpdatePasswordCompanyAdpter"
import { updatePhotoCompanyAdpter } from "./adapters/panel/company/UpdatePhotoCompanyRouteAdpter"

import { loginAttendantRouteAdpter } from "./adapters/attendance/LoginAttendantRouteAdpter"
import { getAttendanceRouteAdpter } from "./adapters/attendance/GetAttendanceRouteAdpter"

import { jwtAuthRouteAdpter as jwtAuth } from "./adapters/JwtAuthRouteAdpter"
import { UpdateConfigBotCompanyRouteAdpter } from "./adapters/panel/bots/UpdateConfigBotCompanyRouteAdpter"
import { createBotCompanyRouteAdpter } from "./adapters/panel/bots/CreateBotCompanyRouteAdpter"
import { deleteBotCompanyRouteAdapter } from "./adapters/panel/bots/DeleteBotCompanyRouteAdapter"
import { getAttendanceMessagesRouteAdpter } from "./adapters/attendance/GetAttendanceMessagesRouteAdpter"
import { updateReadMessagesAttendanceRouteAdpter } from "./adapters/attendance/UpdateReadMessagesAttendanceRouteAdpter"

const app = express()
middlewares(app)

app.get("/", (request, response) => {
  response.send("Welcome :)")
})

app.put("/company/bots/config/:id", jwtAuth().handle, diskStorage("files").single("file"), UpdateConfigBotCompanyRouteAdpter)
app.get("/company/bots/config/:id", jwtAuth().handle, GetConfigBotCompanyRouteAdpter)
app.delete("/company/bots/delete/:id", jwtAuth().handle, deleteBotCompanyRouteAdapter)

app.put("/company/bots/update/:id", jwtAuth().handle, diskStorage("photos").single("photo"), updateBotCompanyRouteAdpter)
app.get("/company/bots/data/:id", jwtAuth().handle, getBotCompanyRouteAdpter)

app.post("/company/bots/create", jwtAuth().handle, createBotCompanyRouteAdpter)
app.get("/company/bots/list", jwtAuth().handle, getBotsCompanyRouteAdpter)

app.put("/company/update/password", jwtAuth().handle, updatePasswordCompanyAdpter)
app.put("/company/update/photo", jwtAuth().handle, diskStorage("photos").single("photo"), updatePhotoCompanyAdpter)

app.put("/company/update", jwtAuth().handle, updateCompanyRouteAdpter)
app.get("/company/data", jwtAuth().handle, getOneCompanyRouteAdpter)
app.post("/company/login", loginCompanyRouteAdpter)

// Atendimento
app.post("/operator/login", loginAttendantRouteAdpter)
app.get("/attendance/list/:bot_id", jwtAuth("operator").handle, getAttendanceRouteAdpter)
app.get("/attendance/messages/:id", jwtAuth("operator").handle, getAttendanceMessagesRouteAdpter)
app.put("/attendance/messages/:id", jwtAuth("operator").handle, updateReadMessagesAttendanceRouteAdpter)

app.use(express.static(__dirname + '/../../uploads'))

app.listen(3333, () => {
  console.log("Servidor started")
})

