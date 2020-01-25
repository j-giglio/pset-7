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
    for (let i = 0; i < n; i++) {
      arr.push(values[i]);
    }
    for (let i = 0; i < n; i++) {
      arr.push(values[((values.length - n) + i)])
    }

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
  if (!numbers || Number.isInteger(numbers.length / 2) || numbers.length < 3 || !numbers.every(Number.isInteger)) {
    return undefined;
  } else {
    const first = Number(numbers[0]);
    const mid = Number(numbers[Math.floor(numbers.length / 2)]);
    const last = Number(numbers[numbers.length - 1]);
    
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
    arr.push(values[startPoint - 1])
    arr.push(values[startPoint])
    arr.push(values[startPoint + 1])
    return arr;
  }
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3 || numbers.every(isNaN) ||  !numbers.every(Number.isInteger)) {
    return false;
  } else {

    let j = 0;
    let startPoint = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (i === 0) {
        j = 1;
        startPoint = numbers[i];
      } else if (numbers[i] === startPoint + 1) {
        j++;
      } else {
        j = 1;
      }

      if (j === 3) {
        return true;
      }
      startPoint = numbers[i];
    }
  }

  return false;
}

function everywhere(values, x) {
  if (!values || values.length < 1 || x === 0) {
    return false;
  } else {
    
    let answer = true;
    
    for (let i = 1; i < values.length - 1 && answer === true; i++) {
      answer = values[i] === x || values[i - 1] === x || values[i + 1] === x;
    }
    
    return answer;
    
  }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3 || !numbers.every(Number.isInteger)){
    return false;
  } else {
    let answer = false
    
    for (let i = 2; i < numbers.length && answer === false; i++) {
      answer = (numbers[i] % 2 === 0 &&
               numbers[i - 1] % 2 === 0 &&
               numbers[i - 2] % 2 === 0) || 
               (numbers[i] % 2 !== 0 &&
               numbers[i - 1] % 2 !== 0 &&
               numbers[i - 2] % 2 !== 0)
    }
    return answer;
  }
}

function balance(numbers) {
  if (!numbers || numbers.length < 2 || numbers.some(isNaN) || !numbers.every(Number.isInteger)){
      return false;
    } else {

      let left = 0;
      let right = 0;

      for (let x = 0; x < numbers.length; x++) {
        right += numbers[x];
      }

      for (let i = 0; i < numbers.length - 1; i++) {
        if (left != right) {
          left += numbers[i];
          right -= numbers[i];
        }
      }
      return left === right;
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
