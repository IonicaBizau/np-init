## Documentation

You can see below the API reference of this module.

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

