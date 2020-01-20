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
        console.log(valuesOne);

  let valuesTwo = values;
        console.log(valuesTwo);

  if (!values || values.length < n || n < 0) {
    return arr;
  } else {
    let firstHalf = valuesOne.splice(0, n);
          console.log(firstHalf);

    let secondHalf = valuesTwo.splice(values.length - n, values.length -1);
          console.log(secondHalf);

    arr = firstHalf.concat(secondHalf);
          console.log(arr);

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
    return undefined;
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
  if (!numbers || numbers.length < 2 || Number.isInteger(numbers)){
    return false;
  } else {
    let stop = false; 
    for (let i = 0; i < numbers.length - 2 || stop === false; i++) {
      let secondHalf = numbers;
      let firstHalf = secondHalf.splice(0, i);
      console.log(firstHalf);
      let firstSum = 0;
      let secondSum = 0;
    
      firstHalf.forEach(function (num) {
        firstSum += num;
              console.log(firstSum);
      })
    
      secondHalf.forEach(function (num) {
        secondSum += num;
              console.log(secondSum);
      })
    
      if (firstSum === secondSum) {
        stop = true;
      }
    }
    return stop;
  }
}

function clumps(values) {
  if (!values) {
    return -1;
  } else {
    let counter = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] === values[i + 1] && values[i] !== values[i - 1]) {
        counter++
      }
    }
    return counter;
  }
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
