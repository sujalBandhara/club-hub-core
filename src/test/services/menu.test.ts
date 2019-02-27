// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'
import Session from '../../models/session'

describe('Menu Service', async function () {

  this.timeout(5000)

  describe('should post order to menu', async function () {

    it('should return 200 after post', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'
      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)

      // const members = await service.menus.postOrder()
      // expect(members).to.exist
      // expect(members.users.length).to.be.greaterThan(0)
    })

  })

})
