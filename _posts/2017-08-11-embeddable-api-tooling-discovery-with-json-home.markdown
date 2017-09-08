---
published: true
layout: post
title: Embeddable API Tooling Discovery With JSON Home
date: 2017-08-11T11:00:00.000Z
tags:
  - API Evangelist
  - Embeddable
  - Discovery
  - Definitions
image: 'https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-widgets.png'
---
<p><img src="https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-widgets.png" align="right" width="30%" style="padding: 15px;" /></p>[I have been studying JSON Home](http://apievangelist.com/2017/08/03/api-discovery-using-json-home/), trying to understand how it sizes up to [APIs.json](http://apisjson.org), and [other formats I'm tracking on like Pivio](http://apievangelist.com/2017/08/03/microservice-discovery-using-pivio/). JSON Home has a number of interesting features, and I thought one of their examples was also interesting, and was relevant to [my API embeddable research](http://embeddable.apievangelist.com/). In this example, JSON Home was describing a widget that was putting an API to use as part of its operation.

Here is the snippet from the JSON Home example, providing all details of how it works:

<script src="https://gist.github.com/kinlane/40fabbb3133ddd1c65249dfdc87999cd.js"></script>

JSON Home seems very action oriented. Everything about the format leads you towards taking some sort of API driven action, something that makes a lot of sense when it comes to widgets and other embeddables. I could see JSON Home being used as some sort of definition for button or widget generation and building tooling, providing a machine readable definition for the embeddable tool, and what is possible with the API(s) behind.

I've been working towards embeddable directories and API stacks using APIs.json, providing distributed and embeddable tooling that API providers and consumers can publish anywhere. I will be spending more time thinking about how this world of API discovery can overlap with the world of API embeddables, providing not just a directory of buttons, badges, and widgets, but one that describes what is possible when you engage with any embeddable tool. I'm beginning to see JSON Home similar to how I see Postman Collections, something that is closer to runtime, or at least deploy time. Where APIs.json is much more about indexing, search, and discovery--maybe some detail about where the widgets are, or maybe more detail about what embeddable resources are available.
