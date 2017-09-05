```java
@ComponentType(version = 1)
public class HelloWorld {

    @Start
    public void start() {
        System.out.println("Hello World!");
    }

    @Update
    public void update() {
        System.out.println("My world is changing");
    }

    @Stop
    public void stop() {
        System.out.println("Bye World!");
    }
}

```
