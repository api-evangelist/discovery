---
published: true
layout: post
title: Defining The Smallest Unit Possible For Use At API Runtime
date: 2018-03-09T12:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Definitions
image: >-
  https://s3.amazonaws.com/kinlane-productions/peachtree/peachtree-email-validation.png
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>[I'm thinking a lot about what is needed at API runtime lately](http://apievangelist.com/2018/02/28/what-we-need-to-be-machine-readable-at-api-run-time/). How we document and provide machine readable definitions for APIs, and how we provide authentication, pricing, and even terms of service to help reduce friction. As Mike Amundsen ([@mamund](https://twitter.com/mamund)) puts it, to enable "find and bind". This goes beyond simple API on-boarding, and getting started pages, and looks to make APIs executable within a single click, allowing us to put them to use as soon as we find them.

The most real world example of this in action can be found with [the Run in Postman button](https://www.getpostman.com/docs/v6/postman_for_publishers/run_button/creating_run_button), which won't always deal with the business and politics of APIs at runtime, but will deal with just about everything else. Allowing API providers to publish Run in Postman Buttons, defined using a Postman Collection, which include authentication environment details, that API consumers can use to quickly fire up an API in a single click. One characteristic I've come across that contributes to Postman Collections being truly executable is that they reflect the small unit possible for use at API runtime.

[You can see an example of this in action over at Peachtree Data](https://developer.peachtreedata.com/Documentation#overview), who like many other API providers have crafted Run in Postman buttons, but instead of doing this for the entire surface area of their API, they have done it for a single API path. Making the Run in Postman button much more precise, and executable. Taking it beyond just documentation, to actually being more of a API runtime executable artifact. This is a simple shift in how Postman Collections can be used, but a pretty significant one. Now instead of wading through all of Peachtree's APIs in my Postman, I can just do an address cleanse, zip code lookup, or email validation--getting down to business in a single click.

This is an important aspect of on-boarding developers. I may not care about wading through and learning about all your APIs right now. I'm just looking for the API solution I need to a particular problem. Why clutter up my journey with a whole bunch of other resources? Just give me what I need, and get out of my way. Most other API providers I have looked at in [Postman's API Network](https://www.getpostman.com/api-network/) have provided a single Run in Postman button for all of their APIs, where Peachtree has opted to provide many Run in Postman buttons for each of their APIs. Distinguishing themselves, and the value of each of their API resources in a pretty significant way.

I asked the questions the other week, regarding [how big or how small is an API](http://apievangelist.com/2018/02/15/how-big-or-small-is-an-api/)? I'm struggling with this question in my API stack work, as part of an investment by Streamdata.io to develop an API gallery. Do people want to find Amazon Web Services APIs? Amazon EC2 APIs? Or the single path for firing up an instance of EC2? What is the small unit of compute we should be documenting, generating OpenAPI and Postman Collections for? I feel like this is an important API discovery conversation to be having. I think depending on the circumstances, the answer will be different. It is a question I'll keep asking in different scenarios, to help me better understand how I can document, publish, and make APIs not just more discoverable, but usable at runtime.
