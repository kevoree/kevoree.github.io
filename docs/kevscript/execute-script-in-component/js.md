### Directly trigger adaptations
This component will send each received messages to the core **ModelService** as KevScript.  
This will have the effect of modifying the abstraction layer and so the running system.
```js
const AbstractComponent = require('kevoree-entities/lib/AbstractComponent');

module.exports = AbstractComponent.extend({
  toString: 'KevScriptServiceComp',
  tdef_version: 1,

  in_in(script) {
    // this will update the abstraction layer
    this.kCore.submitScript(script);
  }
});
```

### Local execution
This component will execute each received messages as KevScript using an empty model as context.  
Once executed, it will serialize the new model and send it to its output port named `json`
```js
const AbstractComponent = require('kevoree-entities/lib/AbstractComponent');
const kevoree = require('kevoree-library');

module.exports = AbstractComponent.extend({
  toString: 'KevScript2ModelComp',
  tdef_version: 1,

  construct() {
    const factory = new kevoree.factory.DefaultKevoreeFactory();
    this.serializer = factory.createJSONSerializer();
  },

  in_kevs(script) {
    // execute the incoming script on an empty model (default behavior in js)
    this.kCore.kevs.parse(script, (err, model) => {
      if (err) {
        console.error('Something went wrong', err.message);
      } else {
        // serialize the model to JSON and send it through the output port
        this.out_json(this.serializer.serialize(model));
      }
    });
  },

  out_json() {/* noop as this function will be modified by the runtime */}
});
```
