import { describe, it, expect, afterEach } from "vitest";
import { render, fireEvent, cleanup } from "@testing-library/react";
import BookForm from "./BookForm";

describe("BookForm", () => {
    afterEach(() => cleanup());

    it("should show the Add book button initially", () => {
        // Arrange & Act

        const { getByText } = render(<BookForm onSubmit={() => {}} />);
        // Assert

        expect(getByText("Add book")).toBeInTheDocument();
    });

    it("should show the form when Add book is clicked", () => {
        // Arrange

        const { getByText, getByLabelText } = render(
            <BookForm onSubmit={() => {}} />,
        );

        // Act

        fireEvent.click(getByText("Add book"));

        // Assert

        expect(getByLabelText(/Title/i)).toBeInTheDocument();
        expect(getByLabelText(/Author/i)).toBeInTheDocument();
        expect(getByLabelText(/Publication Year/i)).toBeInTheDocument();
        expect(getByLabelText(/Reading Status/i)).toBeInTheDocument();
    });

    it("should show Update Book if bookToEdit is provided", () => {
        // Arrange

        const bookToEdit = {
            title: "Edit Book",
            author: "Edit Author",
            year: "2020",
            status: "Pending",
        };
        // Act

        const { getByText } = render(
            <BookForm onSubmit={() => {}} bookToEdit={bookToEdit} />,
        );
        // Assert

        expect(getByText("Update Book")).toBeInTheDocument();
    });
});
