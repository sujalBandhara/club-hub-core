import 'mocha'
import { expect } from 'chai'

import Service from '../../service'

describe('Service', function () {

    const baseURL: string = process.env.BASE_URL!
    const service = new Service(baseURL, '')

    describe('User Service', () => {
        describe('login', () => {
            it('should login the test user.', async () => {
                const email = 'guest@tryclubhub.com'
                const password = 'ClubHub!'
                const domain = 'pine'
                const res = await service.users.login(email, password, domain)
                console.log("Res", res)
            })
        })
    })
})
