---
published: true
layout: post
title: Cloud Marketplace Becoming The New Wholesale API Discovery Platform
date: 2017-09-08T09:00:00.000Z
tags:
  - API Evangelist
  - Marketplace
  - Discovery
  - Wholesale
  - Cloud
image: 'https://s3.amazonaws.com/kinlane-productions/aws/aws-marketplace.png'
---
<p><img src="https://s3.amazonaws.com/kinlane-productions/aws/aws-marketplace.png" align="right" width="40%" style="padding: 15px;" /></p>I'm keeping an eye on [the AWS Marketplace](https://aws.amazon.com/marketplace/), as well as what Azure and Google are up to, looking for growing signs of anything API. I'd have to say that, while Azure is in close second, that AWS is growing faster when it comes to the availability of APIs in their marketplace. What I find interesting about this growth is it isn't just about the cloud, it is about wholesale APIs, and as it grows it quickly becomes about API discovery as well.

The API conversation on AWS Marketplace has for a while been dominated by API service providers, and specifically the API management providers who have pioneered the space:

- [3Scale](https://aws.amazon.com/marketplace/pp/B00QHIY9OW?qid=1504806402998&sr=0-7&ref_=srh_res_product_title)
- [CA](https://aws.amazon.com/marketplace/pp/B00VGV1HYA?qid=1504806402998&sr=0-9&ref_=srh_res_product_title)
- [WSO2](https://aws.amazon.com/marketplace/pp/B00PD1KTHU?qid=1504806443214&sr=0-16&ref_=srh_res_product_title)
- [Akana](https://aws.amazon.com/marketplace/pp/B01C4JFD4W?qid=1504806443214&sr=0-13&ref_=srh_res_product_title)
- [Strong Loop](https://aws.amazon.com/marketplace/seller-profile?id=12b4567a-9d6f-4aa9-8ac1-ec81dfc6f65a)

After management, we see some of the familiar faces from the API space doing API aggregation, database to API deployment, security, integration platform as a service (iPaaS), real time, logging, authentication, and monitoring with Runscope.

- [Cloud Elements](https://aws.amazon.com/marketplace/seller-profile?id=94ee7aa2-9b70-4257-a216-cd84b15360b6) (Aggregation)
- [SlashDB](https://aws.amazon.com/marketplace/seller-profile?id=a80f81b0-f5a7-4986-8518-4c7983839df2) (Database)
- [Runscope](https://aws.amazon.com/marketplace/seller-profile?id=be64f318-a43d-4680-b616-70cdba28048f) (Monitoring)
- [Zapier](https://aws.amazon.com/marketplace/seller-profile?id=eaae8e10-662d-4b01-8cf0-ce911795cefby) (iPaaS)
- [Peach API Security](https://aws.amazon.com/marketplace/seller-profile?id=bb1ddfd2-7171-4f3f-aaf5-483a076a15df) (Security)
- [Streamdata](https://aws.amazon.com/marketplace/seller-profile?id=1bbca7b6-ff68-4779-abe0-45a796ff298d) (Real Time)
- [Auth0](https://aws.amazon.com/marketplace/seller-profile?id=40b06c9b-6c89-4150-8e76-00a57426f8fe) (Authentication)
- [Okta](https://aws.amazon.com/marketplace/seller-profile?id=4d82d3d5-c3bb-48f5-964c-f370adb08482) (Authentication)
- [LogEntries](https://aws.amazon.com/marketplace/seller-profile?id=0c9f4b82-f870-4972-b027-9164cc100097) (Logging)

All rounding off the API lifecycle, providing a growing number of tools that API provides can deploy into their existing AWS infrastructure to help manage API operations. This is how API providers should be operating, offering retail SaaS versions of their APIs, but also cloud deployable, wholesale versions of their offerings that run in any cloud, not just AWS.

The portion of this aspect of API operations that is capturing my attention is the individual API providers are moving to offer their API up via AWS marketplace, moving things beyond just API service providers selling their tools to the space. Most notably are the API rockstars from the space:

- [Stripe](https://aws.amazon.com/marketplace/seller-profile?id=cbdb3b66-b0ad-49f9-8e00-7cfed4f5dd6c)
- [Twilio](https://aws.amazon.com/marketplace/seller-profile?id=818fd455-b47c-4a62-9e3d-1a346e0f5e0e)
- [Sendgrid](https://aws.amazon.com/marketplace/seller-profile?id=a9e53967-0ebd-413a-b857-482097546806)

After these well known API providers there are a handful of other companies offering up wholesale editions of their APIs, so that potential customers can bake into their existing infrastructure, alongside their own APIs, or possibly other 3rd party APIs.

- [Pitney Bowes](https://aws.amazon.com/marketplace/seller-profile?id=75a7e002-c13e-48fb-94b3-a05331a41ade)
- [Docomo](https://aws.amazon.com/marketplace/seller-profile?id=3581ba71-392f-4668-8579-f3e5d1418635)
- [OpenShot](https://aws.amazon.com/marketplace/seller-profile?id=6e712093-4d32-4341-8119-9e9ddfaa4b7c)
- [Valtira](https://aws.amazon.com/marketplace/seller-profile?id=182a3530-4b66-470c-aaa0-8eea59631d17)
- [Twinword](https://aws.amazon.com/marketplace/seller-profile?id=1e61d40e-23ef-40de-ba11-62ba339cba9b)
- [PokitDok](https://aws.amazon.com/marketplace/seller-profile?id=1e8de6c6-dff1-45d0-886f-3c24f27214c1)
- [Segment.io](https://aws.amazon.com/marketplace/seller-profile?id=a6112a2b-f363-47d8-9d13-5cd90c3f082e)
- [BigML](https://aws.amazon.com/marketplace/seller-profile?id=11eb064d-0d54-48ff-8348-787004609401)
- [Diffbot](https://aws.amazon.com/marketplace/seller-profile?id=6b589746-c296-48fd-8509-63eb18c81f88)

These APIs are offering a variety of services but real quick I noticed location, machine learning, video editing, PDFs, health care, payments, sms, and other API driven solutions. It is a pretty impressive start to what I see as the future of API discovery and deployment, as well as any other stop along the lifecycle with all the API service providers offering their warez in the marketplace.

I'm going to setup a monitoring script to alert me of any new API focused additions to the AWS marketplace, using of course, the [AWS Marketplace API](https://aws.amazon.com/documentation/marketplace/). I've seen enough growth here to warrant the extra work, and added monitoring channel. I'm feeling like this will grow beyond my earlier thoughts about wholesale API deployment, and potentially pushing forward the API discovery conversation, and changing how we will be finding the APIs we use across our infrastructure. I will also keep an eye on Azure and Google in this area, as well as startup players like [Algorithmia](http://algorithmia.com) who are specializing in areas like machine learning and artificial intelligence.
