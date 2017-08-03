---
published: true
layout: post
title: API Discovery Using JSON Home
date: 2017-08-03T13:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Definitions
  - Links
image: >-
  https://s3.amazonaws.com/kinlane-productions/json-home/json-home-widget-example.png
---
<p><a href="https://tools.ietf.org/html/draft-nottingham-json-home-06"><img src="https://s3.amazonaws.com/kinlane-productions/json-home/json-home-widget-example.png" align="right" width="40%" style="padding: 15px;" /></a></p>I'm have finally dedicated some time to learning more about [Home Documents for HTTP APIs, or simply JSON Home](https://tools.ietf.org/html/draft-nottingham-json-home-06). I see JSON Home as a nice way to bring together the technical components for an API, very similar to what I've been trying to accomplish with APIs.json. One of the biggest differences I see is that I'd say APIs.json was born out of the world of open data and APIs, where JSON Home is born of the web (which actually makes better sense).

I think the JSON Home description captures the specifications origins very well:

> The Web itself offers one way to address these issues, using links [RFC3986] to navigate between states.  A link-driven application discovers relevant resources at run time, using a shared vocabulary of link relations [RFC5988] and internet media types [RFC6838] to support a "follow your nose" style of interaction - just as a Web browser does to navigate the Web.

JSON Home provides any potential client with a machine readable set of instructions it can follow, involving one, or many APIs--providing a starting page for APIs which also enables:

- Extensibility - Because new server capabilities can be expressed as link relations, new features can be layered in without introducing a new API version; clients will discover them in the home document.
- Evolvability - Likewise, interfaces can change gradually by introducing a new link relation and/or format while still supporting the old ones.
- Customisation - Home documents can be tailored for the client, allowing different classes of service or different client permissions to be exposed naturally.
- Flexible deployment - Since URLs aren't baked into documentation, the server can choose what URLs to use for a given service.

JSON Home, is a home page specification which uses JSON to provide APIs with a a launching point for the interactions they offer, by providing a coherent set links, all wrapped in a single machine readable index. Each JSON begins with a handful of values:

- title - a string value indicating the name of the API
- links - an object value, whose member names are link relation types [RFC5988], and values are URLs [RFC3986].
- author - a suitable URL (e.g., mailto: or https:) for the author(s) of the API
- describedBy - a link to documentation for the API
- license - a link to the legal terms for using the API

Once you have the general details about the JSON Home API index, you can provide a collection of resource objects possessing links that can be indicated using an href property with a URI value, or template links which uses a URI template. Just like a list of links on a home page, but instead of a browser, it can be used in any client, for a variety of different purposes.

Each of the resources allow for resource hints, which allow clients to obtain relevant information about interacting with a resource beforehand, as a means of optimizing communications, as well as sharing which behaviors will be available for an API. Here are the default hints available for JSON Home:

- allow - Hints the HTTP methods that the current client will be able to use to interact with the resource; equivalent to the Allow HTTP response header.
- formats - Hints the representation types that the resource makes available, using the GET method.
- accept-Patch - Hints the PATCH [RFC5789] request formats accepted by the resource for this client; equivalent to the Accept-Patch HTTP response header.
- acceptPost  - Hints the POST request formats accepted by the resource for this client.
- acceptPut - Hints the PUT request formats accepted by the resource for this client.
- acceptRanges - Hints the range-specifiers available to the client  for this resource; equivalent to the Accept-Ranges HTTP response header [RFC7233].
- acceptPrefer - Hints the preferences [RFC7240] supported by the resource.  Note that, as per that specifications, a preference can be ignored by the server.
- docs - Hints the location for human-readable documentation for the relation type of the resource.
- preconditionRequired - Hints that the resource requires state-changing requests (e.g., PUT, PATCH) to include a precondition, as per [RFC7232], to avoid conflicts due to concurrent updates.
- authSchemes- Hints that the resource requires authentication using the HTTP Authentication Framework [RFC7235].
- status -  Hints the status of the resource.

These hints provide you with a base set of the most commonly used sets of information, but then there is also a HTTP resource hint registration where all hints are registered. Hints can be added, allowing for the addition of custom defined hints, providing additional information beforehand about what can be expected from a resource link included as part of a JSON Home index. It is a much more sophisticated approach describing the behaviors of links than we included in APIs.json, with the formal hint registry being very useful and well-defined.

I"d say that JSON Home has all the features for defining a single, or collections of APIs, but really reflects its roots in the web, and possesses a heavy focus on enabling action with each link. While this is part of the linking structure of APIs.json, I feel like the detail and the mandate for action around each resource in a JSON Home index is much stronger. I feel like JSON Home is in the same realm as Postman Collections, but when it comes to API discovery. I always feel like a Postman Collection is more transactional than OpenAPI is by default. There is definitely overlap, but Postman Collections always feels one or two step closer to some action being taken than OpenAPI does--I am guessing it is because of it's client roots, similar to the web roots of JSON Home, and also OpenAPIs roots in documentation.

Ok. Yay! I have Pivio, and now JSON Home both loaded in my brain. I have a feel for what they are trying to accomplish, and have found some interesting layers I hadn't considered while doing my APIs.json centered API discovery work. Now I can step back, and consider the features of all three of these API discovery formats, establish a rough Venn diagram of their features, and consider how they overlap, and compliment each other. I feel like we are moving towards an important time for API discovery, and with the growing number of APIs available we will see more investment in API discovery specifications, as well as services and tooling that help us with API discovery. I'll keep working to understand what is going on, establish at least a general understanding of each API discovery specifications, and report back here about what is happening when I can.
