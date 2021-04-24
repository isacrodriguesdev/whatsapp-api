import { ICompanyTransmissionRepository } from './../../../../repositories/CompanyTransmissionRepository';
import { HttpRequest, HttpResponse } from "../../../../protocols/http"

export class GetTransmissionCompanyUseCase {
  constructor(private readonly companyTransmissionRepository: ICompanyTransmissionRepository) { }

  async execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    // try {
    const bots = await this.companyTransmissionRepository.getAll(httpRequest.user.id)

    const botsData = await Promise.all(
      bots.map(async (bot) => {

        //     // const lastUsersData = await this.companyTransmissionRepository.getLastRegisteredUsers(bot.id)
        //     // const lastUsersMap = lastUsersData.map(user => {
        //     //   return {
        //     //     ...user,
        //     //     first_name: user.first_name?.toString(),
        //     //     last_name: user.last_name?.toString()
        //     //   }
        //     // })

        //     // if (lastUsersMap && lastUsersMap.length > 0) {
        //     //   return {
        //     //     ...bot,
        //     //     last_registered_users: lastUsersMap
        //     //   }
        //     // } else {
        return { ...bot }
        //     // }

      })
    )

    return {
      body: botsData,
      status: 200,
    }
    // } catch (error) {

    //   return {
    //     body: error,
    //     status: 200,
    //   }
    // }
  }
}
