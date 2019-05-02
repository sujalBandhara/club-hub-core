export namespace Image {

    // --------------------------------
    // Main Interface
    // ---------------------------------

    export interface Model {
        // Max Width: 1200px
        lg?: string
        // Max Width: 600px
        md?: string
        // Max Width: 300px
        sm?: string
        // Max Width: 100px
        xs?: string
        // Max Width: 10px
        micro?: string
    }
}

export default Image
