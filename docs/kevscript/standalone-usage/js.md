### NPM module
```sh
npm i kevoree-kevscript -S
```
> <i class="fa fa-lightbulb-o"></i> &nbsp; You will also need `tiny-conf` & `kevoree-commons`  

### Usage example
```js
const config = require('tiny-conf');
const KevScript = require('kevoree-kevscript');
const loggerFactory = require('kevoree-logger');
const assert = require('assert');

// kevoree-kevscript uses tiny-conf under the hood to retrieve
// its registry settings, so we have to define them before instantiation
config.set('registry', {
  host: 'registry.kevoree.org',
  port: 443,
  ssl: true
});

const kevs = new KevScript(loggerFactory.create('KevScript'));
const script = 'add node: JavascriptNode';

kevs.parse(script, (err, model) => {
  if (err) {
    console.error('Something went wrong while executing script', err.message);
  } else {
    assert.equal(model.nodes.array[0].name, 'node');
  }
});
```
