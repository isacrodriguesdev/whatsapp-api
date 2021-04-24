import jwt from "jsonwebtoken"
import { Company } from "../../entities/Company";
import { HttpRequest } from "../../protocols/http";

export interface IDataToken {
  id?: string
  email?: string
  cnpj_cpf?: string
  username?: string
}

export interface IJwtControllerAdpter {
  createToken(data: IDataToken): string
  verifyToken(token: string): Promise<any>
}

export class JwtControllerAdpter implements IJwtControllerAdpter {

  createToken(data: IDataToken): string {
    return jwt.sign(data, "sad", { expiresIn: "30d" })
  }

  verifyToken(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, "sad", (error, decoded) => {
        if (error) {
          return reject(error)
        }
        resolve(decoded)
      })
    })
  }
}