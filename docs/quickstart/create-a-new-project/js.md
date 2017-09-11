To create a Kevoree project targeting Node.js or Web browsers you need to have the `kevoree-cli` installed.  

> If you do not have the CLI installed yet, you can do it by following this [installation page](/docs/getting-started/installation.html).  
>
> TL;DR `npm i -g kevoree-cli`

### Scaffolding a new project
The Kevoree CLI provides a command in order to scaffold a JavaScript project with everything that is needed to get started straight away.
```sh
kevoree create my-project
```

You will be asked for a few questions, once answered, a bunch of files will be generated.

![Create new project](/images/docs/quick-start/create-new-project.png)

Once generated you have to go to the created directory:
```sh
cd my-project
```
And install the dependencies and dev dependencies using `npm` or `yarn`:
```sh
npm i
```

### Start my project
You can start your generated project by running `npm start`
```sh
npm start
```
_NB: `npm start` is a shortcut for `node node_modules/.bin/kevoree-scripts build && node node_modules/.bin/kevoree-scripts start`_
