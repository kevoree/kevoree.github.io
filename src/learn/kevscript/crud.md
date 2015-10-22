---
title: 'Kevoree | Learn | KevScript | CRUD commands'
layout: 'learn-page.html'
---
### KevScript CRUD commands

CRUD (Create, Remove, Update, Delete) operations are basic statements in KevScript.
Namely they allow to create and move components,channels, groups and childs nodes instances.

**Add**  
Adds a new instance of `Component`, `Node`, `Channel` or `Group`.
You can add several elements of the same type, at the same time, by separating the instances' names with a `,`.
When the element you add is a component instance, you `MUST` specify the node that will host this instance, using a dotted notation (i.e.: node0.instance0 : MyComponentType).
<pre>
    <code class="hljs nohighlight">add node0, node1 : JavaNode
add sync : WebSocketGroup/0.0.2-SNAPSHOT
add node0.comp0 : ToyConsole
add node0.comp1, node0.comp2 : ToyDisplay
add chan0 : DelayBufferedChannel</code>
</pre>

**Remove**  
Removes elements from the model.
<pre>
    <code class="hljs nohighlight">remove node0
remove sync
remove chan0</code>
</pre>

**Move**  
Moves one or several instances to another node. Instances can be of type `NodeType` or `ComponentType`. The last parameter of the command is always the destination node.
<pre>
    <code class="hljs nohighlight">move node0.comp0 node1
move *.* node0 //moves all components of all nodes, to node0
move node0.comp0, node0.comp1 node1</code>
</pre>

**Set**  
Used to set parameters of instances.
Some parameters are `fragment dependent`. In this case, a property can have a different value on each node howting a fragment (it can be the case for Groups and Channels). In this case, the property is set using a `<element>.<property>/<node> = "<value>"` notation.
<pre>
    <code class="hljs nohighlight">set node0.comp0.foo = "bar"
set node0.*.baz = 'potato' //sets the property baz of all components on node0
set sync.forcePush = "false"
set sync.port/node0 = '8000'</code>
</pre>
