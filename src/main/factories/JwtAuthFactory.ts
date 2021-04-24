import { JwtControllerAdpter } from "../../helpers/jwt/JwtControllerAdpter"
import { jwtAuth } from "../middlewares/jwtAuth"

export function JwtAuthFactory() {
  const jwtControllerAdpter = new JwtControllerAdpter()

  return new jwtAuth(jwtControllerAdpter)
}