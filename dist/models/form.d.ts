import { Types } from 'mongoose';
import * as Action from './action';
export declare namespace Form {
    interface Model {
        _id?: Types.ObjectId;
        name?: string;
        displayName?: string;
        type?: Action.default.Type;
        clubID?: Types.ObjectId;
        inputs?: Input[];
        responses?: Response[];
    }
    interface Response {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        answers: ResponseValues[];
    }
    interface ResponseValues {
        [key: string]: string;
    }
    interface Input {
        _id?: Types.ObjectId;
        title: string;
        property: string;
        type: InputType;
        placeholder?: string;
        defaultValue?: any;
        selectItems?: InputSelectionItem[] | SelectItem[];
        size?: number;
        class?: string;
        required?: boolean;
        file_accept?: string;
        file_multipleFiles?: boolean;
        select_isClearable?: boolean;
        select_selectAll?: boolean;
        number_min?: number;
        number_max?: number;
    }
    enum InputType {
        TEXT = "text",
        EMAIL = "email",
        PASSWORD = "password",
        URL = "url",
        NUMBER = "number",
        DATE = "date",
        TIME = "time",
        DATE_TIME = "datetime",
        FILE = "file",
        TEXT_AREA = "textarea",
        SELECT = "select",
        MULTI_SELECT = "multiselect",
        GROUPED_SELECT = "grouped_select",
        PRICE = "price",
        SELECT_GROUP = "selectgroup",
        RADIO_GROUP = "radiogroup",
        CHECKBOX = "checkbox",
        CHECKBOX_GROUP = "checkboxgroup",
        BLANK = "blank",
        QUILL = "quill",
        PHONE = "phone"
    }
    interface SelectItem {
        label: string;
        value?: string;
        options?: InputSelectionItem[];
        type?: string;
    }
    interface InputSelectionItem {
        label: string;
        value: string;
        icon?: any;
    }
}
export default Form;
