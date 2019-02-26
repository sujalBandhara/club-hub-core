// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'
import Session from 'src/models/session'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'

describe('Calendar Service', async function () {

  this.timeout(5000)

  describe('should get the calendars', async function () {

    it('should return 200 with an array of Calendars', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'

      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)

      const calendars = await service.calendars.getCalendars()
      expect(calendars).to.exist
      expect(calendars.calendars.length).to.be.greaterThan(0)
    })

  })

})
