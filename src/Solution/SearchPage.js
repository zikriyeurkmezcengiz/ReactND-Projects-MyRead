import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import "../App.css";
import PropTypes from "prop-types";

class SearchPage extends Component {
  static propTypes = {
    onChangeShelf: PropTypes.func,
  };
  state = {
    searchKeyword: undefined,
    selectedBook: undefined,
  };
  render() {
    const shelfedBooks = this.props.books;
    const handleQueryChange = (searchKeyword) => {
      this.setState(() => ({
        searchKeyword: searchKeyword.trim(),
      }));
      BooksAPI.search(searchKeyword).then((_books) => {
        debugger;
        if (!!_books && _books.length !== undefined && _books.length > 0) {
          let listClone = [..._books];
          !!shelfedBooks &&
            shelfedBooks.map((book) => {
              const index = listClone.findIndex((i) => i.id === book.id);
              if (index > -1) listClone[index] = book;
            });

          this.setState(() => ({
            books: listClone,
          }));
        } else {
          this.setState(() => ({
            books: undefined,
          }));
        }
      });
    };
    const onChangeShelfLocal = (book, shelf) => {
      this.props.onChangeShelf(book, shelf);
    };

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => handleQueryChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books !== undefined &&
              this.state.books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  onChangeShelf={onChangeShelfLocal}
                />
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
