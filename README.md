# tesing with jest

1. use dependencies in `package.json`
2. use new babel `babel.config.js` (for babel 7+)
3. use jest config `jest.config.js`
   *  use a setup test file e.g. `setupTest.js` for basic jest configuration like `jest-dom` and `pretty-format`
   * use `babel-jest` for transform es6 into commonjs. see `transform` config 
   * exclude node modules that should not be transformed. see `transformIgnorePatterns` config. basic example is the `can` package which is written in es6. submodules like `can-component` are written in commonjs.
   * use `jest-trailing-slash-resolver` for resolving stealjs'ish module naming with trailing slash. `./foo/bar/` -> `./foo/bar/bar`. see `resolver`
4. use `jest-dom`
5. name tests like `xxx.test.js` or `xxx.spec.js`. phpStorm will jump from source to test with `CRTL+SHIFT+T`
6. use `npx` for calling local `jest`. e.g. `npx jest --clearCache`
7. snapshots should be committed to git
8. create a Jest phpStorm Configuration to debug tests. add a `--watch` to the config to automatically run tests. see https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/ for more info.
9. add javascript libraries (types) to phpStorm get autocompletion. `Languages & Framworks -> JavaScript -> Libraries`.
   * @types/jquery
   * @types/jest
   * jest-dom (add jest-dom.ts file from node_modules)
10. import like `import {Component} from "can";` can slow down the test because jest have to transform the whole can package into commonjs. better:
   * import the es6 code `import Component from "can/es/can-component";`
   * even better, import the module directly, since it is written in commonjs. `import Component from "can-component";` 


