const arr = [1, 2, "three"];

if (!arr.every(Number.isInteger)) {
  console.log("yeah");
} else {
  console.log("nah");
}
