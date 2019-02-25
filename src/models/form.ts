// External Dependencies.
import { Types } from 'mongoose'

export namespace Form {

	// --------------------------------
	// Main Interface
	// ---------------------------------
	
	export interface Model {
		_id?: Types.ObjectId
		name?: string
		clubID?: Types.ObjectId
		inputs?: Input[]
		responses?: Response[]
	}

	// --------------------------------
	// Supporting Interfaces and Types
	// --------------------------------

	// --------------------------------
	// Form Responses
	// --------------------------------

	export interface Response {
		_id?: Types.ObjectId
		userID: Types.ObjectId // The ID of the user who submitted the form.
		answers: ResponseValues[]
	}

	export interface ResponseValues {
		[key: string]: string
	}

	// --------------------------------
	// Form Inputs
	// --------------------------------

	export interface Input {
		_id?: Types.ObjectId
		title: string
		property: string
		type: InputType
		placeholder?: string
		defaultValue?: any
		selectItems?: InputSelectionItem[] | SelectItem[]
		size?: number
		class?: string
		required?: boolean
		file_accept?: string
		file_multipleFiles?: boolean
		select_isClearable?: boolean
		select_selectAll?: boolean
		number_min?: number
		number_max?: number
	}

	export enum InputType {
		TEXT = 'text',
		EMAIL = 'email',
		PASSWORD = 'password',
		URL = 'url',
		NUMBER = 'number',
		DATE = 'date',
		TIME = 'time',
		DATE_TIME = 'datetime',
		FILE = 'file',
		TEXT_AREA = 'textarea',
		SELECT = 'select',
		MULTI_SELECT = 'multiselect',
		GROUPED_SELECT = 'grouped_select',
		PRICE = 'price',
		SELECT_GROUP = 'selectgroup',
		RADIO_GROUP = 'radiogroup',
		CHECKBOX = 'checkbox',
		CHECKBOX_GROUP = 'checkboxgroup',
		BLANK = 'blank',
		QUILL = 'quill',
	}

	export interface SelectItem {
		label: string
		value?: string
		// For grouped React Select component
		options?: InputSelectionItem[]
		type?: string
	}	

	export interface InputSelectionItem {
		label: string
		value: string
		icon?: any
	}
}

export default Form
