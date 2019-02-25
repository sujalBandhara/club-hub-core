import { LocationInterface } from './location'

export interface ClubInterface {
    _id: string
    name: string
    locations: LocationInterface
    eventTypes: string[]
    userGroups: string[]
}

/**
 * This is returned from the unprotected club endpoint
 * that is used to populate the club selection screen
 * on the Login Component.
 */
export interface SimpleClubInterface {
    _id: string
    name: string
    city: string
    state: string
    zip: string
  }