import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import "../App.css";
import BookCategoryList from "./BookCategoryList";
import { Route, Redirect } from "react-router-dom";
import SearchPage from "./SearchPage";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" exact render={() => <SearchPage />} />
        <Route
          path="/"
          exact
          render={({ history }) => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <BookCategoryList />
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
