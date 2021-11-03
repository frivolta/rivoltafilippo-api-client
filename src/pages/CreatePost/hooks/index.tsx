import {Reducer, useReducer} from "react";

type State = {
    title: { value: string, error: string | null }
    slug: { value: string, error: string | null },
    image: { value: string, error: string | null },
    date: { value: Date, error: string | null },
    content: { value: string, error: string | null },
    isDraft: { value: boolean, error: string | null }
}

type Action =
    { type: 'EDIT_FIELD', payload: { name: keyof State, value: string | boolean | Date } }
    | { type: 'CLEAR_STATE' }

const initialState: State = {
    title: {value: '', error: null},
    slug: {value: '', error: null},
    image: {value: '', error: null},
    date: {value: new Date, error: null},
    content: {value: '', error: null},
    isDraft: {value: true, error: null}
}

const createPostReducer: Reducer<State, Action> = (state: State, action: Action) => {
    switch (action.type) {
        case 'EDIT_FIELD': {
            return {...state, [action.payload.name]: {...state[action.payload.name], value: action.payload.value}}
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
    return {state, actions: {editField}}
}