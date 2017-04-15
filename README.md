
Example inspired by <http://rubyquiz.com/quiz14.html>.

This repo is only used as an exercise for a deployment training.

## Run the unit tests

```
npm test
```

## Run the end to end tests locally

Note: to run these tests locally, the local HTTP server must be started.

### Starting the local HTTP server

To start the HTTP server on your local machine, run:

```
npm start
```

Note: you can access the application, by pointing your browser to:

- <http://localhost:3000>
- <http://localhost:3000/lcd_numbers/12345>

For `/lcd_numbers/12345`, it should return the text:

```
  # ### ### # # ###
  #   #   # # # #  
  # ### ### ### ###
  # #     #   #   #
  # ### ###   # ###
```

### Running the end to end tests

Now that your local server is started, you can run:

```
npm run test:e2e
```

## Run the end to end tests on a remote server

The scenario: we have a CI server that cloned the code, generated a package,
and deployed it on a remote prod server.

We now want to run the end to end tests from the CI server, querying the remote
prod server.

So there are two confs involved. The configuration of the remote prod server
that runs the application code, and the configuration of the CI server, that
runs the end to end tests code.

### Create the prod configuration file to run the application code

On the production server that will run the application code, you may need to
override the `hostname`, `port`, and `listen` values to match your remote server
environment. To do that, create a `config/production.json` file, overriding the
needed fields only, following the structure defined in the file
`config/default.json`.

Note: see <https://www.npmjs.com/package/config> for more info on the config
system.

### Start the application code on the prod server

Once the remote prod conf file is created, start the prod server with:

```
NODE_ENV=production npm start
```

### Run the end to end tests from the CI server

Similarly, on the CI server, you may need to override the `hostname` and `port`
values to match your prod server location. To do that, create a
`config/production.json` file, overriding the needed fields only, following the
structure defined in the file `config/default.json`.

And from the CI server, run the end to end tests with:

```
NODE_ENV=production npm run test:e2e
```
