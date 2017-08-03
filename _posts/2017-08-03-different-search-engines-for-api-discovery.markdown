---
published: true
layout: post
title: Different Search Engines For API Discovery
date: 2017-08-03T11:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Search
image: >-
  https://s3.amazonaws.com/kinlane-productions/api-evangelist/services/api-discovery.png
---
<p><img src="https://s3.amazonaws.com/kinlane-productions/api-evangelist/services/api-discovery.png" align="right" width="30%" style="padding: 15px" /></p>I was learning about [the microservices discovery specification Pivio](http://pivio.io/), which is a schema for framing the conversation, but also an uploader, search, and web interface for managing a collection of microservices. I found their use of ElasticSearch as the search engine for their tooling worth thinking about more. When we first launched [APIs.json](http://apisjson.org), we created [APIs.io](http://apis.io) as the search engine--providing a custom developed public API search engine. I hadn't thought of using ElasticSearch as an engine for searching APIs.json treated as a JSON document.

Honestly, I have been relying on the Github API as the search engine for my API discovery. Using it to uncover not just APIs.json, but OpenAPI, API Blueprint, and other API specification formats. This works well for public discovery, but I could see ElasticSearch being a quick and dirty way to launch a private or public engine for an API discovery, catalog, directory, or type of collection. I will add ElasticSearch, and other platforms I track on as part of my [API deployment research](http://deployment.apievangelist.com) as a [API discovery building block](http://discovery.apievangelist.com), evolving the approaches I'm tracking on.

It is easy to think of API discovery as directories like ProgrammableWeb, or marketplaces like Mashape, and public API search engines like APIs.io--someone else's discovery vehicle, which you are allowed to drive when you need. However, when you begin to consider other types of API discovery search engines, you realize that a collection of API discovery documents like JSON Home, Pivio, and APIs.json can quickly become your own personal API discovery vehicle. I'm going to write a separate piece on how I use Github as my API discovery engine, then I think I'll step back and look at other approaches to searching JSON or YAML documents to see if I can find any search engines that might be able to be fine tuned specifically for API discovery.
