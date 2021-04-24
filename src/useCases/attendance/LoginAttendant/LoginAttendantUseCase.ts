import { IJwtControllerAdpter } from "../../../helpers/jwt/JwtControllerAdpter";
import { HttpRequest, HttpResponse } from "../../../protocols/http";
import { IAttendanceRepository } from "../../../repositories/AttendanceRepository"
import { IEncryptionController } from "../../../utils/protocols/EncryptionController"

interface ILoginAttendantUseCase {
  execute(request: HttpRequest): Promise<HttpResponse>
}

export class LoginAttendantUseCase implements ILoginAttendantUseCase {

  constructor(
    private readonly attendantRepository: IAttendanceRepository,
    private readonly jwtProvider: IJwtControllerAdpter,
    private readonly encryptionController: IEncryptionController
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const attendant = await this.attendantRepository.existsAttendant(httpRequest.body.email)

      if (!attendant) {
        return { body: { error: "Account not found" }, status: 401 }
      }

      const correctPassword = await this.encryptionController.comparePassword(httpRequest.body.password, attendant.password)

      if (!correctPassword) {
        return { body: { error: "Incorrect password" }, status: 401 }
      }

      const dataToken = {
        id: attendant.id,
        email: httpRequest.body.email
      }

      const dataUser = {
        ...attendant,
        first_name: attendant.first_name.toString(),
        last_name: attendant.last_name?.toString(),
        password: undefined,
      }

      const token = this.jwtProvider.createToken(dataToken)

      return {
        body: {
          user: dataUser,
          token
        },
        status: 200
      }

    } catch (error) {
      return {
        body: { error },
        status: 401
      }
    }

  }

}