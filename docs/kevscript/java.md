---
id: java
layout: page
title: Docs | KevScript | In Java
section: docs
sidenav: nav-docs.html
---
## KevScript in Java

### Maven Artifact
```xml
<dependency>
  <groupId>org.kevoree</groupId>
  <artifactId>org.kevoree.tools.kevscript</artifactId>
  <version>${kevoree.version}</version>
</dependency>
```

### Usage example
```java
KevScriptEngine kevs = new KevScriptEngine("https://new-registry.kevoree.org");
try {
  final String script = "add node: JavaNode/LATEST/LATEST";
  final KevoreeFactory factory = new DefaultKevoreeFactory(); // a factory to create models
  final ContainerRoot model = factory.createContainerRoot(); // create an empty model
  factory.root(model); // ignore this but make sure you do it :p

  kevs.execute(script, model);
  // in Java, the KevScript engine mutates the given model directly
  assert (model.getNodes().get(0).getName().equals("node"));
} catch (KevScriptException ex) {
  // something went wrong while executing the script
  ex.printStackTrace();
}
```
