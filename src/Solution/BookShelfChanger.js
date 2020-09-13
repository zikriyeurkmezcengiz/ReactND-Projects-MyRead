import React from "react";
import "../App.css";
import { BookHelper } from "../utils/helpers";
import PropTypes from "prop-types";

const BookShelfChanger = ({ onChangeShelf, shelf }) => {
  const {
    categoryKeys,
    categoryDefinitions,
    getPropertyName,
  } = BookHelper.default;

  const selectedShelf = shelf !== undefined ? shelf : "move";

  const onChangeShelfLocal = (event) => {
    debugger;
    onChangeShelf(event.target.value);
  };

  return (
    <select onChange={onChangeShelfLocal} value={selectedShelf}>
      <option value="move" disabled>
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

BookShelfChanger.propTypes = {
  books: PropTypes.object,
  onChangeShelf: PropTypes.func,
};

export default BookShelfChanger;
