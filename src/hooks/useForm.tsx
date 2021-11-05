import * as R from 'ramda'
import {Reducer, useReducer} from "react";
import {CreatePostInput, Post} from "../types/post.type";

type ValidationFunction = (value: string) => { valid: boolean, message: null | string }

export type FormState = {
    title: { value: string, error: string | null, validationFns: ValidationFunction }
    slug: { value: string, error: string | null, validationFns: ValidationFunction },
    image: { value: string, error: string | null, validationFns: ValidationFunction },
    date: { value: Date, error: string | null, validationFns: ValidationFunction },
    content: { value: string, error: string | null, validationFns: ValidationFunction },
    isDraft: { value: boolean, error: string | null, validationFns: ValidationFunction }
}

type Action =
    { type: 'EDIT_FIELD', payload: { name: keyof FormState, value: string | boolean | Date } }
    | { type: 'CLEAR_STATE' } | {type: 'VALIDATE_FIELDS'} | {type: 'INIT_STATE', payload: {post: Post}}


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

const initialFormState: FormState = {
    title: {value: '', error: null, validationFns: requiredField},
    slug: {value: '', error: null, validationFns: withoutSpacesAndRequired},
    image: {value: '', error: null, validationFns: withoutSpacesAndRequired},
    date: {value: new Date, error: null, validationFns: baseValidationFunction},
    content: {value: '', error: null, validationFns: requiredField},
    isDraft: {value: true, error: null, validationFns: baseValidationFunction}
}

const validateFormState =(state:FormState)=>(Object.keys(state) as Array<keyof FormState>).reduce<FormState>((newFormState, currKey)=>{
    return {...newFormState, [currKey]: {...state[currKey], error: state[currKey].validationFns(state[currKey].value.toString()).message}}
},{...state})

const isValidFormState = (state:FormState) => !Object.values(validateFormState(state)).some(value=>value.error!==null)


const createPostReducer: Reducer<FormState, Action> = (state: FormState, action: Action) => {
    switch (action.type) {
        case 'EDIT_FIELD': {
            const {message} = state[action.payload.name].validationFns(action.payload.value.toString())
            return {
                ...state,
                [action.payload.name]: {...state[action.payload.name], value: action.payload.value, error: message}
            }
        }
        case 'VALIDATE_FIELDS':{
            const validatedFormState = validateFormState(state)
            return {...validatedFormState}
        }
        case 'CLEAR_STATE': {
            return {...initialFormState}
        }
        case 'INIT_STATE':{
            const {post} = action.payload
            return {
                title: {...initialFormState.title, value: post.title},
                slug: {...initialFormState.slug, value: post.slug},
                image: {...initialFormState.image, value: post.img},
                date: {...initialFormState.date, value: new Date()},
                content: {...initialFormState.content, value: post.content},
                isDraft: {...initialFormState.isDraft, value: post.isDraft}
            }
        }
        default:
            return state
    }
}

export const usePostForm = () => {
    const [state, dispatch] = useReducer(createPostReducer, initialFormState)
    const editField = (fName: keyof FormState, fValue: string | boolean | Date) => dispatch({
        type: 'EDIT_FIELD',
        payload: {
            name: fName,
            value: fValue
        }
    })

    const initState = (post: Post)=>dispatch({
        type: 'INIT_STATE',
        payload: {post}
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

    const _validateValues = ()=>{
        dispatch({
            type: 'VALIDATE_FIELDS'
        })
        return isValidFormState(state)
    }

    return {state, actions: {editField, initState, getPayload: _getPayload, validateForm: _validateValues}}
}