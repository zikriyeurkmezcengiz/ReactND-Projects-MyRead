import React, { Component } from "react";
import "../App.css";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    books: PropTypes.object,
    onChangeShelf: PropTypes.func,
  };
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
                backgroundImage: `url("${
                  !!book.imageLinks
                    ? book.imageLinks.thumbnail
                    : "https://www.flaticon.com/svg/static/icons/svg/148/148988.svg"
                }")`,
              }}
            />
            <div className="book-shelf-changer">
              <BookShelfChanger
                key={book.id}
                onChangeShelf={onChangeShelfLocal}
                shelf={book.shelf}
              />
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-title">{book.subtitle}</div>
          {book.authors !== undefined &&
            book.authors.map((author) => (
              <div key={author} className="book-authors">
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
