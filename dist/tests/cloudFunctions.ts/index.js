// /* tslint:disable:only-arrow-functions */
// /* tslint:disable:no-unused-expression */
// // External Dependencies
// import 'mocha'
// import * as chai from 'chai'
// import { expect } from 'chai'
// // Internal Dependencies
// import FirebaseAuth, { AuthUser } from '../../Firebase/firebaseAuth'
// import FirebaseService, { DecodedIdToken } from '../../Firebase/firebaseService'
// import CloudFunctionsAPI from '../../fetch'
// // Factories
// import { CreateEvent } from '../factories'
// // Constants
// const EMAIL_IN_USE_ERROR = 'auth/email-already-in-use'
// describe.only('CloudFunctionsAPI', function() {
// 	this.timeout(35000)
// 	const testEmail = 'test@gmail.com'
// 	const testPassword = 'password'
// 	let testMember: any
// 	let testMemberUID = 'UyIQi94B9cbvkfFMnJ8YNVhJNPZ2'
// 	let testEventID: string = null
// 	before(async () => {
// 		await FirebaseAuth.signInWithEmailAndPassword(testEmail, testPassword)
// 		testEventID = await CreateEvent()
// 	})
// 	describe('sendPushNotificationsForEvent()', () => {
// 		it('should send an http request to the push notification http listener', () => {
// 			return CloudFunctionsAPI.sendPushNotificationsForEvent(testEventID).then((res: any) => {
// 				console.log("RESPONSE IS : ", res)
// 			}).catch((err: Error) => {
// 				console.log("ERROR IS : ", err)
// 			})
// 		})
// 	})
// })
//# sourceMappingURL=index.js.map