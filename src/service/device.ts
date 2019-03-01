// External Dependencies
import * as axios from 'axios'

import ClubHubClient from "../client"

export default class DeviceService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * Post a new device.
   */
  public postDevice = async (oneSignalID: string): Promise<void> => {
    const postBody = {
      oneSignalID: oneSignalID
    }
    return this.client.post('device', postBody).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

}
