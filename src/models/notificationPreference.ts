// External Dependencies.
import { Types } from 'mongoose'

namespace NotificationPreference {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	/**
	 * This interface represents the global notification
	 * preferences. Any `true` value on a disable property
	 * will supersede the value of any group specific
	 * notification preference.
	 */
	export interface Model {
		_id?: Types.ObjectId
		userID?: Types.ObjectId
		clubID?: Types.ObjectId
		enableAll?: boolean
		enablePush?: boolean
		enableEmail?: boolean
		enableText?: boolean
	}

	/**
	 * A notification preference object for a
	 * specific user group.
	 */
	export interface Group extends Model {
		groupID: Types.ObjectId
	}
}

export default NotificationPreference
