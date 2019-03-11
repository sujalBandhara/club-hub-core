// // External Dependencies
// import 'mocha'
// import { expect } from 'chai'

// // Core Service
// import ClubHubService from '../../service'

// // Constants
// import { USERNAME, PASSWORD, CLUB } from '../constants'
// import Session from '../../models/session'

// describe('Section Service', async function () {

//   this.timeout(5000)

//   describe('should fetch sections', async function () {

//     it('should return 100 and all sections for the club', async function () {
//       const testUrl: string = 'http://localhost:8080/v1/'
//       const login: Session.Login = await ClubHubService.login(testUrl, USERNAME, PASSWORD, CLUB)
//       const service: ClubHubService = new ClubHubService(testUrl, login.token)

//       const sections = await service.sections.getSections()
//       expect(sections).to.exist
//       expect(sections.count).to.exist
//       expect(sections.sections).to.exist
//     })

//   })

// })
