// Internal Namespace
import User from './user'
import Club from './club'
import Restaurant from './restaurant'
import { Types } from 'mongoose';

namespace Session {

  export interface Model {
    _id?: Types.ObjectId
    user: User.Model | Types.ObjectId
    club: Club.Model | Types.ObjectId
		lastTouch: Date
    platform: string
    os?: string
    version?: string
		createdAt?: Date
		updatedAt?: Date
  }

  // --------------------------------
	// Login Response
	// ---------------------------------

  export interface Login {
    club: Club.Model
    token: string
    user: User.Model
  }

  // --------------------------------
	// State Response
  // ---------------------------------
  
  export interface State {
    restaurants: Restaurant.Model[]
    users: User.Model[]
    club: Club.Model
    members: User.Model[]
  }

}

export default Session
