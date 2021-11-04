import * as R from 'ramda'
import {Reducer, useReducer} from "react";
import {CreatePostInput} from "../../../types/post.type";

type ValidationFunction = (value: string) => { valid: boolean, message: null | string }

type State = {
    title: { value: string, error: string | null, validationFns: ValidationFunction }
    slug: { value: string, error: string | null, validationFns: ValidationFunction },
    image: { value: string, error: string | null, validationFns: ValidationFunction },
    date: { value: Date, error: string | null, validationFns: ValidationFunction },
    content: { value: string, error: string | null, validationFns: ValidationFunction },
    isDraft: { value: boolean, error: string | null, validationFns: ValidationFunction }
}

type Action =
    { type: 'EDIT_FIELD', payload: { name: keyof State, value: string | boolean | Date } }
    | { type: 'CLEAR_STATE' }


// Better implementation for validation fns
const baseValidationFunction: ValidationFunction = () => ({valid: true, message: null})
const requiredField: ValidationFunction = (v) => !R.isEmpty(R.trim(v)) ? {valid: true, message: null} : {
    valid: false,
    message: "Field is required"
}

const withoutSpacesAndRequired: ValidationFunction = (v) => R.contains(" ", v) || R.isEmpty(v) ? {
    valid: false,
    message: "Cannot contain spaces and is required"
} : {valid: true, message: null}

const initialState: State = {
    title: {value: '', error: null, validationFns: requiredField},
    slug: {value: '', error: null, validationFns: withoutSpacesAndRequired},
    image: {value: '', error: null, validationFns: withoutSpacesAndRequired},
    date: {value: new Date, error: null, validationFns: baseValidationFunction},
    content: {value: '', error: null, validationFns: requiredField},
    isDraft: {value: true, error: null, validationFns: baseValidationFunction}
}

const createPostReducer: Reducer<State, Action> = (state: State, action: Action) => {
    switch (action.type) {
        case 'EDIT_FIELD': {
            const {message} = state[action.payload.name].validationFns(action.payload.value.toString())
            return {
                ...state,
                [action.payload.name]: {...state[action.payload.name], value: action.payload.value, error: message}
            }
        }
        case 'CLEAR_STATE': {
            return {...initialState}
        }
        default:
            return state
    }
}

export const useCreatePostForm = () => {
    const [state, dispatch] = useReducer(createPostReducer, initialState)
    const editField = (fName: keyof State, fValue: string | boolean | Date) => dispatch({
        type: 'EDIT_FIELD',
        payload: {
            name: fName,
            value: fValue
        }
    })

    // Update using reduce
    const _getPayload = (): CreatePostInput => ({
        title: state.title.value,
        slug: state.slug.value,
        content:state.content.value,
        publishedAt: state.date.value,
        img: state.image.value,
        isDraft:state.isDraft.value
    })


    return {state, actions: {editField, getPayload: _getPayload}}
}