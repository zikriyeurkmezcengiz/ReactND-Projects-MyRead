import React, { Component } from "react";
import "../App.css";
import { BookHelper } from "../utils/helpers";
import BookList from "./BookList";
import PropTypes from "prop-types";

class BookCategoryList extends Component {
  static propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func,
  };
  render() {
    const {
      categoryKeys,
      categoryDefinitions,
      getPropertyName,
    } = BookHelper.default;
    const { books } = this.props;

    const currReadingList =
      books !== undefined
        ? books.filter(
            (x) =>
              x.shelf ===
              getPropertyName(categoryKeys, (o) => o.currentlyReading)
          )
        : undefined;

    const wantToReadList =
      books !== undefined
        ? books.filter(
            (x) =>
              x.shelf === getPropertyName(categoryKeys, (o) => o.wantToRead)
          )
        : undefined;

    const readList =
      books !== undefined
        ? books.filter(
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
            <BookList
              books={currReadingList}
              onChangeShelf={onChangeShelfLocal}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {categoryDefinitions[categoryKeys.wantToRead]}
            </h2>
            <BookList
              books={wantToReadList}
              onChangeShelf={onChangeShelfLocal}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {categoryDefinitions[categoryKeys.read]}
            </h2>
            <BookList books={readList} onChangeShelf={onChangeShelfLocal} />
          </div>
        </div>
      </div>
    );
  }
}

export default BookCategoryList;
