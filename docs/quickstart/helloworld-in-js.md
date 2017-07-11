---
id: helloworld-in-js
layout: page
title: Docs | QuickStart | HelloWorld in JavaScript
section: docs
sidenav: nav-docs.html
---
## HelloWorld in JavaScript
The sources of this example are available at [github.com/kevoree/samples](https://github.com/kevoree/samples/tree/master/js/helloworld)
```sh
git clone git@github.com:kevoree/samples.git
```

> <i class="fa fa-lightbulb-o"></i>&nbsp;&nbsp;In order to get started you need [NodeJS](https://nodejs.org/en/download/package-manager/)  

> <i class="fa fa-warning"></i>&nbsp;&nbsp;**Kevoree must be used with npm 4.x.y in development mode** (ie. `npm i -g npm@^4`)  
> *npm@^5 is not yet handled by Kevoree for dev mode*  

Once you have cloned the project, you need to install the dependencies:
```sh
cd samples/js/helloworld
npm i
```
You are now ready to start your first Kevoree JavaScript runtime in development mode:
```
npm start
```
Now you should be able to see something like this in your console:
```text
17:30:17 HelloWorld      Hello World!
17:30:17 Core            Model deployed successfully: 5 adaptations (119ms)
```

Code example of a JavaScript component:
```js
const AbstractComponent = require('kevoree-entities/lib/AbstractComponent');

const HelloWorld = AbstractComponent.extend({
  toString: 'HelloWorld',
  tdef_version: 1,

  start(done) {
    console.log('Hello world!');
    done();
  }
});
```
