// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'
import Session from '../../models/session'
import Request from '../../models/request'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'

describe('Event Service', async function () {

  this.timeout(5000)

  describe('should get the events', async function () {

    it('should return 200 with an array of Events', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'
      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)

      // Blank Query returns all events for the club
      const eventQuery: Request.Event = {
        limit: '0'
      }

      const events = await service.events.getEvents(eventQuery)
      expect(events).to.exist
      expect(events.events.length).to.be.greaterThan(0)
    })

  })

})
