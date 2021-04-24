import { response } from "express";
import { HttpRequest, HttpResponse } from "../../../protocols/http";
import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";

export class GetAttendanceUseCase {

  constructor(
    private readonly attendanceRepository: IAttendanceRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    const buildChatObject = (chat, lastMessage, totalUnreadMessages) => ({
      ...chat,
      name: chat.name?.toString(),
      last_message_text: lastMessage.text?.toString(),
      last_message_type: lastMessage.type,
      last_message_file: lastMessage.file,
      last_message_created_at: lastMessage.created_at,
      unread_messages: parseInt(totalUnreadMessages.count),
      messages: []
    }) 

    const response = await this.attendanceRepository.getAttendances(httpRequest.user.id, httpRequest.params.botId);

    const onChat = await Promise.all(
      response.onChat.map(async chat => {
        
        let lastMessage = await this.attendanceRepository.getLastMessage(chat.id)
        const [totalUnreadMessages] = await this.attendanceRepository.getTotalUnreadMessages(chat.id)

        if (lastMessage === undefined) lastMessage = {}
        
        return buildChatObject(chat, lastMessage, totalUnreadMessages)
      })
    )

    const onWaiting = await Promise.all(
      response.onWaiting.map(async chat => {

        let lastMessage = await this.attendanceRepository.getLastMessage(chat.id)
        const [totalUnreadMessages] = await this.attendanceRepository.getTotalUnreadMessages(chat.id)

        if (lastMessage === undefined) lastMessage = {}
        
        return buildChatObject(chat, lastMessage, totalUnreadMessages)
      })
    )

    return { body: { onWaiting, onChat }, status: 200 }
  }

}