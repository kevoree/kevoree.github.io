The sources of this example are available at [github.com/kevoree/samples](https://github.com/kevoree/samples/tree/master/java/helloworld)
```sh
git clone git@github.com:kevoree/samples.git
```

> <i class="fa fa-lightbulb-o"></i>&nbsp;&nbsp;In order to get started you need [Java 8+](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and [Maven](https://maven.apache.org/install.html)  

Once you have cloned the project, you can install it locally:
```sh
cd samples/java/helloworld
mvn install
```
You are now ready to start your first Kevoree Java runtime:
```
mvn kev:run
```
Now you should be able to see something like this in your console:
```text
Hello World!
00:01 INFO: Model deployed successfully (468ms)
00:01 INFO: Bootstrap succeed
```

Code example of a Java component:
```java
/**
 *
 * Created by leiko on 12/2/16.
 */
@ComponentType(version = 1)
public class HelloWorld {

    @Start
    public void start() {
        System.out.println("Hello World!");
    }

    @Stop
    public void stop() {
        System.out.println("Bye World!");
    }
}

```
