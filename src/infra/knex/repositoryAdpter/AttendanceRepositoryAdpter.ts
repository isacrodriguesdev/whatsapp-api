import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";
import { knexDatabase } from "../KnexDatabase";

export class AttendanceRepositoryAdapter implements IAttendanceRepository {

  updateReadMessages(attendmentId): Promise<any> {
    return knexDatabase("chat_attendance")
      .where({
        attendment_id: attendmentId,
        read: false,
        sender: "client"
      }).update("read", true)
  }

  getTotalUnreadMessages(attendmentId: string): Promise<any[]> {
    return knexDatabase("chat_attendance")
      .where({
        attendment_id: attendmentId,
        read: false,
        sender: "client"
      })
      .count()
  }

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

    const attendance = await knexDatabase('attendance')
      .where({
        "attendance.operator_id": operatorId,
        "attendance.bot_id": botId,
        "attendance.status": "waiting"
      }).orWhere({
        "attendance.operator_id": operatorId,
        "attendance.bot_id": botId,
        "attendance.status": "ongoing"
      })
      .select(
        'attendance.*',
        'users.name',
        'users.photo',
        'users.chat',
        'users.cpf',
        'users.email',
        'users.phone'
      )
      .join('users', {
        'attendance.user_id': 'users.id',
      })
      .orderBy([{ column: 'attendance.created_at', order: 'asc' }])

    return {
      onChat: attendance.filter(at => at.status === 'ongoing'),
      onWaiting: attendance.filter(at => at.status === 'waiting'),
    }

  }
}