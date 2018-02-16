---
published: true
layout: post
title: >-
  The Importance of the API Path Summary, Description, and Tags in an OpenAPI
  Definition
date: 2018-02-15T13:00:00.000Z
tags:
  - API Evangelist
  - Real Time
  - Event-Driven
  - Definitions
  - Discovery
image: >-
  https://s3.amazonaws.com/kinlane-productions/algo-rotoscope/stories-new/15_190_800_500_0_max_0_1_-5.jpg
---
<p><img src="https://s3.amazonaws.com/kinlane-productions/algo-rotoscope/stories-new/15_190_800_500_0_max_0_1_-5.jpg" align="right" width="45%" style="padding: 15px;" /></p>I am creating a lot of OpenAPI definitions right now. [Streamdata.io](http://apis.how/streamdata.io) is investing in me pushing forward my [API Stack](http://theapistack.com) work, where I profile API using OpenAPI, and index their operations using APIs.json. From the resulting indexes, we are building out the [Streamdata.io API Gallery](https://streamdata.io/developers/api-gallery/), which shows the possibilities of providing streaming APIs on top of existing web APIs available across the landscape. The OpenAPI definitions I'm creating aren't 100% complete, but they are "good enough" for what we are needing to do with them, and are allowing me to catalog a variety of interesting APIs, and automate the proxying of them using Streamdata.io.

I'm finding the most important part of doing this work is making sure there is a rich summary, description, and set of tags for each API. While the actual path, parameters, and security definitions are crucial to programmatically executing the API, the summary, description, and tags are essential so that I can understand what the API does, and make it discoverable. As I list out different areas of my API Stack research, like [the financial market data APIs](http://market.data.apievangelist.com/), it is critical that I have a title, and description for each provider, but the summary, description, and tags are what provides the heart of the index for what is possible with each API.

When designing an API, as a developer, I tend to just fly through writing summary, descriptions, and tags for my APIs. I'm focused on the technical details, not this "fluff". However, this represents one of the biggest disconnects in the API lifecycle, where the developer is so absorbed with the technical details, we forget, neglect, or just don't are to articulate what we are doing to other humans. The summary, description, and tags are the outlines in the API contract we are providing. These details are much more than just the fluff for the API documentation. They actually describe the value being delivered, and allow this value to be communicated, and discovered throughout the life of an API--they are extremely important.

As I'm doing this work, I realize just how important these descriptions and tags are to the future of these APIs. Whenever it makes sense I'm translating these APIs into streaming APIs, and I'm taking the tags I've created and using them to define the events, topics, and messages that are being transacted via the API I'm profiling. I'm quantifying how real time these APIs are, and mapping out the meaningful events that are occurring. This represents the event-driven shift we are seeing emerge across the API landscape in 2018. However, I'm doing this on top of API providers who may not be aware of this shift in how the business of APIs is getting done, and are just working hard on their current request / response API strategy. These summaries, descriptions, and tags, represent how we are going to begin mapping out the future that is happening around them, and begin to craft a road map that they can use to understand how they can keep evolving, and remain competitive.
