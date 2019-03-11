// External Dependencies
import * as axios from 'axios'

import ClubHubClient from '../client'
import Section from '../models/section'
import Response from '../models/response'

export default class SectionService {

  /**
   * The `ClubHubClient` instance for the service. 
   */
  public client: ClubHubClient

  constructor(client: ClubHubClient) {
    this.client = client
  }

  /**
   * `GET` all of the sections for the Club of the
   * currently authenticated User
   */
  public getSections = async (): Promise<Response.Section> => {
    return this.client.get('sections').then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `POST` a new Section to the Club of the currently
   * authenticated User.
   */
  public createSection = async (section: Section.Model): Promise<Section.Model> => {
    return this.client.post('sections', section).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `PUT` new data to the given Section Id
   * to update it.
   */
  public updateSection = async (section: Section.Model): Promise<Section.Model> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        section_id: section._id
      }
    }
    return this.client.put('sections', section, query).then((response: axios.AxiosResponse) => {
      return response.data
    })
  }

  /**
   * `DELETE` the section data for the given Id.
   */
  public deleteSection = async (sectionID: string): Promise<void> => {
    const query: axios.AxiosRequestConfig = {
      params: {
        section_id: sectionID
      }
    }
    return this.client.delete('sections', query).then(() => {
      return
    })
  }

}
