---
layout: page
title: Platforms | HelloWorld in JavaScript
permalink: /docs/platforms/helloworld-in-js.html
group: sidenav
menu: HelloWorld in JavaScript
---
## HelloWorld in JavaScript
```js
const AbstractComponent = require('kevoree-entities/lib/AbstractComponent');

const HelloWorld = AbstractComponent.extend({
  toString: 'HelloWorld',

  start(done) {
    console.log('Hello world!');
    done();
  }
});
```
