import IShared from '../../shared';
export declare namespace RichContent {
    interface Model {
        text?: string;
        html?: string;
        status?: IShared.PublicationStatus;
        slateJSON?: string;
    }
}
export default RichContent;
