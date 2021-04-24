import express, { Express } from "express"
import { corsConfig } from "../middlewares/cors"

export function middlewares(app: Express) {
  app.use(express.json())
  app.use(corsConfig)
  app.use(express.urlencoded({extended: true}))


}