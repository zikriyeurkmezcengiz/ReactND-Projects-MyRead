import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import BookCategoryList from "./BookCategoryList";

class BooksApp extends React.Component {
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

    return (
      <div className="app">
        {this.state.showSearchPage ? (
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
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <BookCategoryList
              books={this.state.books}
              onChangeShelf={updateBook}
            />
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
