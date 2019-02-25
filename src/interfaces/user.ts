import { ClubInterface } from './club'

export interface LoginResponse {
  club: ClubInterface
  token: string
  user: UserInterface
}

export interface UserInterface {
    _id: string
    address: string
    admin: boolean
    city: string
    clubID: string
    remoteID: string
    email: string
    firstName: string
    jobTitle: string
    lastName: string
    location: string
    phone: string
    photoURL: string
    state: string
    username: string
    groups: string[]
  }