
import { AttendanceRepositoryAdapter } from "../../../infra/knex/repositoryAdpter/AttendanceRepositoryAdpter"
import { UpdateReadMessagesAttendanceUseCase } from "../../../useCases/attendance/UpdateReadMessagesAttendance/UpdateReadMessagesAttendanceUseCase"

export function UpdateReadMessagesAttendanceFactory() {
  const attendanceRepositoryAdpter = new AttendanceRepositoryAdapter()

  return new UpdateReadMessagesAttendanceUseCase(attendanceRepositoryAdpter)
}