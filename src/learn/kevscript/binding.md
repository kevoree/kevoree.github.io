---
title: 'Kevoree | Learn | KevScript | Binding commands'
layout: learn-page.html
---
### Binding/Sync Commands

**Bind**  
Binds the port, or several ports, of a component instance to several channel instances.
```js
bind node0.base.output chan0
bind node0.base.input chan0
```

**Unbind**  
Disconnects the port of a component from a channel.
<pre>
    <code class="hljs nohighlight">unbind node0.base.input chan0</code>
</pre>

**Attach**  
The last parameter of this command can be an instance of `group`or a `namespace`.
If the last parameter is a namespace, the list of parameters can be whatever you want. If the last parameter is a group, the elements should be nodes or namespaces.
<pre>
    <code class="hljs nohighlight">// only one node instance name
attach node0 sync
// or list of node instance names
attach node1, node2 sync
// or a wildcard to match any node instance names
attach * sync2</code>
</pre>

**Detach**  
Disconnects one or several node instances from a synchronization group. The group is always at the last position in the command.
<pre>
    <code class="hljs nohighlight">detach node0 sync2</code>
</pre>
