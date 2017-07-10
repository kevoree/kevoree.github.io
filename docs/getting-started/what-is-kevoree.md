---
id: what-is-kevoree
layout: page
title: Docs | What is Kevoree?
section: docs
sidenav: nav-docs.html
---
# What is Kevoree?
Kevoree is a set of tools designed to help you create and manage distributed systems, using an approach called **model@runtime**.  
This approach aims at taming the complexity of distributed adaptable systems (DDAS).

**Reason 1**  
To perform an adaptation, a system has to know technical details about deployed elements in order to do the provisioning.

> In Kevoree we propose to interact through an abstraction layer (model) which contains only simple primitives, thus, CRUD operations on elements. As a result, adaptations are simpler and the complexity is delegated to the execution platform (eg. the nodes) which knows the technical details about how to perform those adaptations.

**Reason 2**  
System adaptations can be complex to plan and introspection is complex.

> In Kevoree we propose to interact asynchronously with a local model layer in order to express foreseen modifications. These modifications are then send to a node which order and execute them.

The idea of **model@runtime** can be explain in 4 steps:
1. A model keep an up-to-date abstract of the state of the system (eg. number of instances, their types, their parameters, etc.)
2. To perform an adaptation on the system, we interact only by modifying the abstraction
3. We send the abstraction to a runtime, which will apply the modifications on the running system
4. The system now reflects the abstract model, and further adaptations can be requested

<!-- ![modelATruntime](modelATruntime2.png) -->

**Reason 3**  
Distributed systems are often unsynchronized due to connection failure.

> In Kevoree, we propose to interact through an asynchronous model. Thus, the system will take care of using different strategies to send the model to other running platforms asynchronously as well.

<!-- ![modelATruntime](distModelAtRuntime.png) -->

### The Kevoree model abstraction
This screenshot shows a distributed Kevoree system. Every nodes (the white rectangles) are sharing the same abstract model using a group (the green circle) and those nodes are running some components (the black boxes) that can share messages using the connected channels (the orange circles).

![Model overview in the Kevoree Web Editor](/images/docs/model_overview.png)

At any point in time you can get such abstraction of a Kevoree system using the [Kevoree Web Editor](http://editor.kevoree.org) and connecting to your own running system.
