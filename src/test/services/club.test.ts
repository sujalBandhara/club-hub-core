// External Dependencies
import 'mocha'
import { expect } from 'chai'

// Core Service
import ClubHubService from '../../service'
import Club from 'src/models/club'

describe('Club Service', async function () {

  this.timeout(5000)

  describe('should get clubs from the unprotected route', async function () {

    it('should return 200 with an array of SimpleClubInterfaces', async function () {
      const testUrl: string = 'http://localhost:8080/v1/'

      // No token needed for unprotected route.
      const service: ClubHubService = new ClubHubService(testUrl, '')
      const clubs: Club.UnprotectedModel[] = await service.clubs.getClubs()
      expect(clubs).to.exist
      expect(clubs.length).to.be.greaterThan(0)

      const club: Club.UnprotectedModel = clubs[0]
      expect(club._id).to.exist
      expect(club.name).to.exist
      expect(club.city).to.exist
      expect(club.state).to.exist
      expect(club.zip).to.exist
    })

  })

})
