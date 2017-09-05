---
layout: post
title:  A new release is out
date:   2017-09-05 10:48:00 +0200
section: blog
categories: blog
author:
  name: leiko
  href: https://github.com/maxleiko
---
We have just released **new stable versions** of the `Java` and `NodeJS` platforms:
  - **Java** `v5.5.0`
  - **NodeJS** `v6.1.7`

> We are aware of the misleading difference between the two platforms major versions and we will most definitely make those converge in a near future (at least for the CLIs)

Those new versions are the output of 3 years of incremental development with the feedbacks received from the [HEADS](http://heads-project.eu/) consortium.  

#### Overall changes:
 - publishing on a Kevoree registry is now pre-checked to prevent erroneous publication of models
 - improved logging experience
 - shared user config in `~/.kevoree/config.json`

#### Main changes for Java:
 - instances classloader are now using a `URLClassLoader` approach, which is supposed to reflect the default behavior intended by 3rd-party libraries users
 - runtime errors/exceptions are now understandable with a clean stack bubbling all the way up to the core

#### Main changes for NodeJS:
 - improved error handling (Promises instead of callbacks [except for instances lifecycle hooks](/docs/quickstart/lifecycle.html))
 - development tooling is now packed in a `kevoree-scripts` module to clarify projects for new-comers
