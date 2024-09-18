const glob = require('glob').glob;
const fs = require('fs');
const path = require('path');

const files = glob.sync(`coverage/**/lcov.info`);
const mergedReport = files.reduce((mergedReport, currFile) => {
  return mergedReport + '\n' + fs.readFileSync(currFile);
}, '');

fs.writeFileSync(path.resolve('./coverage/lcov.info'), mergedReport, 'utf-8');
