---
published: true
layout: post
title: How Should We Be Organizing All Of Our Microservices?
date: 2018-05-31T09:00:00.000Z
tags:
  - API Evangelist
  - Design
  - Discovery
  - Microservices
image: >-
  https://s3.amazonaws.com/kinlane-productions/algo-rotoscope/stories/containership_deep_connections.jpg
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>A question I get regularly in my API workshops is, "how should we be organizing all of our microservices?" To which I always recommend they tune into what [the API Academy team is up to](http://www.apiacademy.co/), and then I dance around give a long winded answer about how hard it is for me to answer that. I think in response, I'm going to start asking for a complete org chart for their operations, list of all their database schema, and a list of all their clients and the industries they are operating in. It will still be a journey for them, or me to answer that question, but maybe this response will help them understand the scope of what they are asking.

I wish I could provide simple answers for folks when it came to how they should be naming, grouping, and organizing their microservices. I just don't have enough knowledge about their organization, clients, and the domains in which they operate to provide a simple answer. It is another one of those API journeys an organization will have to embark on, and find their own way forward. It would take so much time for me to get to know an organization, its culture, resources, and how they are being put to use, I hesitate to even provide any advice, short of pointing them to what the API Academy team publishes books, and provides talks on. They are the only guidance I know that goes beyond the hyped of definition of microservices, and actually gets at the root of how you do it within specific domains, and tackle the cultural side of the conversation.

A significant portion of my workshops lately have been about helping groups think about delivering services using a consistent API lifecycle, and showing them the potential for API governance if they can achieve this consistency. Clearly I need to back up a bit, and address some of the prep work involved with making sure they have an organizational chart, all of the schema they can possibly bring to the table, existing architecture and services in play, as well as much detail on the clients, industries, and domains in which they operate. Most of my workshops I'm going in blind, not knowing who will all be there, but I think I need a section dedicated to the business side of doing microservices, before I ever begin talking about the technical details of delivering microservices, otherwise I will keep getting questions like this that I can't answer.

Another area that is picking up momentum for me in these discussions is a symptom of of the lack of API discovery, and directly related to the other areas I just mentioned. You need to be able to deliver APIs along a lifecycle, but more importantly you need to be able to find the services, schema, and people behind them, as well as coherently speak to who will be consuming them. Without a comprehensive discovery, and the ability to understand all of these dependencies, organizations will never be able to find the success they desire with microservices. They won't be any better than the monolithic way many organizations have been doing things to date, it will just be much more distributed complexity, which will achieve the same results as the monolithic systems that are in place today.
