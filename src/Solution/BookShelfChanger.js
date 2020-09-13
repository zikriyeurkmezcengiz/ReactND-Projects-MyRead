import React from "react";
import "../App.css";
import { BookHelper } from "../utils/helpers";

const BookShelfChanger = ({ bookId, onChangeShelf }) => {
  const {
    categoryKeys,
    categoryDefinitions,
    getPropertyName,
  } = BookHelper.default;

  const onChangeShelfLocal = (event) => {
    debugger;
    onChangeShelf(event.target.value);
  };

  return (
    <select onChange={onChangeShelfLocal}>
      <option value="move" disabled selected>
        Move to...
      </option>
      <option value={getPropertyName(categoryKeys, (o) => o.currentlyReading)}>
        {categoryDefinitions[categoryKeys.currentlyReading]}
      </option>
      <option value={getPropertyName(categoryKeys, (o) => o.wantToRead)}>
        {categoryDefinitions[categoryKeys.wantToRead]}
      </option>
      <option value={getPropertyName(categoryKeys, (o) => o.read)}>
        {categoryDefinitions[categoryKeys.read]}
      </option>
      <option value={getPropertyName(categoryKeys, (o) => o.none)}>
        {categoryDefinitions[categoryKeys.none]}
      </option>
    </select>
  );
};

export default BookShelfChanger;
