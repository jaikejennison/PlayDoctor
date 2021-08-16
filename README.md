# PlayDoctor

## The Playwright Webdriver Doctor (for shit head asshole bad-motivator-ass-motherfuc#%*ing WebDrivers)

### Run Stuff

In the terminal

```bash
cd PlayDoctor
```

```bash
npm i
```

In a new terminal

```bash
cd PlayDoctor
```

```bash
npm test
```


### Fun Stuff

Include a web server in tests

```js
// my-test.js
const base = require('@playwright/test');
const http = require('http');

// Note how we mark the fixture as { scope: 'worker' }.
// Also note that we pass empty {} first, since we do not declare any test fixtures.
exports.test = base.test.extend({
  server: [ async ({}, use, workerInfo) => {
    // Start the server.
    const server = http.createServer();
    server.listen(9000 + workerInfo.workerIndex);
    await new Promise(ready => server.once('listening', ready));

    // Use the server in the tests.
    await use(server);

    // Cleanup.
    await new Promise(done => server.close(done));
  }, { scope: 'worker' } ]
});
```
