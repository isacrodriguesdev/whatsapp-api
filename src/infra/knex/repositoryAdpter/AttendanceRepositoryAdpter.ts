import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";
import { knexDatabase } from "../KnexDatabase";

export class AttendanceRepositoryAdapter implements IAttendanceRepository {

  existsAttendant(email: string): Promise<any> {
    return knexDatabase("operators")
      .where("email", email)
      .first()
  }

  getAttendanceMessages(attendmentId: string): Promise<any[]> {
    return knexDatabase('chat_attendance')
      .where({
        attendment_id: attendmentId,
      })
      .select("*")
      .orderBy("created_at", "asc")
  }

  getLastMessage(attendmentId: string): Promise<any> {
    return knexDatabase('chat_attendance')
      .where({
        attendment_id: attendmentId,
      })
      .select(
        'text',
        'file',
        'type',
        "created_at",
      )
      .orderBy("created_at", "desc")
      .first()
  }

  async getAttendances(operatorId: string, botId: string): Promise<any> {

    const onChat = await knexDatabase('attendance')
      .where({
        "attendance.operator_id": operatorId,
        "attendance.bot_id": botId,
        "attendance.finished": false
      })
      .select(
        'attendance.*',
        'users.first_name',
        'users.last_name',
        'users.photo',
        'users.chat_identifier',
        'users.cpf',
        'users.email',
        'users.phone'
      )
      .join('users', {
        'attendance.user_id': 'users.id',
        // 'operators_bots.bot_id': 'attendance.bot_id'
      })
      .orderBy([{ column: 'attendance.created_at', order: 'desc' }])

    const onWaiting = await knexDatabase('attendance_waiting')
      .where({
        "attendance_waiting.operator_id": operatorId,
        "attendance_waiting.bot_id": botId,
        "attendance_waiting.waiting": true
      })
      .select(
        'attendance_waiting.*',
        'users.first_name',
        'users.last_name',
        'users.photo',
        'users.chat_identifier',
        'users.cpf',
        'users.email',
        'users.phone'
      )
      .join('users', {
        'attendance_waiting.user_id': 'users.id',
      })
      .orderBy([{ column: 'attendance_waiting.created_at', order: 'desc' }])

    return {
      onChat,
      onWaiting
    }
  }

}