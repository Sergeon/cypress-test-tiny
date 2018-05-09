# issue passing `ignoreTestFiles` to `cypress run` as cli option

This fork of [the cypress tyny repo](https://github.com/cypress-io/cypress-test-tiny) highlights an issue when passing the `ignoreTestFiles` option to cypress as a cli parameter.

## Context
* OS: MacOs 10.13.4
* Cypress version: 2.1

## Original repo modifications
the specs within `cypress/integration` has been changed: a failing `spec.demo.js` has been added.
The `package.json` file got a different `cypress:run` command and the `cypress` dependency listed as a dev dependency.

## installation and setup
Run `npm install`.

Then launch `npm run cypress:run` to run the test suite.

The command has been changed so now stands as following:
```
"cypress:run": "cypress run --config ignoreTestFiles=*.demo.js"
```

As far as I know, this should ignore the `cypress/integration/spec.demo.js` test. However, it is being run -thus making the suite failing-.


Is worth to mention that setting up:
```
"ignoreTestFiles"="*.demo.js"
```
 in the `cypress.json` **do actually ignore the tests**, as expected.
