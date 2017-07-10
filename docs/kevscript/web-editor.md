---
id: web-editor
layout: page
title: Docs | KevScript | Web Editor
section: docs
sidenav: nav-docs.html
---
## KevScript in the Web editor
In the [Kevoree Web Editor](http://editor.kevoree.org/#/kevscript) you can execute KevScript files directly from your browser.  

> <a href="http://editor.kevoree.org/#/kevscript" target="\_blank">Execute</a> your KevScript directly from your browser!

![WebEditor KevScript engine with auto-complete](/images/docs/kevscript/hint.png)

The KevScript engine in the Web editor is based on the NodeJS module [kevoree-kevscript](https://github.com/kevoree/kevoree-js-kevscript) and is bundled as a [CodeMirror](https://codemirror.net/) mode available [here](https://github.com/kevoree/cm-kevscript).  

### Kevoree Registry setting
Every KevScript engine needs to be able to access a [Kevoree Registry](/docs/registry/purpose.html) somewhere in order to resolve the **TypeDefinitions** and there **DeployUnits**.  
To specify a registry other than the official `https://registry.kevoree.org`, you can go to the `/#/settings` page of the Web editor [here](http://editor.kevoree.org/#/settings) and modify the **Kevoree Registry** input field.

![WebEditor Registry url setting](/images/docs/kevscript/registry_url.png)

### Auto-complete feature
The editor comes with an auto-complete feature available using `Ctrl-Space` depending on the current cursor position.  
It also executes the script *as-you-type* giving you success/error/warning feedbacks directly on the screen.
