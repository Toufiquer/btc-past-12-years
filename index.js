import data from "./btc2022.json" assert { type: "json" };

const newArr = data.sort((a, b) => {
  //   if (a["Date"] === "Nov 10, 2022") {
  //     const aValue = parseFloat(a["Change %"].slice(0, -1));
  //     console.log(a, aValue > 7, " => Line No: 6");
  //   }
  const aValue = parseFloat(a["Change %"].slice(0, -1));
  const bValue = parseFloat(b["Change %"].slice(0, -1));

  if (aValue === bValue) {
    return 0;
  } else if (aValue < bValue) {
    return 1;
  } else {
    return -1;
  }
});
newArr.length = 3;
console.log(newArr, " => Line No: 5");
