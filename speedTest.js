const { searchInSwitchCase15 } = require('./switch_case_15');
const { obj15 } = require('./object_15');
const { searchInSwitchCase100000 } = require('./switch_case_100000');
const { obj100000 } = require('./object_100000');

const selectedSearchInSwitchCase = searchInSwitchCase15;
const selectedObject = obj15;

const size = Object.keys(selectedObject).length;

function measureTime(func) {
  const start = performance.now();
  func();
  const end = performance.now();
  return end - start;
}

const firstKey = '0';
const middleKey = (parseInt(size / 2)).toString();
const lastKey = (size - 1).toString();

const switchCaseFirstSearchTime = measureTime(() => {
  result = selectedSearchInSwitchCase(firstKey);
});

const objectFirstSearchTime = measureTime(() => {
  result = selectedObject[firstKey];
});

const switchCaseMiddleSearchTime = measureTime(() => {
  result = selectedSearchInSwitchCase(middleKey);
});

const objectMiddleSearchTime = measureTime(() => {
  result = selectedObject[middleKey];
});

const switchCaseLastSearchTime = measureTime(() => {
  result = selectedSearchInSwitchCase(lastKey);
});

const objectLastSearchTime = measureTime(() => {
  result = selectedObject[lastKey];
});

function logComparison(label, switchTime, objectTime) {
  const green = "\x1b[32m";
  const red = "\x1b[31m";
  const blue = "\x1b[34m";
  const purple = "\x1b[35m";
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";
  
  const switchColor = switchTime < objectTime ? green : red;
  const objectColor = objectTime < switchTime ? green : red;

  console.log('------------------------------------------');

  console.log(`${label} in switch-case: ${switchColor}${switchTime.toFixed(5)} ms${reset}`);
  console.log(`${label} in object: ${objectColor}${objectTime.toFixed(5)} ms${reset}`);

  const faster = switchTime < objectTime ? 'switch-case' : 'object';
  const slower = switchTime < objectTime ? 'object' : 'switch-case';
  const percentFaster = ((Math.abs(switchTime - objectTime) / Math.min(switchTime, objectTime)) * 100).toFixed(2);

  let emoji = "";
  if (percentFaster >= 100000) {
    emoji = `${red}(ノಠ益ಠ)ノ彡┻━┻${reset}`; // Extreme shock emoji in red
  } else if (percentFaster >= 10000) {
    emoji = `${purple}(ノ°Д°）ノ︵ ┻━┻${reset}`; // Very shocking emoji in purple
  } else if (percentFaster >= 1000) {
    emoji = `${yellow}(╯°□°）╯︵ ┻━┻${reset}`; // Shocking emoji in yellow
  } else if (percentFaster >= 100) {
    emoji = `${blue}(ʘ‿ʘ)${reset}`; // Cute surprised emoji in blue
  }

  console.log(`${faster} is faster than ${slower} by ${blue}${percentFaster}%${reset} ${emoji}`);

  console.log('------------------------------------------');
}

console.log('------------------------------------------');
console.log(`----- SIZE = ${size} -----`)

logComparison('firstKey', switchCaseFirstSearchTime, objectFirstSearchTime);
logComparison('middleKey', switchCaseMiddleSearchTime, objectMiddleSearchTime);
logComparison('lastKey', switchCaseLastSearchTime, objectLastSearchTime);
