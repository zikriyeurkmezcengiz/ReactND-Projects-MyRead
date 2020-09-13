import React, { Component } from "react";
import "../App.css";
import Book from "./Book";

class BookList extends Component {
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
              <Book book={book} onChangeShelf={onChangeShelfLocal} />
            ))}
        </ol>
      </div>
    );
  }
}

export default BookList;
