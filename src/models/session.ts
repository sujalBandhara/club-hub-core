// Internal Namespace
import User from './user'
import Club from './club'
import Restaurant from './restaurant'
import { Types } from 'mongoose';

namespace Session {

  export interface Model {
    _id?: Types.ObjectId
		user: User.Model | Types.ObjectId
		lastTouch: Date
		platform: string
		createdAt?: Date
		updatedAt?: Date
  }

  export enum PlatformTypes {
    Chrome = 'Chrome',
    Edge = 'Edge',
    IE = 'IE',
    Safari = 'Safari',
    Firefox = 'Firefox',
    Opera = 'Opera',
    NativeIos = 'iOS',
    AndroidAndroid = 'Android',
    OtherWeb = 'OtherWeb',
    OtherMobile = 'OtherMobile',
    Other = 'Other'
  }
  
  export enum DeviceTypes {
    Desktop = 'Desktop',
    iPhone = 'iPhone',
    Android = 'Android',
    iOSTablet = 'iOSTablet',
    androidTablet = 'androidTablet',
    otherPhone = 'otherPhone',
    otherTablet = 'otherTablet'
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
