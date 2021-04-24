import bcrypt from "bcrypt"
import { IEncryptionController } from "../../../utils/protocols/EncryptionController"

export class BCryptControllerAdpter implements IEncryptionController {

  genPassword(password: string, saltRounds: number = 10): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
          return reject(err)
        }
        return resolve(hash)
      })
    })
  }
  
  comparePassword(password: string, hash: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      bcrypt.compare(password, hash, function (err, result) {
        if(err) {
          return reject(err)
        }
        return resolve(result)
      })
    })
  }
}