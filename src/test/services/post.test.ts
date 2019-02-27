// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'

// Constants
import { USERNAME, PASSWORD, CLUB } from '../constants'
import Session from '../../models/session'
import Request from '../../models/request'

describe('Post Service', async function () {

  this.timeout(5000)

  describe('should return all posts', async function () {

    it('should return 200 and all the club post', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'
      const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
      const service: ClubHubService = new ClubHubService(testUrl, login.token)

      const query: Request.GetQuery = {
        limit: '0'
      }

      const posts = await service.post.getPosts(query)
      expect(posts).to.exist
      expect(posts.posts.length).to.be.greaterThan(0)
    })

  })

})
