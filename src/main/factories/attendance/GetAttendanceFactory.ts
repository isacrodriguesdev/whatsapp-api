import { AttendanceRepositoryAdapter } from "../../../infra/knex/repositoryAdpter/AttendanceRepositoryAdpter"
import { GetAttendanceUseCase } from "../../../useCases/attendance/GetAttendance/GetAttendanceUseCase"

export function GetAttendanceFactory() {
  const attendanceRepositoryAdpter = new AttendanceRepositoryAdapter()

  return new GetAttendanceUseCase(attendanceRepositoryAdpter)
}