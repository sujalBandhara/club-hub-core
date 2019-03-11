// // External Dependencies
// import 'mocha'
// import { expect } from 'chai'

// // Core Service
// import ClubHubService from '../../service'

// // Constants
// import { USERNAME, PASSWORD, CLUB } from '../constants'
// import Session from '../../models/session'
// import Request from '../../models/request'

// describe('Message Service', async function () {

//   this.timeout(5000)

//   describe('should get all messages', async function () {

//     it('should return 200 and all messages', async function () {
//       const testUrl: string = 'http://localhost:8080/v1/'
//       const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
//       const service: ClubHubService = new ClubHubService(testUrl, login.token)

//       const request: Request.Message = {
//         limit: '0'
//       }

//       const message = await service.messages.getMessages(request)
//       expect(message).to.exist
//       expect(message.count).to.exist
//       expect(message.messages).to.exist
//     })

//   })

// })
