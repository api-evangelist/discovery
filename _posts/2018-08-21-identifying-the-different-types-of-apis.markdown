---
published: true
layout: post
title: Identifying The Different Types Of APIs
date: 2018-08-21T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
image: >-
  http://kinlane-productions.s3.amazonaws.com/algorotoscope/builder/filtered/97_193_800_500_0_max_0_-5_-1.jpg
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>APIs come in many shapes and sizes. Even when APIs may share a common resource, the likelihood that they are similar in functional, will be slim. Even after eight years of studying APIs, I still struggle with understanding the differences, and putting APIs into common buckets. Think of the differences between two image APIs like Flickr and Instagram, but then also think about the difference between Twitter and Twilio--the differences are many, and a challenge to articulate.

I'm pushing forward [my API Stack](http://theapistack.com/), and [API Gallery work](http://api.gallery.streamdata.io/), and I'm needing to better organize APIs into meaningful groups that I can add to the search functionality for each of API discovery services. To help me establish a handful of new buckets, I'm thinking more critically about the different types of API functionality I'm coming across, establishing seven new buckets:

- **General Data** - You can get at data across the platform, users, and resources.
- **Relative Data** - You can get at data that is relative to a user, company, or specific account.
- **Static Data** - The data doesn't change too often, and will always remain fairly constant.
- **Evolving Data** - The data changes on a regular basis, providing a reason to come back often.
- **Historical Data** - Provides access to historical data, going back an X number of. years.
- **Service** - The API is offered as a service, or is provided to extend a specific service.
- **Algorithmic** - The API provides some sort of algorithmic functionality like ML, or otherwise.

Understanding the type of data an API provides is important to the work I'm doing. Streamdata.io caters to the needs of financial organizations, and they are looking for data to help them with their investment portfolio, but also have very particular opinions around the type of data they want. This first version of my API type list is heavily weighted towards data, but as I evolve in my thinking, I'm guessing the service and algorithmic buckets will expand and evolve as well.

The APIs I am cataloging within this work spring fit into one or many of these buckets. They are meant to transcend the resource being made available, and the provider behind the service. I want to be able to search, filter, and organize APIs across many of the usual characteristics we use to track on. I'm wanting to go beyond the obvious resource focused characteristics, and move beyond the technology being applied. I'm looking to understand what you can do with an API, and be able to stack hundreds, or thousands of similar APIs side by side, and provide a new view of the landscape.
