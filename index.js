// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

function closedPaths(number) {
    const paths = {0: 1, 6: 1, 4: 1, 9: 1, 8: 2}
    const pathKeys = Object.keys(paths)
    const pathKeysInt = pathKeys.map(str => parseInt(str))
    console.log(pathKeysInt, 'pathKeysInt')

    const numString = number.toString()
    const strArr = numString.split('')
    const numArr = strArr.map(str => parseInt(str))
    console.log(numArr, numArr)

    let output = 0

    numArr.forEach(num => {
      console.log(num)
        if (pathKeysInt.includes(num)) {
          console.log('here')
          output += paths[num]
        }
    })

    console.log(output)
    return output

}

// closedPaths(630)

function getDistanceMetrics(arr) {
  let distanceMetrics = []
  
  for (let index1 = 0; index1 < arr.length; index1++) {
    const num1 = arr[index1]
    let distanceTotal = 0

    for (let index2 = 0; index2 < arr.length; index2++) {
      const num2 = arr[index2]

      if (num1 === num2) {
        const distance = Math.abs(index1 - index2)
        console.log(distance)
        distanceTotal += distance
      }
    }

    console.log(distanceTotal)
    distanceMetrics[index1] = distanceTotal
  }

}