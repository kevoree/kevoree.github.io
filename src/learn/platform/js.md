---
title: 'Kevoree | Learn | Platform | JavaScript'
layout: learn-page.html
---
## kevoree-js

Implementation of Kevoree targetting JavaScript platforms such as [Node.js](https://nodejs.org/) or **Web Browsers**.  

### Getting started

If you already have Node.js installed, you can install **Kevoree** using **npm**:
```bash
npm i -g kevoree-nodejs-runtime
```

Once installed, you can start a Kevoree runtime from the command-line:
```bash
kevoreejs
```

When you start a Kevoree runtime without giving a bootstrap model or command-line parameters,
Kevoree will start it with a default model which can be written in [**KevScript**](/learn/kevscript.html) like this:

```
add node0: JavascriptNode
add sync: WSGroup

attach node0 sync

set sync.port/node0 = '9000'
set node0.logLevel = 'info'
```

This will give you the possibility to access the current Kevoree model from the
[Kevoree Web Editor](http://editor.kevoree.org), using `127.0.0.1:9000` to
connect to your runtime from the editor menu `File > Open from node`.
