const categoryKeys = {
  none: 0,
  currentlyReading: 1,
  wantToRead: 2,
  read: 3,
};

const categoryDefinitions = {
  [categoryKeys.none]: "None",
  [categoryKeys.currentlyReading]: "Currenty Reading",
  [categoryKeys.wantToRead]: "Want To Read",
  [categoryKeys.read]: "Read",
};
function getPropertyName(obj, expression) {
  var res = {};
  // eslint-disable-next-line
  Object.keys(obj).map((k) => {
    res[k] = () => k;
  });
  return expression(res)();
}

export default {
  categoryKeys,
  categoryDefinitions,
  getPropertyName,
};
