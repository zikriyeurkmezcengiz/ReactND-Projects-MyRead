import React, { Component } from "react";
import "../App.css";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  render() {
    const { book } = this.props;
    const onChangeShelfLocal = (shelf) => {
      this.props.onChangeShelf(book, shelf);
    };
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${book.imageLinks.thumbnail}")`,
              }}
            />
            <div className="book-shelf-changer">
              <BookShelfChanger
                bookId={book.id}
                onChangeShelf={onChangeShelfLocal}
              />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-title">{book.subtitle}</div>
          {book.authors !== undefined &&
            book.authors.map((author) => (
              <div className="book-authors">{author}</div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
