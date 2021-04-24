import { HttpRequest, HttpResponse } from "../../../protocols/http";
import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";

export class GetAttendanceMessagesUseCase {

  constructor(
    private readonly attendanceRepository: IAttendanceRepository
  ) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const messages = await this.attendanceRepository.getAttendanceMessages(httpRequest.params.id)

      return {
        body: {
          id: httpRequest.params.id,
          messages: messages
        },
        status: 200
      }

    } catch (error) {
      console.log(error)
      return {
        body: { error },
        status: 400
      }
    }


  }
}