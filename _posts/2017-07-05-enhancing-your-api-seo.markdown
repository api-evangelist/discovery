---
published: true
layout: post
title: 'Enhancing Your API SEO'
date: 2017-07-05T16:00:00.000Z
tags:
- API Evangelist
- Definitions
- Discovery
- Design
- SEO
image: 'https://s3.amazonaws.com/kinlane-productions/api-portal/enhance-seo-and-interoperability.png'
---
<p><a href="https://api-platform.com/"><img src="https://s3.amazonaws.com/kinlane-productions/api-portal/enhance-seo-and-interoperability.png" align="right" width="40%" style="padding: 15px;" /></a></p>One question I'm regularly getting from my readers is regarding how you can increase the search engine optimization (SEO) for your APIs--yes, API SEO (acronyms rule)! While we should be investing in API discoverability by embracing hypermedia early on, I feel in its absence we should also be indexing our entire API operations with [APIs.json](http://apisjson.org), and making sure we describe individual APIs using [OpenAPI](http://openapis.org), the world of web APIs is still very hitched to the web, making SEO very relevant when it comes to API discoverability.

While I was diving deeper into "[The API Platform](https://api-platform.com/)", a VERY forward leaning API deployment and management solution, [I was pleased to see another mention of API SEO using JSON-LD](https://api-platform.com/) (scroll down on the page). While I wish every API would adopt JSON-LD for their overall design, I feel we are going to have to piece SEO and discoverability together for our sites, as The API platform demonstrates. They provide a nice example of how you can paste a JSON-LD script into the the page of your API documentation, helping amplify some of the meaning and intent behind your API using JSON-LD + Schema.org.

[I have been thinking about Schema.org's relationship to API discovery for some time now](http://apievangelist.com/2017/03/14/thinking-about-schemaorgs-relationship-to-api-discovery/), which is something I'm hoping to get more time to invest in further during 2017. I'd like to see Schema.org get more baked into API design, deployment, and documentation, as well as JSON-LD as part of underlying schema. To help build a bridge from where we are at, to where we need to be going, I'm going to explore how I can leverage OpenAPI tags to help autogenerate JSON-LD Schema.org tags as part of API documentation. While I'd love for everyone to just get the benefits of JSON-LD, I'm afraid many folks won't have the bandwidth, and could use an assist from the API documentation solutions they are already using--making APIs more SEO friendly by default.

If you are starting a new API I recommend playing with "[The API Platform](https://api-platform.com/)", as you get the benefits of Schema.org, JSON-LD, and MANY other SIGNIFICANT API concepts by default. Out of all of the API frameworks I've evaluated as part of my [API deployment research](http://deployment.apievangelist.com), "The API Platform" is by far the most advanced when it comes to leading by example, and enabling healthy API design practices by default--something that will continue to bring benefits across all stops along the life cycle if you put to work in your operations.
