import 'mocha'
import { expect } from 'chai'

import Service from '../../service'

export const getLoginToken = async () => {
    const baseURL: string = process.env.BASE_URL!
    const service = new Service(baseURL, '')

    const email = process.env.TEST_EMAIL as string
    const password = process.env.TEST_PASSWORD as string
    const domain = process.env.TEST_CLUB as string
    const res = await service.users.login(email, password, domain)
    return res.token
}
