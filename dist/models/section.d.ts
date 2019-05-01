import { Types } from 'mongoose';
import { RichContent } from './subModels/shared/richContent';
import IShared from './shared';
declare namespace Section {
    interface Model extends IShared.Timestamps {
        _id?: Types.ObjectId;
        clubID: Types.ObjectId;
        name: string;
        status: IShared.PublicationStatus;
        pages: Page[];
        createdBy: Types.ObjectId;
        updatedBy: Types.ObjectId;
    }
    interface Page extends IShared.Timestamps {
        _id?: Types.ObjectId;
        sectionID: Types.ObjectId;
        name: string;
        content: RichContent.Model;
        createdBy: Types.ObjectId;
        updatedBy: Types.ObjectId;
    }
}
export default Section;
