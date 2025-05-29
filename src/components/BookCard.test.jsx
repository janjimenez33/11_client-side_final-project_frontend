import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup, fireEvent } from "@testing-library/react";
import BookCard from "./BookCard";

describe("BookCard", () => {

  const mockBook = {
    id: 1,
    title: "Book test",
    author: "Book author",
    year: "1",
    status: "pending",
  };

  afterEach(() => {
    cleanup();

  });

  it("should render the correct title, author, year, and status", () => {

    // Arrange & Act

    const { getByText } = render(

      <BookCard book={mockBook} onEdit={() => {}} onDelete={() => {}} />

    );

    // Assert

    expect(getByText("Book test")).toBeInTheDocument();
    expect(getByText("Book author")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("pending")).toBeInTheDocument();

  });

  it("should call onEdit when Edit button is clicked", () => {

    // Arrange

    const onEdit = () => { onEdit.called = true; };

    onEdit.called = false;

    const { getByRole } = render(

      <BookCard book={mockBook} onEdit={onEdit} onDelete={() => {}} />

    );

    // Act

    fireEvent.click(getByRole("button", { name: /edit/i }));

    // Assert

    expect(onEdit.called).toBe(true);

  });

  it("should call onDelete when Delete button is clicked", () => {

    // Arrange

    const onDelete = () => { onDelete.called = true; };

    onDelete.called = false;

    const { getByRole } = render(

      <BookCard book={mockBook} onEdit={() => {}} onDelete={onDelete} />

    );
    // Act

    fireEvent.click(getByRole("button", { name: /delete/i }));

    // Assert

    expect(onDelete.called).toBe(true);
    
  });
});
