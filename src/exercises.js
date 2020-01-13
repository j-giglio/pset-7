function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  } else if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  let arr = [];
  if (!values || values.length < n || n < 0) {
    return arr;
  } else {
    // for (i = n - 1; i === 0; i--) {
    //   arr.unshift(values[i])
    // }
    // for (i = n - 1; i === values.length - 1; i++) {
    //   arr.push(values[i])
    // }
    let firstHalf = values.splice(0, n);
    let secondHalf = values.splice(values.length - n, values.length -1);
    arr = firstHalf.concat(secondHalf);
    return arr;
  }
}

function difference(numbers) {
  // write your code here
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
