const fs = require('fs');

const SIZE = 15;

function generateExportedSwitchCaseFunction(size) {
  let switchCaseStr = `exports.searchInSwitchCase${size} = (key) => {\n`;
  switchCaseStr += `  let result;\n  switch (key) {\n`;
  for (let i = 0; i < size; i++) {
    switchCaseStr += `    case '${i}':\n      result = ${i};\n      break;\n`;
  }
  switchCaseStr += `    default:\n      result = -1;\n  }\n  return result;\n}\n`;
  return switchCaseStr;
}

function generateExportedObject(size) {
  let objectStr = `exports.obj${size} = {\n`;
  for (let i = 0; i < size; i++) {
    objectStr += `  '${i}': ${i},\n`;
  }
  objectStr += `};\n`;
  return objectStr;
}

function writeToFile(filename, data) {
  fs.writeFileSync(filename, data, 'utf8', (err) => {
    if (err) {
      console.error(`Error while creating the file ${filename}:`, err);
    } else {
      console.log(`File ${filename} created successfully!`);
    }
  });
}

const switchCaseGenerated = generateExportedSwitchCaseFunction(SIZE);
const objectGenerated = generateExportedObject(SIZE);

const switchCaseFilename = `switch_case_${SIZE}.js`;
const objectFilename = `object_${SIZE}.js`;

writeToFile(switchCaseFilename, switchCaseGenerated);
writeToFile(objectFilename, objectGenerated);

console.log('File generation and writing completed.');
