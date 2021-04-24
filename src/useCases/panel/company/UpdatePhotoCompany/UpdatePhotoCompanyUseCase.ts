import { HttpRequest } from "../../../../protocols/http";
import { ICompanyRepository } from "../../../../repositories/CompanyRepository";

export class UpdatePhotoCompanyUseCase {

  constructor(
    private readonly companyRepository: ICompanyRepository,
  ) { }

  async execute(httpRequest: HttpRequest) {

    if (!httpRequest.file) {
      return { status: 400, body: { error: "file not send" } }
    }

    const response = await this.companyRepository.update(httpRequest.user.id, {
      photo: httpRequest.file.filename
    })
    return { status: 200, body: response }

  }
}