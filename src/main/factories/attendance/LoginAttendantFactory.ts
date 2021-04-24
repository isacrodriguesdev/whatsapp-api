import { JwtControllerAdpter } from "../../../helpers/jwt/JwtControllerAdpter"
import { AttendanceRepositoryAdapter } from "../../../infra/knex/repositoryAdpter/AttendanceRepositoryAdpter"
import { LoginAttendantUseCase } from "../../../useCases/attendance/LoginAttendant/LoginAttendantUseCase"
import { BCryptControllerAdpter } from "../../../helpers/cryptography/bcrypt/BCryptControllerAdpter"

export function LoginAttendantFactory() {
  const attendanceRepositoryAdpter = new AttendanceRepositoryAdapter()
  const jwtControllerAdpter = new JwtControllerAdpter()
  const bCryptControllerAdpter = new BCryptControllerAdpter()

  return new LoginAttendantUseCase(attendanceRepositoryAdpter, jwtControllerAdpter, bCryptControllerAdpter)
}