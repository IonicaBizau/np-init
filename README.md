
# np-init

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/np-init.svg)](https://www.npmjs.com/package/np-init) [![Downloads](https://img.shields.io/npm/dt/np-init.svg)](https://www.npmjs.com/package/np-init) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Easily start a npm package from scratch.

## :cloud: Installation

```sh
$ npm i --save np-init
```


:bulb: **ProTip**: You can install the [cli version of this module](http://github.com/IonicaBizau/np-init-cli) by running `npm i -g np-init-cli`

## :clipboard: Example



```js
const init = require("np-init");

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
```

## :memo: Documentation


### `init(options, callback)`
Inits a new `npm` package.

#### Params
- **Object** `options`: An object containing the following fields:
 - `name` (String): The package name. This is **required**.
 - `template` (String): The template name to be used (check out
   [`js-templates`](https://github.com/IonicaBizau/js-templates)). Defaults to `function-export`.
 - `exampleFile` (String): The example file path (default: `example/index.js`).
 - `exampleTemplate` (String): The example template (default: `"example"`).
 - `description` (String): The package description.
 - `dirname` (String): The path to the directory where to create the project (default: the current directory).
 - `pack` (Object): The `package.json` information.
- **Function** `callback`: The callback function.

#### Return
- **EventEmitter** An event emitter emitting the following events:
 - `repo_created` (data): After the repository was created.
 - `package_written` (data): After the package.json was written.
 - `packy_done` (data): After the defaults in `package.json` were set. Note you can do this using [`packy`](https://github.com/IonicaBizau/packy).
 - `after_init_handler` (data): After the `afterinit` handler was executed.
 - `git_add` (data): After `git add .` was executed.
 - `git_commit` (data): After `git commit ...` was executed.
 - `git_remote_add` (data): After `git remote add ...` was executed.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`np-init-cli`](https://github.com/IonicaBizau/np-init-cli#readme)—CLI for starting a new npm package.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
