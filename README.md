# ClubHub Core

This repository contains the source code for the `club-hub-core` library. 

`club-hub-core` is a TypeScript library that provides an interface to the `ClubHub` REST AI. 

## Installing

Add the project to package.json 

```
`club-hub-core: git@github.com:meshhq/club-hub-core.git#<version_number>`
```

Install all dependencies by running: 

```
npm install
``` 

Import the lib.

```
import * as ClubHub from 'club-hub-core'
```

Initialize the lib

```
const token = 'SOME_TOKEN'
const baseURL = 'SOME_BASE_URL'
const service = new ClubHub(baseURL, token)
```

Make requests 

```
service.users.login("username", "password")
```

## Developing

#### Code Additions

This API is written in Typescript and is transpiled down to ES6 before testing or being used by the mobile and web app.

Any additions to the code should be made inside the `/src` directory which contains all of the .ts files.

#### Pushing New Code

Changes to the `/src` directory must be transpiled before pushing new code.

In addition to this, any modules or interfaces you define in the `/src` directory must be exported to and accessible from the `/src/index.ts` file.

After exporting your modules, rebuild the `/dist` directory with your changes by running: 

```
npm run build
```

This will transpile all .ts files to ES6 as well as create corresponding type definition files.
If you're ready for your changes to be included on a new release, bump the version number in `package.json`.

You can now push your code to Github. In order to use the changes in the client applications, [draft a new release](https://help.github.com/articles/creating-releases/) for the Branch. 

## Testing

Tests for the library are written in Typescript using the `Mocha` and `Chai` testing libraries. Run with:

```
npm test
```

This will transpile the `/src` directory and run tests found in `dist/tests/`. 