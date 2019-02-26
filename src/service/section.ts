// External Dependencies
import * as axios from 'axios'

import ClubHubClient from 'src/client'
import Club from 'src/models/club'

export default class SectionService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  public getSections = async (): Promise<Section.Model[]> => {
    return this.client.get('content/sections', query)
  }

}
