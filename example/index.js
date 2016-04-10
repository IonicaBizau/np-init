"use strict";

const init = require("../lib");

init({
    name: "foo"
  , description: "This is a test package"
  , dirname: `${__dirname}/result`
}, (err, data) => {
    console.log(err || data);
});
// $ tree result
// result/
// ├── example
// │   └── index.js
// ├── lib
// │   └── index.js
// └── package.json
// 2 directories, 3 files
