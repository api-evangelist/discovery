---
published: true
layout: post
title: What Is The Streamdata.io API Gallery?
date: 2018-02-27T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Event-Driven
  - Real Time
  - Directory
image: >-
  http://kinlane-productions.s3.amazonaws.com/algorotoscope/builder/filtered/68_174_800_500_0_max_0_-5_-1.jpg
---
<p><img src="http://kinlane-productions.s3.amazonaws.com/algorotoscope/builder/filtered/68_174_800_500_0_max_0_-5_-1.jpg" align="right" width="45%" style="padding: 15px;" /></p>As I prepare to launch the Streamdata.io API Gallery, I am doing a handful of presentations to partners. As part of this process I am looking to distill down the objectives behind the gallery, and the opportunity it delivers to just a handful of talking points I can include in a single slide deck. Of course, as the API Evangelist, the way I do this is by crafting a story here on the blog. To help me frame the conversation, and get to the core of what I needed to present, I wanted to just ask a couple questions, so that I can answer them in my presentation.

**What is the Streamdata.io API Gallery?**
It is a machine readable, continuously deployed collection of OpenAPI definitions, indexed used APIs.json, with a user friendly user interface which allows for the browsing, searching, and filtering of individual APIs that deliver value within specific industries and topical areas.

**What are we looking to accomplish with the Streamdata.io API Gallery?**
Discover and map out interesting and valuable API resources, then quantify what value they bring to the table while also ranking, categorizing, and making them available in a search engine friendly way that allows potential Streamdata.io customers to discover and understand what is possible.

**What is the opportunity around the Streamdata.io API Gallery?**
Identify the best of breed APIs out there, and break down the topics that they deliver within, while also quantifying the publish and subscribe opportunities available--mapping out the event-driven opportunity that has already begun to emerge, while demonstrating Streamdata.io's role in helping get existing API providers from where they are today, to where they need to be tomorrow.

**Why is this relevant to Streamdata.io, and their road map?**
It provides a wealth of research that Streamdata.io can use to understand the API landscape, and feed it's own sales and marketing strategy, but doing it in a way that generates valuable search engine and social media exhaust which potential customers might possibly find interesting, bringing them new API consumers, while also opening their eyes up to the event-driven opportunity that exists out there.

**Distilling Things Down A Bit More**
Ok, that answers the general questions about what the Streamdata.io API Gallery is, and why we are building it. Now I want to distill down a little bit more to help me articulate the gallery as part of a series of presentations, existing as just a handful of bullet points. Helping get the point across in hopefully 60 seconds or less.

- What is the Streamdata.io API Gallery?
	- API directory, for finding individual units of compute within specific topics.
    - OpenAPI (fka Swagger) driven, making each unit of value usable at run-time.
    - APIs.json indexed, making the collections of resources easy to search and use.
    - Github hosted, making it forkable and continuously deployable and integrate(able).
- Why is the Streamdata.io Gallery relevant?
	- It maps out the API universe with an emphasis on the value each individual API path possesses.
    - Categories, tags, and indexes APIs into collections which are published to Github.
    - Provides a human and machine friendly view of the existing publish and subscribe landscape.
    - Begins to organize the API universe in context of a real time event-driven messaging world.
- What is the opportunity around the Streamdata.io API Gallery?
	- Redefining the API landscape from an event-driven perspective.
    - Quantify, qualify, and rank APIs to understand what is the most interesting and highest quality.
    - Help API providers realize events occurring via their existing platforms.
    - Begin moving beyond a request and response model to an event-driven reality.

There is definitely a lot more going on within the Streamdata.io API Gallery, but I think this captures the essence of what we are trying to achieve. A lot of what we've done is building upon my existing API Stack work, where I have worked to profile and index public APIs using OpenAPI and APIs.json, but this round of work is taking things to a new level. With API Stack I ended up with lists of companies and organizations, each possessing a list of APIs. The Streamdata.io API Gallery is a list of API resources, broken down by the unit of value they bring to the table, which is further defined by whether it is a GET, POST, or PUT--essentially a publish or subscribe opportunity.

Additionally, I am finally finding traction with the API rating system(s) I have been developing for the last five years. Profiling and measuring the companies behind the APIs I'm profiling, and making this knowledge available not just at discover time, but potentially at event and run time. Basically being able to understand the value of an event when it happens in real time, and be able to make programmatic decisions regarding whether we care about the particular event or not. Eventually, allowing us to subscribe only to the events that truly matter to us, and are of the highest value--then tuning out the rest. Delivering API ratings in an increasingly crowded and noisy event-driven API landscape.

We have the prototype for the Streamdata.io API Gallery ready to go. We are still adding APIs, and refining how they are tagged and organized. The rating system is very basic right now, but we will be lighting up different dimensions of the rating(s) algorithm, and hopefully delivering on different angles of how we quantify the value of events that occurring. I'm guessing we will be doing a soft launch in the next couple of weeks to little fanfare, and it will be something that builds, and evolves over time as the API index gets refined and used more heavily.
