// External Dependencies.
import { Types } from 'mongoose'

namespace Credential {

	// --------------------------------
	// Main Interface
	// ---------------------------------

	export interface Model {
		_id?: Types.ObjectId
		clubID?: Types.ObjectId
		branch?: Api
		oneSignal?: Api
		googleCal?: OAuth
		iCal?: OAuth
	}

	export interface Api {
		devAppID?: string
		devApiKey?: string
		devSecretKey?: string
		prodAppID?: string
		prodApiKey?: string
		prodSecretKey?: string
	}

	export interface OAuth {
		refreshToken?: string
		accessToken?: string
		secret?: string
		link?: string
	}
}

export default Credential
