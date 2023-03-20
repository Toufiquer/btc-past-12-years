import data from "./downloadData/json/btc2022.json" assert { type: "json" };

const sortArr = (a, b, type) => {
  const aValue = parseFloat(a["Change %"].slice(0, -1));
  const bValue = parseFloat(b["Change %"].slice(0, -1));
  if (type) {
    if (aValue === bValue) {
      return 0;
    } else if (aValue < bValue) {
      return 1;
    } else {
      return -1;
    }
  } else {
    if (aValue === bValue) {
      return 0;
    } else if (aValue > bValue) {
      return 1;
    } else {
      return -1;
    }
  }
};
const positiveArr = [...data];
const negativeArr = [...data];
const newArrPositive = positiveArr.sort((a, b) => {
  return sortArr(a, b, true);
});
const newArrNegative = negativeArr.sort((a, b) => {
  return sortArr(a, b, false);
});
newArrPositive.length = 1;
newArrNegative.length = 1;
console.log(
  "Max Positive ===>>>Date: " + newArrPositive[0].Date,
  "Max Positive ===>>>Change: " + newArrPositive[0]["Change %"]
);
console.log(
  "Max Negative ===>>>Date: " + newArrNegative[0].Date,
  "Max Negative ===>>>Change: " + newArrNegative[0]["Change %"]
);
