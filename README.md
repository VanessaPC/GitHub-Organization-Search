# `GitHub Organization Search`

This project is a mini app for a gitHub that access information for organizations in gitHub. 
It's written in [AngularJS][angularjs] web app. 

## Getting Started

To get you started you can simply clone the `GitHub Organization Search` repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and tests. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `GitHub Org. S.`

Clone the repository using git:

```
git clone git@github.com:lunnaris/GitHub-Organization-Search.git
cd GitHub-Organization-Search
```

### Install Dependencies

There are two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* Get the tools we depend upon via `npm`, the [Node package manager][npm].
* Get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

`npm` is preconfigured to automatically run `bower` so we can simply do:

```
npm install
```

### Insert Access Token
Create your own access token in:

[https://github.com/settings/tokens]

then go to app/view1/view1.js line 15, replace the Access Token with the created one. 


### Run the Application

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```


## Testing

There are two kinds of tests in the application: Unit tests and e2e tests.

### Running Unit Tests

These are written in [Jasmine][jasmine],
which are run with the [Karma][karma] test runner. There is a Karma configuration file to run them.

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```


<a name="e2e-testing"></a>
### Running e2e Tests

The app comes with e2e tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] e2e test runner. It uses native events and has
special features for Angular applications.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor can
interact with it.

**Before starting Protractor, open a separate terminal window and run:**

```
npm start
```

In addition, since Protractor is built upon WebDriver, we need to ensure that it is installed and
up-to-date. The project is configured to do this automatically before running the tests, so you don't need to worry about it. If you want to manually update the WebDriver,
you can run:

```
npm run update-webdriver
```

Once you have ensured that the development web server hosting our application is up and running, you
can run the tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.

**Note:**
Protractor uses the [Selenium Standalone Server][selenium], which in turn requires
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].
