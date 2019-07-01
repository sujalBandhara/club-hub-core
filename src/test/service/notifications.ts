import 'mocha'
import { expect } from 'chai'

import Service from '../../service'
import Message from '../../models/message'
import Notification from '../../models/notification'

import * as helper from './helper'

describe.only('Service', async function () {

    let service: Service
    before(async () => {
        const token = await helper.getLoginToken()
        const baseURL: string = process.env.BASE_URL!
        service = new Service(baseURL, token)
    })

    describe('Notification Service', () => {
        describe('getNotifications', () => {
            it('should get the notifications.', async () => {
                const res = await service.messages.getNotifications(Message.DeliveryType.Push)
                expect(res.data.notifications.length).to.be.greaterThan(0)
                expect(res.status).to.eq(200)
            })
        })

        describe('deleteNotification', () => {
            it('should delete the notification.', async () => {
                const res = await service.messages.getNotifications(Message.DeliveryType.Push)
                expect(res.data.notifications.length).to.be.greaterThan(0)
                expect(res.status).to.eq(200)

                const notif = res.data.notifications[0]
                const deleteRes = await service.messages.deleteNotification(notif._id)
                expect(res.status).to.eq(200)
                expect(res.data.deletedAt).to.not.be.null
            })
        })
    })
})
