// import { FirebaseAuth } from '..';
// import {
//     NewProviderInterface,
//     PublicMemberRSVPInterface,
// } from './types'
// import { TEST_ENV } from '../constants'
// let functionURL: string
// if (process.env.NODE_ENV === TEST_ENV) {
// 	functionURL = 'https://us-central1-drivers-club-test.cloudfunctions.net'
// } else {
// 	functionURL = 'https://us-central1-drivers-club-dev.cloudfunctions.net'
// }
// export default class FirebaseFunctions {
//     /**
// 	 * Calls the `submitNewProvider` firebase cloud function.
// 	 * @param provider the new provider to submit a request for.
// 	 */
// 	public static submitNewProviderRequest(provider: NewProviderInterface): Promise<Response> {
//         const providerURL = `${functionURL}/submitNewProviderRequest`
//         return this.executePostRequest(providerURL, provider)
//     }
// 	/**
// 	 * Sends an email to an admin with the email of a public member who wants to RSVP for an event.
// 	 * @param memberEmail The email of the public member.
// 	 * @param eventID The ID of the event the Public member wants to RSVP to.
// 	 */
// 	public static submitPublicMemberRSVP(memberEmail: string, eventID: string): Promise<any> {
// 		const publicMemberRSVPBody: PublicMemberRSVPInterface = {
// 			member_email: memberEmail,
// 			event_id: eventID
// 		}
//         const publicRsvpURL = `${functionURL}/onPublicRSVP`
//         return this.executePostRequest(publicRsvpURL, publicMemberRSVPBody)
// 	}
// 	/**
// 	 * Sends out push notifications on admin action.
// 	 * @param eventID
// 	 */
// 	public static sendPushNotificationsForEvent(eventID: string): Promise<any> {
// 		const requestBody = {event_ID: eventID}
//         const pushURL = `${functionURL}/sendEventPushNotifications`
//         return this.executePostRequest(pushURL, requestBody)
//     }
//     /**
// 	 * Executes an authenticated post request.
// 	 */
//     private static executePostRequest(url: string, body: any): Promise<any> {
//         return FirebaseAuth.getCurrentMemberIDToken().then((token: any) => {
//             const init: RequestInit = {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify(body),
//                 mode: 'cors'
//             }
//             return fetch(url, init)
//         })
//     }
// }
//# sourceMappingURL=functions.js.map