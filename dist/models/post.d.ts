import { Types } from 'mongoose';
import User from './user';
import RichContent from './subModels/shared/richContent';
declare namespace Post {
    interface Model {
        _id?: Types.ObjectId;
        clubID?: Types.ObjectId;
        title?: string;
        description?: string;
        author?: Types.ObjectId | User.Model;
        imageURL?: string;
        attachments?: Attachment[];
        publicationDate?: Date;
        subtitle?: string;
        type?: Types.ObjectId;
        richContent?: RichContent.Model;
    }
    interface Attachment {
        remoteUrl: string;
        attachmentType: AttachmentType;
    }
    enum AttachmentType {
        PDF = "PDF",
        JPG = "JPG",
        PNG = "PNG"
    }
}
export default Post;
