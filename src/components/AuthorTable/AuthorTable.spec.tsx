import {render, screen} from "@testing-library/react";
import {AuthorTable} from "./AuthorTable";
import {mockedAuthors} from "../../mockData/mockedAuthors";

describe("<AuthorTable/>", () => {
    beforeEach(() => {
        render(<AuthorTable isLoading={false} authors={mockedAuthors}/>)
    })
    it('should display a table', function () {
        expect(screen.getByTestId("author-table")).toBeInTheDocument()
    });
    it('should have three header', () => {
        expect(screen.getByText('# Id')).toBeInTheDocument()
        expect(screen.getByText('Name')).toBeInTheDocument()
        expect(screen.getByText('Picture')).toBeInTheDocument()
        expect(screen.getByText('Updated At')).toBeInTheDocument()
    })

    it('should have an author row data', function () {
        expect(screen.getByText("Filippo Rivolta")).toBeInTheDocument()
    });

})