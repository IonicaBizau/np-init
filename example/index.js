const init = require("../lib");

init({
    name: "foo"
  , description: "This is a test package"
  , dirname: __dirname
}, (err, data) => {
    console.log(err || data);
});
