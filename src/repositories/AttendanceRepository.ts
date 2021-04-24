import { Attendant } from "../entities/Attendant"

export interface IAttendanceRepository {
  getAttendances(attendantId: string, botId: string): Promise<any>
  existsAttendant(username: string): Promise<Attendant>
  getLastMessage(attendmentId: string): Promise<any>
  getAttendanceMessages(attendmentId: string): Promise<any[]>
  getTotalUnreadMessages(attendmentId: string): Promise<any[]>
  updateReadMessages(attendmentId: string): Promise<any[]>
  // createAttendance(attendance: any): Promise<any>
  // getAttendance(attendmentId: string): Promise<any[]>
  // getAttendant(id: string): Promise<Attendant>
}