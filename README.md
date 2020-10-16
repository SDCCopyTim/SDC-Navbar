# TimCamp Nav Bar

> Nav Bar module for TimCamp app project.

## Related Projects

  - https://github.com/Go-Tim/tracy-detail-desc-calendarsticky
  - https://github.com/Go-Tim/overview-2
  - https://github.com/Go-Tim/nick-reviews
  - https://github.com/Go-Tim/tim-suggestions

## Table of Contents

1. [Usage](#usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

1. [Install Dependencies](#development)
2. [Setup the database and add mock data](#database)
3. [Run the app](#running-the-app)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Database
- Run the seed file from the command line—while in the root directory, run ```npm run seed```
- Run the script file for "Locations" by changing to database and running "node scriptLocations.js"
- Run the script file for "Camps" by changing to database and running "node scriptCamp.js"


### Running the app
1. In a terminal, from the root directory:
```sh
npm run build
npm run start
```
2. Open a browser and navigate to http://localhost:3001
