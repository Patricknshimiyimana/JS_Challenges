function inventoryList() {
  let arr = [];

  function add(name) {
    if (arr.indexOf(name) === -1) {
      arr.push(name);
    }
  }

  function remove(name) {
    let index = arr.indexOf(name);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }

  function getList() {
    return arr;
  }

  return { add, remove, getList };
}

let list = inventoryList();

list.add("T-shirts");
list.add("Trousers");
list.add("Shoes");
console.log("The list before", list.getList());

list.remove("Trousers");
console.log("The list after removing an item", list.getList());
