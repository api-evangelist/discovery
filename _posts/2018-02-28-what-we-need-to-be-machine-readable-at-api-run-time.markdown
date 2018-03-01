---
published: true
layout: post
title: What We Need To Be Machine Readable At API Run Time
date: 2018-02-28T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Event-Driven
  - Real Time
  - Directory
image: >-
  https://s3.amazonaws.com/kinlane-productions/algo-rotoscope/stories/4882162452_fa3126b38d_b_spagetti_accident.jpg
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>
I had breakfast with Mike Amundsen (<a href="https://twitter.com/mamund">@mamund</a>) and Matt McLarty (<a href="https://twitter.com/MattMcLartyBC">@MattMcLartyBC</a>) of the CA API Academy team this morning in midtown this morning. As we were sharing stories of what each other was working on, the topic of what is needed to execute an API call came up. Not the time consuming find an API, sign up for an account, figure out the terms of service and pricing version, but all of this condensed into something that can happen in a split second within applications and systems.

How do we distill down the essential ingredients of API consumption into a single, machine readable unit that can be automated into what Mike Amundsen calls, "find and bind". This is something I've been thinking a lot about lately as I work on my API discovery research, and there are a handful of elements that need to be present:

- **Authentication** - Having keys to be able to authentication.
- **Surface Area** - What is the host, base url, path, headers, and parameters for a request.
- **Terms of Service** - What are the legal terms of service for consumption.
- **Pricing** - How much does each API request cost me?

We need these elements to be machine readable and easily accessible at discover and runtime. Currently the surface area of the API can be described using OpenAPI, that isn't a problem. The authentication details can be included in this, but it means you already have to have an application setup, with keys. It doesn't include new users into the equation, meaning, discovering, registering, and obtaining keys. I have a draft specification I call "API plans" for the pricing portion of it, but it is something that still needs a lot of work. So, in short, we are nowhere near having this layer ready for automation--which we will need to scale all of this API stuff.

This is all stuff I've been beating a drum about for years, and I anticipate it is a drum I'll be beating for a number of more years before we see come into focus. I'm eager to see Mike's prototype on "find and bind", because it is the only automated, runtime, discovery, registration, and execute research I've come across that isn't some proprietary magic. I'm going to be investing more cycles into my API plans research, as well as the terms of service stuff I started way back when alongside my API Commons project. Hopefully, moving all this forward another inch or two.
