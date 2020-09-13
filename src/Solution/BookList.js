import React, { Component } from "react";
import "../App.css";
import Book from "./Book";
import PropTypes from "prop-types";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
  };
  render() {
    const { books } = this.props;
    const onChangeShelfLocal = (book, shelf) => {
      this.props.onChangeShelf(book, shelf);
    };
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books !== undefined &&
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                onChangeShelf={onChangeShelfLocal}
              />
            ))}
        </ol>
      </div>
    );
  }
}

export default BookList;
