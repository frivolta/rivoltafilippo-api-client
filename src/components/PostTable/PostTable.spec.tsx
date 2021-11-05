import {render, screen} from "@testing-library/react";
import {PostTable} from "./PostTable";
import {FormState} from "../../hooks/useForm";
import userEvent from '@testing-library/user-event'

const mockedEditFn = jest.fn()
const validateFn = jest.fn()
const postAction = jest.fn()

const mockedState: FormState = {
    title: {value: '', error: null, validationFns: validateFn},
    slug: {value: '', error: null, validationFns: validateFn},
    image: {value: '', error: null, validationFns: validateFn},
    date: {value: new Date, error: null, validationFns: validateFn},
    content: {value: '', error: null, validationFns: validateFn},
    isDraft: {value: true, error: null, validationFns: validateFn}
}
describe('<PostTable/>', function () {
    beforeEach(() => {
        render(<PostTable editField={mockedEditFn} state={mockedState} postAction={postAction}/>)
    })

    it("should be defined", () => {
        expect(screen.getByTestId("post-content-field")).toBeInTheDocument()
    })
    it("should trigger an edit field function when editing a field", () => {
        userEvent.type(screen.getByTestId('post-title-field'), 'Hello title!')
        expect(mockedEditFn).toHaveBeenLastCalledWith("title", "!")
    })
    it("should show an error if field has errored", () => {
        const erroredFieldState = {
            ...mockedState,
            title: {value: '', error: "it is an error", validationFns: validateFn},
        }
        render(<PostTable editField={mockedEditFn} state={erroredFieldState} postAction={postAction}/>)
        expect(screen.getByText("it is an error")).toBeInTheDocument()
    })

    it("should trigger a fn when the submit button is clicked", ()=>{
        userEvent.click(screen.getByTestId(("create-post-button")))
        expect(postAction).toHaveBeenCalledTimes(1)
    })
});