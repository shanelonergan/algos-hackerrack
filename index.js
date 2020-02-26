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

closedPaths(630)

