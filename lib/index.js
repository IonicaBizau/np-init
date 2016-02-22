"use strict";

const gry = require("gry")
    , oneByOne = require("one-by-one")
    , packy = require("packy")
    , packPath = require("package-json-path")
    , writePack = require("w-package-json")
    , ul = require("ul")
    , fullname = require("fullname")
    , worder = require("worder")
    , readJson = require("r-json")
    , abs = require("abs")
    , arrayUnique = require("array-unique")
    , jsTemplates = require("js-templates")
    , streamp = require("streamp")
    , path = require("path")
    , requireAsync = require("async-require")
    , findValue = require("find-value")
    ;

try {
    var npInitHandlers = require(abs("~/.np-init.js"));
} catch (e) {
    npInitHandlers = {};
}

npInitHandlers = ul.deepMerge(npInitHandlers, {
    afterInit: (repo, cb) => cb()
});

module.exports = function init(options, callback) {

    options = ul.deepMerge(options, {
        pack: {}
      , template: "function-export"
      , exampleFile: "example/index.js"
      , exampleTemplate: "example"
    });

    if (!options.name) {
        return callback(new Error("The name is mandatory"));
    }

    let repo = new gry(options.dirname)
      , packagePath = packPath(repo.cwd)
      ;

    oneByOne([
        // mkdir, git init
        repo.create.bind(repo)

        // Prepare the package data
      , cb => fullname().then(cb.bind(this, null), cb)
      , (cb, fullName) => {
            options = ul.deepMerge(options, {
                pack: {
                    version: "1.0.0"
                  , main: "lib/index.js"
                  , scripts: {
                        test: "echo \"Error: no test specified\" && exit 1"
                    }
                  , author: fullName
                }
            });

            options.pack = ul.deepMerge(options.pack, {
                name: options.name
              , description: options.description
              , keywords: arrayUnique(worder(options.name + " " + options.description).map(x => x.toLowerCase()))
              , license: "MIT"
            });

            cb();
        }

        // npm init
      , cb => writePack(repo.cwd, options.pack, cb)

        // packy
      , cb => {
            var packObj = {};
            try {
                packObj = require(abs("~/.packy"));
            } catch (e) {
                packObj = {};
            }
            cb(null, packObj);
        }
      , (cb, defaults) => packy(packagePath, defaults, cb)
      , cb => readJson(packagePath, cb)
      , (cb, pack) => {
            repo.packageJson = pack;
            new streamp.writable(path.join(repo.cwd, pack.main)).end(jsTemplates(options.template, options.name, options.description));
            new streamp.writable(path.join(repo.cwd, options.exampleFile)).end(jsTemplates(options.exampleTemplate, options.name));
            cb();
        }
      , cb => npInitHandlers.afterInit(repo, cb)
      , cb => repo.exec("add .", cb)
      , cb => repo.commit("Initial commit. :rocket:", cb)
      , cb => npInitHandlers.afterInit(repo, cb)
      , cb => {
            let url = findValue(repo.packageJson, "repository.url");
            if (typeof url !== "string") {
                return cb();
            }
            repo.exec(`remote add origin ${url}`, cb);
        }
    ], callback);
};
