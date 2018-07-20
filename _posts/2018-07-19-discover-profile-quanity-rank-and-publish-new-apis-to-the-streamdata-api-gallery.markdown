---
published: true
layout: post
title: >-
  Discover, Profile, Quantify, Rank, And Publish New APIs To The Streamdata.io
  API Gallery
date: 2018-07-19T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
image: >-
  https://s3.amazonaws.com/kinlane-productions/streamdata-api-gallery/streamdata-io-api-gallery-entities.png
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>About 60% of my work these days is building upon the last five years of my [API Stack research](http://theapistack.com/), with a focus on building out the [Streamdata.io API Gallery](http://api.gallery.streamdata.io/). We are fine tuning our approach for discovering new API-driven resources from across the landscape, while also profiling, quantifying, ranking, and publishing to the Streamdata.io API Gallery, The API Stack, and potentially other locations like the Postman Network, APIs.Guru, and other API discovery destinations I am working with. Helping us make sense of the increasingly noisy API landscape, while identifying the most valuable resources, and then profiling them to help reduce friction when it comes to potentially on-boarding and streaming data from each resource.

### Discover New API-Driven Resources
Finding new APIs isn't too difficult, you just have to Google for them. Finding new APIs in an automated way, with minimum human interaction becomes a little more difficult, but there are some proven ways to get the job done. There is no single place to go find new APIs, so I've refined a list of common place I use to discover new APIs:

- **Search Engines** - Using search engine APIs to look for APIs based upon the vocabulary we've developed.
- **Github** - Github provides a wealth of signals when it comes to APIs, and we use the Github API to discover interesting sources using our vocabulary.
- **Stack Overflow** - Using the Stack Exchange API, we are able to keep an eye out for developers talking about different types of interesting APIs.
- **Twitter** - The social network still provides some interesting signals when it comes to discussions about interesting APis.
- **Reddit** - There are many developers who still use Reddit to discuss technical topics, and ask questions about the APIs they are using.

Using the topic and entity vocabulary we've been developing, we can automate the discovery of new APIs across these sources using their APIs. Helping track on signals for the existing APIs we are keeping an eye on, but also quickly identify new APIs that we can add to the queue. Giving us the URL of companies, organizations, institutions, and government agencies who are doing interesting things with APIs.

### Profile New Domains That Come In
Our API discovery engine produces a wealth of URLs for us to look at to understand the potential for new data, content, and algorithmic API resources. Our profiling process begins with a single URL, which we then use as the seed for a series of automated jobs that help us understand what an entity is all about:

- **Description** - Develop the most informative and concise description of what an entity does, including a set of rich meta tags.
- **Developer** - Identify where their developer and API program exists, for quantifying what they do.
- **Blog** - Find their blog, and supporting RSS feed so we can tune into what they are saying.
- **Press** - Also find their press section, and RSS feed so we can tune into the press about them.
- **Twitter** - Find their Twitter account so that we can tune into their social stream.
- **LinkedIn** - Find their LinkedIn account so that we can tune into their social stream.
- **Github** - Find their Github account so we can find more about what they are building.
- **Contact** - Establish a way to contact each entity, in case we have any questions or need support.
- **Other** - Identify other common building blocks like support, pricing, and terms of services that helps us understand what is going on.

The profiling process provides us with a framework to understand what an entity is all about, and where they fit into the bigger picture of the API landscape. Most of the sources of information we profile have some sort of machine readable component, allowing us to further quantify the entity, and better understand the value they bring to the table.

### Quantify Each Entity
Next up we want to quantify each of the entities we've profiled, to give us a better understanding of the scope of their operations, and further define where they fit into the API landscape. We are looking for as much detail about what they are up to so we can know where we should be investing our time and energy reaching out and developing deeper relationships.

- **API** - We profile their APIs, generating an OpenAPI definition that describes the entire surface area of their APIs.
- **Applications** - Define approximately how many applications are running on an API, and how many developers are actively using.
- **Blog** - Pull all their blog posts, including the history, and actively pull on daily basis.
- **Press** - Pull all their press releases, including the history, and actively pull on daily basis.
- **Twitter** - Pull all their Tweets and mentions, including the history, and actively pull on daily basis.
- **Github** - Pull all their repos, stars, followers, and commit history, understand more about what they are building.
- **Other** - Pull other relevant signals from Reddit, Stack Overflow, AngelList, CrunchBase, SEC, Alexa Rank, ClearBit, and other important platform signals.

By pulling all the relevant signals for any entity we've profiled, we can better understand the scope of their operations, and assess the reach of their network. Helping us further quantity the value and opportunity that exists with each entity we are profiling, before we spend much more time on integrating.

### Ranking Each Entity
After we've profiled and quantify an entity, we like to rank them, and put them into different buckets, so that we can prioritize which ones we reach out to, and which ones we invest more resources in monitoring, tracking, and integrating with. We currently rank them on a handful of criteria, using our own vocabulary and ranking formula.

- **Provider Signals** - Rank their activity and relevance based upon signals within their control.
- **Community Signals** - Rank their activity based upon signals the community generates about them.
- **Analyst Signals** - Rank their activity based upon signals from the analyst community.
- **StreamRank** - Rank the activity of their data, content, and API-driven resources.
- **Topically** - Understand the value of the activity based upon the topics that are available.

Our ranking of each entity gives us an overall score derived from several different dimensions.  Helping us understand the scope, as well as the potential value for each set of APIs, allowing us to further prioritize which entities we invest more time and resources into, maximizing our efforts when it comes to deeper, more technical integrations, and streaming of data into any potential data lake.

### Publishing APIs To The Gallery
Once an entity has been profiled, quantified, and ranked, we publish the profile to the gallery for discovery. Some of the more interesting APIs we hold back on a little bit, and share with partners and customers who are looking for interesting data sources via landscape analysis reports, but once we are ready we publish the entity to a handful of potential locations:

- **[Streamdata.io API Gallery](http://api.gallery.streamdata.io/)** - The distributed gallery owned and operated by Streamdata.io
- **[The API Stack](http://theapistack.com)** - My own research area for profiling APIs that I've run for five years.
- **[APIs.guru](https://apis.guru/)** - We are working on the best way to submit OpenAPI definitions to our friends here.
- **[Postman Network](https://www.getpostman.com/api-network/)** - For APIs that we validate, and generate working Postman Collections.
- **[APIs.io](http://apis.io)** - Publishing to the machine readable API search engine for indexing.
- Other - We have a network of other aggregation, discovery, and related sites we are working with.

Because each entity is published to its own Github repository, with an [APIs.json](http://apisjson.org), [OpenAPI](https://www.openapis.org/), and Postman Collection defining its operations, once published, each entity becomes forkable. Making each gallery entry something anyone can fork, download and directly integrate into their existing systems and applications.

### Keep Discovering, Profiling, Quantifying, and Publishing
This work is never ending. We'll just keep discovery, profiling, quantifying, and publishing useful APIs to the gallery, and beyond. Since we benchmark APIs, we'll be monitoring APIs that go away and we'll archive them in the listings. We'll also be actively quantifying each entity, by tuning into their blogs, press, Twitter, and Github accounts looking for interesting activity about what they are doing. Keeping our finger on the pulse of what each entity is up to, as well as what the scope and activity within their community is all about.

This project began as an API Evangelist project to understand how to keep up with the changing API space, and then evolved into a landscape analysis and lead generation tool for Streamdata.io, but now has become an engine for identifying valuable data and content resources. Providing a powerful discover engine for finding valuable data sources, but when combined with what Streamdata.io does, it also allows you to tune into the most important signals across all these entities being profiled, and stream the resulting data and signals into data lakes within your own existing cloud infrastructure, for use in training machine learning models, dashboards, and other relevant applications.
