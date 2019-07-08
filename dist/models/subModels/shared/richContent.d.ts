import IShared from '../../shared';
export declare namespace RichContent {
    interface Model {
        text?: string;
        html?: string;
        publishedHtml?: string;
        status?: IShared.PublicationStatus;
        slateJSON?: string;
    }
}
export default RichContent;
