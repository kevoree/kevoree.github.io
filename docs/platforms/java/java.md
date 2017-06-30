---
layout: page
title: Platforms | HelloWorld in Java
permalink: /docs/platforms/helloworld-in-java.html
group: sidenav
menu: HelloWorld in Java
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
