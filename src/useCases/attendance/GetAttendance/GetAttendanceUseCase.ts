import { response } from "express";
import { HttpRequest, HttpResponse } from "../../../protocols/http";
import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";

export class GetAttendanceUseCase {

  constructor(
    private readonly attendanceRepository: IAttendanceRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    const response = await this.attendanceRepository.getAttendances(httpRequest.user.id, httpRequest.params.botId);

    const onChat = await Promise.all(
      response.onChat.map(async chat => {
        let lastMessage = await this.attendanceRepository.getLastMessage(chat.id)

        if (lastMessage === undefined) {
          lastMessage = {}
        }

        return {
          ...chat,
          first_name: chat.first_name?.toString(),
          last_name: chat.last_name?.toString(),
          last_message_text: lastMessage.text?.toString(),
          last_message_type: lastMessage.type,
          last_message_file: lastMessage.file,
          last_message_created_at: lastMessage.created_at,
          unread_messages: 5,
          finished: undefined,
          messages: []
        }
      })
    )

    const onWaiting = await Promise.all(
      response.onWaiting.map(async chat => {
        let lastMessage = await this.attendanceRepository.getLastMessage(chat.id)
        console.log(lastMessage)

        if (lastMessage === undefined) {
          lastMessage = {}
        }

        return {
          ...chat,
          first_name: chat.first_name?.toString(),
          last_name: chat.last_name?.toString(),
          last_message_text: lastMessage.text?.toString(),
          last_message_type: lastMessage.type,
          last_message_file: lastMessage.file,
          last_message_created_at: lastMessage.created_at,
          unread_messages: 2,
          waiting: undefined,
          messages: []
        }
      })
    )

    return { body: { onWaiting, onChat }, status: 200 }
  }

}