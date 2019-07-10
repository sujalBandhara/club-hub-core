export namespace ContentLink {
    export interface Model {
        link: string,
        name: string
    }

    export interface ClubContentLinks {
        posts: Model[],
        events: Model[]
    }
}

export default ContentLink