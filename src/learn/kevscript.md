---
title: 'Kevoree | Learn | KevScript'
layout: learn-page.html
---
### Kevoree Script aka KevScript
KevScript is a scripting language to manipulate models. **It is not a general purpose language.**  

A KevScript engine will take a script and a model as inputs, and return a new model modified according to the script.
*In other word, KevScript is only a Kevoree-specific transformation language.*

### Overview
Here is an example of a basic KevScript:
<pre>
    <code class="hljs nohighlight">add node0: JavascriptNode
add node0.ticker: Ticker
add node1: JavaNode
add node1.printer: ConsolePrinter
add sync: WSGroup
add chan: RemoteWSChan

attach node0, node1 sync

bind node0.ticker.tick chan
bind node1.printer.input chan

set sync.master = "node0"
set chan.uuid = "eW9sb3N3YWc="
set chan.host = "ws.kevoree.org"

network node0.ip.lo 127.0.0.1</code>
</pre>

Using this KevScript as an input to the engine, and an empty model as context
model, the output will look like this in the [Kevoree Web Editor](http://editor.kevoree.org):

![KevScript overview](/images/learn/kevscript/model_overview.png)

### Usage in Java
You can use the **KevScript engine** using its **Java API**.
In your **pom.xml** just add:
```xml
<dependency>
    <groupId>org.kevoree</groupId>
    <artifactId>org.kevoree.kevscript</artifactId>
    <version>${kevoree.kevscript.version}</version>
</dependency>
```

Then you can access the KevScript Engine API like so:
```java
KevScriptEngine engine = new KevScriptEngine(modelToModify);
ContainerRoot resultModel = engine.execute("add node1 : JavaNode");
```

### Usage in JavaScript
#### In Node.js
```bash
npm i kevoree-kevscript --save
```

Then you can access the KevScript Engine API like so:
```js
var KevScript = require('kevoree-kevscript');

var kevs = new KevScript();
kevs.parse('add node0: JavascriptNode', modelToModify, function (err, model) {
    if (err) {
        throw err;
    } else {
        // "model" is the resulting ContainerRoot
    }
});
```
More information on the JavaScript API can be found on the [GitHub project](https://github.com/kevoree/kevoree-js-kevscript).

#### In the browser
```bash
bower i kevoree-kevscript --save
```

Then you can access the KevScript Engine API globally like so:
```js
var kevs = new KevoreeKevscript();
kevs.parse('add node0: JavascriptNode', modelToModify, function (err, model) {
    if (err) {
        throw err;
    } else {
        // "model" is the resulting ContainerRoot
    }
});
```
