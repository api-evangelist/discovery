---
title: Publishing Your API In The AWS Marketplace
date: 2017-06-16 13:00:00 Z
tags:
- Marketplace
- Discovery
- Deployment
- Documents
- API Evangelist
image: https://s3.amazonaws.com/kinlane-productions/box/box-platform-cloud-content-management-apis-aws-marketplace.png
---

<p><img src="https://s3.amazonaws.com/kinlane-productions/box/box-platform-cloud-content-management-apis-aws-marketplace.png" align="right" width="40%" style="padding: 15px;" /></p>
I've been watching the conversation around how APIs are discovered since 2010 and I ave been working to understand where things might be going beyond ProgrammableWeb, to the Mashape Marketplace, and even investing in my own [API discovery format APIs.json](http://apisjson.org). It is a layer of the API space that feels very bipolar to me, with highs and lows, and a lot of meh in the middle. I do not claim to have "the solution" when it comes to API discovery and prefer just watching what is happening, and contributing where I can.

A number interesting signals for API deployment, as well as API discovery,  are coming out of Amazon Marketplace lately. I find myself keeping a closer eye on [the almost 350 API related solutions in the marketplace](https://aws.amazon.com/marketplace/search/results?searchTerms=API&page=1&ref_=nav_search_box), and today [I'm specifically taking notice of the Box API availability in the AWS Marketplace](https://aws.amazon.com/marketplace/pp/B06XY1XHGV/?ref=_ptnr_awsblg). I find this marketplace approach to not just API discovery via an API marketplace, but also API deployment very interesting. AWS isn't just a marketplace of APIs, where you find what you need and integrate directly with that provider. It is where you find your API(s) and then spin up an instance within your AWS infrastructure that facilitates that API integration--a significant shift.

I'm interested in the coupling between API providers and AWS. AWS and Box have entered into a partnership, but their approach provides a possible blueprint for how this approach to API integration and deployment can scale. How tightly coupled each API provider chooses to be, looser (proxy calling the API), or tighter (deploying API as AMI), will vary from implementation to implementation, but the model is there. The Box AWS Marketplace instance dependencies on the Box platform aren't evident to me, but I'm sure they can easily be quantified, and something I can get other API providers to make sure and articulate when publishing their API solutions to AWS Marketplace.

[AWS is moving towards earlier visions I've had of selling wholesale editions of an API](http://apievangelist.com/2014/01/30/what-will-it-take-to-sell-my-api-as-a-wholesale-resource/), helping you [manage the on-premise and private label API contracts for your platform](http://apievangelist.com/2017/04/25/your-wholesale-api-for-sale-in-the-major-api-marketplaces/), and [helping you explore the economics of providing wholesale editions of your platforms](http://apievangelist.com/2017/01/03/exploring-the-economics-of-wholesale-and-retail-algorithmic-apis/), either tightly or loosely coupled with AWS infrastructure. Decompiling your API platform into small deployable units of value that can be deployed within a customer's existing AWS infrastructure, seamlessly integrating with existing AWS services.

[I like where Box is going with their AWS partnership](https://developer.box.com/page/box-platform-and-aws). I like how it is pushing forward the API conversation when it comes to using AWS infrastructure, and specifically the marketplace. I'll keep an eye on where things are going. Box seems to be making all the right moves lately [by going all in on the OpenAPI Spec](http://apievangelist.com/2017/05/22/box-goes-all-in-on-openapi/), and decompiling their API platform making it deployable and manageable from the cloud, [but also much more modular and usable in a serverless way](http://apievangelist.com/2017/06/16/serverless-blueprints-for-your-api/). Providing us all with one possible blueprint for how we handle the technology and business of our API operations in the clouds.