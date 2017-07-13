### Directly trigger adaptations
This component will send each received messages to the core **ModelService** as KevScript.  
This will have the effect of modifying the abstraction layer and so the running system.
```java
@ComponentType(version = 1, description = "Update the current system using input messages as KevScript")
public class KevScriptServiceComp {

  @KevoreeInject
  private ModelService modelService;

  @Input
  public void in(String script) {
    // this will update the abstraction layer
    this.modelService.submitScript(script);
  }
}
```

### Local execution
This component will execute each received messages as KevScript using an empty model as context.  
Once executed, it will serialize the new model and send it to its output port named `json`
```java
@ComponentType(version = 1, description = "Transform incoming KevScript messages to JSON model")
public class KevScript2ModelComp {

  @KevoreeInject
  private KevScriptService kevs;

  @Output
  private Port json;

  private KevoreeFactory factory = new DefaultKevoreeFactory();
  private JSONSerializer serializer = factory.createJSONSerializer();

  @Input
  public void kevs(String script) {
    // create an empty model
    final ContainerRoot model = factory.createContainerRoot();
    factory.root(model);
    // execute the incoming script to update the empty model
    this.kevs.execute(script, model);
    // serialize the model to JSON and send it through the output port
    this.json.send(this.serializer.serialize(model));
  }
}
```
