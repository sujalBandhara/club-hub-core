// External Dependencies
import { Types } from 'mongoose'

export namespace Image {

    // --------------------------------
    // Main Interface
    // ---------------------------------

    export interface Model {
        // Max Width: 1200px
        large?: string
        // Max Width: 760px
        medium?: string
        // Max Width: 300px
        small?: string
        // Max Width: 10px
        micro?: string
    }
}

export default Image

