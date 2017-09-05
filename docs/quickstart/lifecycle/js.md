```js
const AbstractComponent = require('kevoree-entities/lib/AbstractComponent');

const HelloWorld = AbstractComponent.extend({
  toString: 'HelloWorld',
  tdef_version: 1,

  start(done) {
    this.log.info('Hello world!');
    done();
  },

  update(done) {
    this.log.info('My world is changing');
    done();
  },

  stop(done) {
    this.log.info('Bye world!');
    done();
  }
});
```
