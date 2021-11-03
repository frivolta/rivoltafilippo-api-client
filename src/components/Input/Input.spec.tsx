import {render, screen} from "@testing-library/react";
import {Input} from "./Input";

describe("<Input/>", () =>{
    it('should render an input field', function () {
        render(<Input data-testid="input-field" label="Label" subLabel="subLabel" type="text"/>)
        expect(screen.getByTestId("input-field")).toBeInTheDocument()
        expect(screen.getByText("Label")).toBeInTheDocument()
        expect(screen.getByText("subLabel")).toBeInTheDocument()
    });

    it('should render an error message if error is present', function () {
        render(<Input type="text" data-testid="input-field" label="Label" subLabel="subLabel" error="Field required"/>)
        expect(screen.getByText("Field required")).toBeInTheDocument()
    });
})