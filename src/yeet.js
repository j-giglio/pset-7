const arr = [1, 2, "three"];

if (arr.some(Number.isInteger)) {
  console.log("yeah");
} else {
  console.log("nah");
}
