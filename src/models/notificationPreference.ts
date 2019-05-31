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
		disableAll?: boolean
		disablePush?: boolean
		disableEmail?: boolean
		disableText?: boolean
	}

	/**
	 * A notification preference object for a
	 * specific user group.
	 */
	export interface GroupModel extends Model {
		userGroupID?: Types.ObjectId
	}
}

export default NotificationPreference
