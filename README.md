# NPM-Auth

[![Build Status](https://travis-ci.org/oshalygin/npm-auth.svg?branch=master)](https://travis-ci.org/oshalygin/npm-auth)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4d47986f49e94df8a4d33ac07853ab0e)](https://www.codacy.com/app/oshalygin/npm-auth?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=oshalygin/npm-auth&amp;utm_campaign=Badge_Grade)

This utility is used to set the credentials in `.npmrc` locally to authenticate against the NPM registry in Artifactory.

## Requirements

* This utility depends on various environment variables being set, specifically:
* `NPM_REGISTRY_API_KEY` => the value of `_auth`.
* `NPM_REGISTRY_EMAIL` => the email used to authenticate with, default: `atom.headless`.  The default value will be used if this environment variable is not set.
* `NPM_REGISTRY` => the registry that the utility will authenticate against. 

####Installation
---
```bash
    npm install npm-auth
    # Note, you will not need special authentication to authenticate with npmjs.org
```
####Usage
---
```bash
    # This is the first task that needs to run prior to "npm install"
    npm-auth
    # The first argument following the source path is where the file will be placed.  If blank, the default is the current source directory.
    node ./generate-npmrc.js ../my/other/path
```

Make sure to ignore the local `.npmrc` from the project solution
---
**.gitignore**
```
# Other ignore files above
.npmrc
``` 

####Development

Start with:
```bash
  npm install
```

Running tests:
```bash
  npm run test
  # Run test with coverage.  The coverage report by default is configured for lcov and can be located in the `./coverage` directory.
  npm run test:cover
```

Command: 
```bash
  npm run push
```

Building the application:
The resulting source code is built to a `./dist` directory which is where the transpiled source resides.  By default the test files are not built to this directory, only the underlying source.  

Command:
```bash
  npm run build
```
