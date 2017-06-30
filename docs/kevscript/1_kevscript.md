---
layout: page
title: KevScript
permalink: /docs/kevscript.html
group: sidenav
---
## Kevoree Script aka KevScript
KevScript is a scripting language to manipulate models. **It is not a general purpose language.**  

A KevScript engine will take a script and a model as inputs, and return a new model modified according to the script.  
> A KevScript engine in short is:  
> `(kevscript, inModel) => outModel`

### Overview
Here is an example of a basic KevScript:
<textarea class="kevscript">add node0: JavascriptNode
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

network node0.ip.lo 127.0.0.1</textarea>

Using this KevScript as an input to the engine, and an empty model as context
model, the output will look like this in the [Kevoree Web Editor](http://editor.kevoree.org):

![KevScript overview](/images/docs/model_overview.png)
