// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'
import Session from '../../models/session'

describe('User Service', async function () {

  this.timeout(5000)

  describe('should fetch the app state', async function () {

    it('should return 200 and the appState', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'
      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)

      const state = await service.users.getState()
      expect(state).to.exist
      expect(state.club).to.exist
      expect(state.users.length).to.be.greaterThan(0)
      expect(state.restaurants.length).to.be.greaterThan(0)
    })

  })

})
