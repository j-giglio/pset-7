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
  let valuesOne = values;
  let valuesTwo = values;
  if (!values || values.length < n || n < 0) {
    return arr;
  } else {
    let firstHalf = valuesOne.splice(0, n);
    let secondHalf = valuesTwo.splice(values.length - n, values.length -1);
    arr = firstHalf.concat(secondHalf);
    return arr;
  }
}

function difference(numbers) {
  if (!numbers || numbers.length < 1 || numbers.some(isNaN)) {
    return undefined;
  } else {
    const max = Math.max.apply(Math, numbers);
    const min = Math.min.apply(Math, numbers);
    const diff = max - min;
    return diff;
  }
}

function max(numbers) {
  if (!numbers || Number.isInteger(numbers.length / 2) || numbers.length < 3) {
    return arr;
  } else {
    first = numbers[0];
    mid = numbers[Math.floor(values.length / 2)];
    last = [numbers.length - 1];
    
    if (first >= mid && first >= last) {
      return first;
    } else if (mid >= first && mid >= last) {
      return mid;
    } else if (last >= first && last >= mid) {
      return last;
    }
  }
}

function middle(values) {
  let arr = [];

  if (!values || Number.isInteger(values.length / 2) || values.length < 3) {
    return arr;
  } else {
    let startPoint = Math.floor(values.length / 2);
    console.log(startPoint)
    // if (Number.isInteger(startPoint / 4)) {
    //   arr.push(values[startPoint])
    //   arr.push(values[startPoint + 1])
    //   arr.push(values[startPoint + 2])
    //   return arr;
    // } else {
    arr.push(values[startPoint - 1])
    arr.push(values[startPoint])
    arr.push(values[startPoint + 1])
    return arr;
    // }
  }
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
