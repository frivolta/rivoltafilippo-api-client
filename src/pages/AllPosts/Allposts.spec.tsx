import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import {AllPosts} from "./AllPosts";
import {renderWithClient} from "../../testUtils";


describe("Navigation routes", () => {
    beforeEach(() => {
      renderWithClient(<AllPosts/>)
    })
    it('should be defined', function () {
        expect(screen.getByTestId("Layout")).toBeInTheDocument()
    });
    it('should have a title', function () {
        expect(screen.getByTestId("all-posts-title")).toBeInTheDocument()
    });
})
