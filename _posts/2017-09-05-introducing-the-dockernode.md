---
layout: post
title:  Introducing the DockerNode
date:   Thu Sep 21 17:50:55 CEST 2017
section: blog
categories: blog
author:
  name: leiko
  href: https://github.com/maxleiko
---
We have just released a new Node type capable of **managing a Docker engine** by leveraging model@runtime.  
Introduce the **DockerNode**.

[![DockerNode editor overview](/images/blog/introducing-the-dockernode/editor-view.png)](/images/blog/introducing-the-dockernode/editor-view.png)

### Let's get started
In order to test this new node, you need to get the latest [Kevoree Java Runtime](/download/download.html).  

Then create a KevScript file `/path/to/dockernode.kevs` with this configuration:
<textarea class="kevscript">add node0: DockerNode
add sync: CentralizedWSGroup

attach node0 sync

set sync.isMaster/node0 = 'true'</textarea>

> The **DockerNode** is a decorator around the **JavaNode** so you can still use your previous JavaNode-related configurations

And bootstrap your runtime using this KevScript:
```sh
java -Dnode.bootstrap=/path/to/dockernode.kevs -jar /path/to/kevoree.jar
```

And voilà!

![DockerNode terminal](/images/blog/introducing-the-dockernode/terminal.png)
