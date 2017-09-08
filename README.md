<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# np-init

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/np-init.svg)](https://www.npmjs.com/package/np-init) [![Downloads](https://img.shields.io/npm/dt/np-init.svg)](https://www.npmjs.com/package/np-init)

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



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`np-init-cli`](https://github.com/IonicaBizau/np-init-cli#readme)—CLI for starting a new npm package.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
