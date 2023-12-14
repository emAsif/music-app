# MusicApp
General information:
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.7.
- Google Chrome browser was used for development.
- no CSS Framework, only preprocessor(SCSS) has been used.

Project Features:

- setup dev server Proxy to avoid CORS error for API Calls
- displays music albums consuming the iTunes API. To display details for album an additional API call to get trackList.
- albums sortable and filterable by title
- responsive layout with mobile first approach.
- detail view show album cover, title, and track list (used another API error)
- Infinite scroller for albums list

- unit tests for components and services.
- Rxjs
- transitions
- web fonts

## Development server

Run `npm install`

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
