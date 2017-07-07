---
id: helloworld-in-java
layout: page
title: Docs | QuickStart | HelloWorld in Java
section: docs
sidenav: nav-docs.html
---
## HelloWorld in Java
```java
@ComponentType(version = 1, description = "My Hello world component")
public class HelloWorld {

  @Start
  public void start() {
    System.out.println("Hello world!");
  }
}
```
