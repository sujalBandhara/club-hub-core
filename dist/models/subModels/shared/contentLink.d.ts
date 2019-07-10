export declare namespace ContentLink {
    interface Model {
        link: string;
        name: string;
    }
    interface ClubContentLinks {
        posts: Model[];
        events: Model[];
    }
}
export default ContentLink;
