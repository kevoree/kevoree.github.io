---
title: 'Kevoree | Learn | KevScript | Management commands'
layout: learn-page.html
---
### KevScript management commands

To configure code and type definition source (repositories), KevScript offer several commands.
Following, Models@Run.time terminology, any configuration of Kevoree platforms, even IP definition is done through the model, and thus through the KevScript commands.

In this sub-section, we cover how to include type definitions from maven repositories and also how to configure IP informations.

**Comments**  
If you want to comment a line in your KevScript, here you go.
<pre>
    <code class="hljs nohighlight">// this is an inline comment</code>
</pre>

**Network**  
Specifies the IP address on which a node is reachable. In addition give as last parameter an interface face, this must be unique.
<pre>
    <code class="hljs nohighlight">network node0.ip.eth0 192.168.0.1</code>
</pre>

**Repository**  
<i class="fa fa-exclamation-triangle" style="color: orange"></i> **DEPRECATED**  
Adds a repository location for the resolution of binaries.
<pre>
    <code class="hljs nohighlight">repo org.sonatype.org/foo/bar?a=b&c=d
repo http://oss.sonatype.org/content/repositories/releases</code>
</pre>

**Include**  
<i class="fa fa-exclamation-triangle" style="color: orange"></i> **DEPRECATED**  
Imports a library of types in the model, makes the Types available.
A fixed version number enforce the use of a specific version of library that will never change.  
 - `SNAPSHOT` version will always get the last version of the library, in snapshot mode.  
 - `RELEASE` version tag indicates that the version has to be updated to the latests release of the library.  
 - `LATEST` version tag (the default) looks for the latest version of the library, regarless of its type (release or snapshot) based on the build timestamp.

<pre>
    <code class="hljs nohighlight">include mvn:org.kevoree.library.java:org.kevoree.library.java.javaNode:3.0.0
include mvn:org.kevoree.library.java:org.kevoree.library.java.javaNode:3.0.0-SNAPSHOT
include mvn:org.kevoree.library.java:org.kevoree.library.java.javaNode:RELEASE
include mvn:org.kevoree.library.java:org.kevoree.library.java.javaNode:LATEST</code>
</pre>
