// External Dependencies.
import { Types } from 'mongoose'

// Sub Models.
import IShared from './shared'

/**
 * Note models a note created within the ClubHub system.
 */
namespace Note {
    
    // --------------------------------
	// Model Interface
    // --------------------------------
    
    export interface Model extends IShared.Timestamps {
        /**
         * The ID for the note.
         */
        _id?: Types.ObjectId
        /**
         * The user to which the note pertains.
         */
        userID: Types.ObjectId
        /**
         * The club to which the note belongs.
         */
        clubID: Types.ObjectId
        /**
         * The creator of the note.
         */
        createdBy: Types.ObjectId
        /**
         * The most recent updater of the note.
         */
        updatedBy?: Types.ObjectId
        /**
         * The content of the note.
         */
        text: string
    }
}

export default Note