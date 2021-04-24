import { AttendanceRepositoryAdapter } from "../../../infra/knex/repositoryAdpter/AttendanceRepositoryAdpter"
import { GetAttendanceMessagesUseCase } from "../../../useCases/attendance/GetAttendanceMessages/GetAttendanceMessagesUseCase"

export function GetAttendanceMessagesFactory() {
  const attendanceRepositoryAdpter = new AttendanceRepositoryAdapter()

  return new GetAttendanceMessagesUseCase(attendanceRepositoryAdpter)
}