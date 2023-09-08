"use strict";

initialize();
//Number 1
function numberOne() {
  const arrOne = [
    {
      id: 20,
      name: "alex",
    },
    {
      id: 30,
      name: "alina",
    },
  ];

  const arrTwo = [
    {
      id: 40,
      name: "hello",
    },
    {
      id: 30,
      name: "world",
    },
  ];

  function customEquals(objA, objB) {
    return objA.id === objB.id && objA.name === objB.name;
  }

  const result = _.differenceWith(arrOne, arrTwo, customEquals);
  const res = _.differenceWith(arrTwo, arrOne, customEquals);
  console.log("Number 1.");
  console.log("result:", result);
  console.log("res:", res);
}
function numberTwo() {
  const str = ["u", "ec"];
  const arr = [
    {
      storageVal: "u",
      table: ["E", "F"],
    },
    {
      storageVal: "data",
      table: ["E", "F"],
    },
    {
      storageVal: "ec",
      table: ["E"],
    },
  ];

  // Filter the items based on matching storageVal
  const filteredItems = arr.filter((item) => str.includes(item.storageVal));

  // Extract the tables from the filtered items
  const tables = filteredItems.flatMap((item) => item.table);
  console.log("Number 2.");
  console.log(tables); // Output: ['E', 'F', 'E']
}
function numberThree() {
  const a = [["E"], ["F"]];
  const flattenedArray = _.flatten(a);
  console.log("Number 3.");
  console.log(flattenedArray);
}
function numberFour() {
  const t = ["E", "F"];
  const nestedArray = [["F"], ["G"]];

  const flattenedArray = _.union(t, ...nestedArray);
  console.log("Number 4.");
  console.log(flattenedArray);
}
const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("results");
const data = [
  { id: 1, name: "Carl" },
  { id: 2, name: "Ryan" },
  { id: 3, name: "Eldrin" },
  { id: 4, name: "Paulo" },
];
function filterData(query) {
  return data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
}
// Function to display the filtered results
function displayResults(results) {
  resultsList.innerHTML = "";
  results.forEach((result) => {
    const listItem = document.createElement("li");
    listItem.textContent = result.name;
    resultsList.appendChild(listItem);
  });
}

// Event listener for the search input
searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  const filteredData = filterData(query);
  displayResults(filteredData);
});
function initialize() {
  numberOne();
  numberTwo();
  numberThree();
  numberFour();
}
