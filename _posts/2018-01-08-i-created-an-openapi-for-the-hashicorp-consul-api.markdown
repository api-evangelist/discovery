---
published: true
layout: post
title: I Created An OpenAPI For The Hashicorp Consul API
date: 2018-01-08T10:00:00.000Z
tags:
  - API Evangelist
  - Definitions
  - Discovery
  - Clients
  - Federal Government
image: >-
  https://s3.amazonaws.com/kinlane-productions/hashicorp/hashicorp-consul-api-openapi-githbu.png
---
<p><img src="https://s3.amazonaws.com/kinlane-productions/hashicorp/hashicorp-consul-api-openapi-githbu.png" align="right" width="45%" style="padding: 15px;" /></p>I was needing an OpenAPI (fka Swagger) definition for [the Hashicorp Consul API,](https://www.consul.io/api/index.html) so that I could use in a federal government project I'm advising on. We are using the solution for the microservices discovery layer, and I wanted to be able to automate using the Consul API, publish documentation within our project Github, import into Postman across the team, as well as several other aspects of API operations. I'm working to assemble at least a first draft OpenAPI for the entire technology stack we've opted to use for this project.

First thing I did was Google, "Consul API OpenAPI", then "Consul API Swagger", which didn't yield any results. Then I Githubbed "Consul API Swagger", and came across a Github Issue where a user had asked for "[improved API documentation](https://github.com/hashicorp/consul/issues/555)". The resulting response from Hashicorp was, "we just finished a revamp of the API docs and we don't have plans to support Swagger at this time." Demonstrating they really don't understand what OpenAPI (fka Swagger) is, something I'll write about in future stories this week.

One of the users on the thread had created [an API Blueprint for the Consul API, and published the resulting documentation to Apiary](https://consul.docs.apiary.io/). Since I wanted an OpenAPI, instead of an API Blueprint, I headed over to [APIMATIC API Transformer](https://apimatic.io/transformer) to see if I could get the job done. After trying to transform the API Blueprint to OpenAPI 2.0 I got some errors, which forced to me to spend some time this weekend trying to hand-craft / scrape the static API docs and publish my own OpenAPI. The process was so frustrating I ended up pausing the work, and writing two blog posts about my experiences, and then this morning I received an email from the APIMATIC team that they caught the errors, updated the API Blueprint, allowing me to continue transforming it into an OpenAPI definition. Benefits of being the API Evangelist? No, benefits of using APIMATIC!

Anyways, [you can find the resulting OpenAPI on Github](https://github.com/api-stack/hashicorp-consul-api). I will be refining it as I use in my project. Ideally, Hashicorp would take ownership of their own OpenAPI, providing a machine readable API definition that consumers could use in tooling, and other services. However, they are stuck where many other API service providers, API providers, and API consumers are--thinking OpenAPI is still Swagger, which is just about API documentation. ;-( . I try not to let this frustrate me, and will write about it each time I come across, until things change. OpenAPI (fka Swagger) is so much more than just API documentation, and is such an enabler for me as an API consumer when I'm getting up and running with a project. If you are doing APIs, please take the time to understand what it is, it is something that could be the difference between me using our API, or moving on to find another solution. It is that much of a timesaver for me.
