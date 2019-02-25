// Internal Namespace
import User from './user'
import Club from './club'
import Restaurant from './restaurant'

export namespace Session {

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