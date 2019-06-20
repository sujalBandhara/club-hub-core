import 'mocha'
import { expect } from 'chai'

import Service from '../../service'

describe('Service', function () {

    const baseURL: string = process.env.BASE_URL!
    const service = new Service(baseURL, '')

    describe('ClubService', () => {
        describe('getClubs', () => {
            it('should get the clubs.', async () => {
                const res = await service.clubs.getClubs()
                expect(res.data.length).to.be.greaterThan(0)
                expect(res.status).to.eq(200)
            })
        })

        describe('getPublicClubInfo', () => {
            it('should get the club info.', async () => {
                const res = await service.clubs.getPublicClubInfo('pine')
                expect(res.data.club).to.not.be.null
                expect(res.data.sections).to.not.be.null
            })
        })
    })
})
