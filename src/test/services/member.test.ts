// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'
import Session from 'src/models/session'

describe('Member Service', async function () {

  this.timeout(50000)

  describe('should get the members', async function () {

    it('should return 200 with an array of Members', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'
      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)
      const user = await service.members.getMemberById(login.user._id!.toString())
      expect(user).to.exist
    })

  })

})
