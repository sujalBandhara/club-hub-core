// Internal Namespaces
import Event from './event'
import User from './user'
import Post from './post'
import Club from './club'
import Section from './section'
import Calendar from './calendar'
import Restaurant from './restaurant'
import NotificationPreference from './notificationPreference'

namespace Response {

	// --------------------------------
	// Server Responses
	// ---------------------------------

	interface PaginatedResponse {
		count: number
	}

	export interface Event extends PaginatedResponse {
		events: Event.Model[]
	}

	export interface User extends PaginatedResponse {
		users: User.Model[]
	}

	export interface Post extends PaginatedResponse {
		posts: Post.Model[]
	}

	export interface Calendar extends PaginatedResponse {
		calendars: Calendar.Model[]
	}

	export interface NonAdminStateResponse {
		club: Club.Model
		user: User.Model
		users: User.Model[]
		restaurants: Restaurant.Model[]
		calendars: Calendar.Model[]
		sections: Section.Model[]
	}

	export interface AdminStateResponse {
		user: User.Model
		club: Club.Model
		calendars: Calendar.Model[]
		admins: User.Model[]
		members: User.Model[]
		restaurants: Restaurant.Model[]
	}

	// --------------------------------------------------
	// User Group Response With Notification Preferences.
	// --------------------------------------------------

	/** 
	 * Response payload containing the User Group and
	 * the Notification Preference associated with that group.
	 * If a Notification Preference isn't returned with the group,
	 * then notifications to that group are allowed.
	 */
	export type UserGroupResponse = UserGroupInfo[]

	export interface UserGroupInfo {
		group: User.UserGroup
		notificationPreference?: NotificationPreference.Model 
	} 
}

export default Response
