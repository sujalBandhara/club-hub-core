import 'mocha'
import {expect} from 'chai'

import Service from '../../src/service'

describe('Service', function () {
    
    const baseURL: string = process.env.BASE_URL!
    const service = new Service(baseURL, '')
    
    describe('ClubService', () => {
        describe('getClubs', () => {
            it('should get the clubs.', async () => {
                const clubs = await service.clubs.getClubs()
                expect(clubs.length).to.be.greaterThan(0)
            })
        })

        describe('getPublicClubInfo', () => {
            it('should get the club info.', async () => {
                const clubInfo = await service.clubs.getPublicClubInfo('pine')
                expect(clubInfo.club).to.not.be.null
                expect(clubInfo.sections).to.not.be.null
            })
        })
    })
})
