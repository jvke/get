# Get.js

## Usage

This code isn't bundled for distribution via popular package management systems. You'll need to either include the `/src/get.js` file in your project or play around with it by importing it from wherever it lives in your filesystem.

```
import get from './get';

get('https://www.google.com')
  .then(value => {
    /* we have access to the response here */
  })
  .catch(err => {
    /* handle errs */
  });
```

## Development Prerequisites

* Node.js (https://nodejs.org/) and NPM

## Development Tasks

| Command | Description |
|---------|-------------|
| `npm install` | Fetch dependencies and build binaries for any of the modules |
| `npm test` | Run test suite with [Jest](https://facebook.github.io/jest/) |
