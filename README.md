# Oodle JS

Oodle JS is a utility function library designed to be used on Oodle's interal projects as well as client projects. Oodle JS is written in TypeScript and is compiled down to ES3.

Any project that uses TypeScript can use the raw TypeScript files if you wish. For the projects that only support JavaScript, you can import those directly as well.

## Getting Started

With this being written in TypeScript, you will need to build _everytime_ you push up a new release.

```bash
# Install Dependencies
$ yarn

# Compile TypeScript to JavaScript
$ yarn compile
```

The `tsc` command will read off of the `tsconfig.json` file in the root directory.

## Unit Testing

Jest unit testing is configured with this project. All tests are in the `/tests` directory and named accordingly to the file it's testings.

Example:

`test/browser-methods.spec.ts` is the test file for `ts/browser-methods.ts`.

To help keep things consistent, all functions that are imported to the `.spec.ts` files are imported as `methods`.

```javascript
import * as methods from '../ts/browser-methods'
```

Any mock data that is needed for a test will be in the `tests/mock` directory.

### Run the Tests

```bash
# Run all test suites
$ yarn test

# Run specific test suite
$ yarn test tests/browser-methods.ts
```