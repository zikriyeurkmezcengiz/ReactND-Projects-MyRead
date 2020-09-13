import React from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import BookCategoryList from "./BookCategoryList";
import { Route } from "react-router-dom";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  state = {
    books: undefined,
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
      if (book !== undefined) {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf;
          let listClone = [];
          listClone = [...this.state.books];
          const index = listClone.findIndex((i) => i.id === book.id);
          if (index > -1) listClone[index] = book;
          else listClone.push(book);
          this.setState(() => ({
            books: listClone,
          }));
        });
      }
    };

    return (
      <div className="app">
        <Route
          path="/search"
          exact
          render={() => <SearchPage onChangeShelf={updateBook} />}
        />
        <Route
          path="/"
          exact
          render={({ history }) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <BookCategoryList
                books={this.state.books}
                onChangeShelf={updateBook}
              />

              <div className="open-search">
                <button
                  onClick={() => {
                    history.push("/search");
                  }}
                >
                  Add a book
                </button>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
