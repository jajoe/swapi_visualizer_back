// Add the type to each items of the array
function addTypeToItems(items, type) {
  return items.map((item) => Object.assign(item, { type: type }));
}

module.exports = {
  addTypeToItems: addTypeToItems,
};
