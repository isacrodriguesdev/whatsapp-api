import { HttpRequest, HttpResponse } from "../../../protocols/http";
import { IAttendanceRepository } from "../../../repositories/AttendanceRepository";

export class UpdateReadMessagesAttendanceUseCase {

  constructor(
    private readonly attendanceRepository: IAttendanceRepository
  ) {}

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {

    try {
      const response = await this.attendanceRepository.updateReadMessages(httpRequest.params.id)
      return { body: response, status: 200 }
    } catch (error) {
      return { body: { error }, status: 400 }
    }
  }
}