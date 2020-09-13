import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import { BookHelper } from "../utils/helpers";
import BookList from "./BookList";

class BookCategoryList extends Component {
  state = {
    books: undefined,
    showSearchPage: false,
  };
  componentDidMount = () => {
    debugger;
    BooksAPI.getAll().then((_books) => {
      this.setState(() => ({
        books: _books,
      }));
    });
  };
  render() {
    const {
      categoryKeys,
      categoryDefinitions,
      getPropertyName,
    } = BookHelper.default;

    const updateBook = (book, shelf) => {
      debugger;
      console.log();
      if (book != undefined) {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;
          let listClone = [];
          listClone = [...this.state.books];
          const index = listClone.findIndex((i) => i.id === book.id);
          if (index > -1) listClone[index] = book;
          this.setState(() => ({
            books: listClone,
          }));
        });
      }
    };

    const currReadingList =
      this.state.books !== undefined
        ? this.state.books.filter(
            (x) =>
              x.shelf ===
              getPropertyName(categoryKeys, (o) => o.currentlyReading)
          )
        : undefined;

    const wantToReadList =
      this.state.books !== undefined
        ? this.state.books.filter(
            (x) =>
              x.shelf === getPropertyName(categoryKeys, (o) => o.wantToRead)
          )
        : undefined;

    const readList =
      this.state.books !== undefined
        ? this.state.books.filter(
            (x) => x.shelf === getPropertyName(categoryKeys, (o) => o.read)
          )
        : undefined;

    const onChangeShelfLocal = (book, shelf) => {
      this.props.onChangeShelf(book, shelf);
    };

    return (
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {categoryDefinitions[categoryKeys.currentlyReading]}
            </h2>
            <BookList books={currReadingList} onChangeShelf={updateBook} />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {categoryDefinitions[categoryKeys.wantToRead]}
            </h2>
            <BookList books={wantToReadList} onChangeShelf={updateBook} />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {categoryDefinitions[categoryKeys.read]}
            </h2>
            <BookList books={readList} onChangeShelf={updateBook} />
          </div>
        </div>
      </div>
    );
  }
}

export default BookCategoryList;
