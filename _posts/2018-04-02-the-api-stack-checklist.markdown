---
published: true
layout: post
title: The API Stack Profiling Checklist
date: 2018-04-02T09:00:00.000Z
tags:
  - API Evangelist
  - Definitions
  - Discovery
  - Github
image: 'https://s3.amazonaws.com/kinlane-productions/bw-icons/bw-stacks.png'
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>[I just finished a narrative around my API Stack profiling](http://apievangelist.com/2018/04/02/my-api-stack-profiling-process/), telling the entire story around the profiling of APIs for inclusion in the stack. To help encourage folks to get involved, I wanted to help distill down the process into a single checklist that could be implemented by anyone.

**The Github Base**
Everything begins as a Github repository, and it can existing in any user or organization. Once ready, I can fork and publish as part of the API stack, or sync with an existing repository project.

- **Create Repo** - Create a single repository with the name of the API provider in plain language.
- **Create README** - Add a README for the project, articulating who the target is and the author.

**OpenAPI Definition**
Profiling the API surface area using OpenAPI, providing a definition of the request and response structure for all APIs. [Head over to their repository if you need to learn more about OpenAPI](https://github.com/OAI/OpenAPI-Specification). Ideally, there is an existing OpenAPI you can start with, or other machine readable definition you can use as base--look around within their developer portal, because sometimes you can find an existing definition to start with. Next look on Github, as you never know where there might be something existing that will save you time an energy. However you approach, I'm looking for complete details on the following:

- **info** - Provide as much information about the API.
- **host** - Provide a host, or variables describing host.
- **basePath** - Document the basePath for the API.
- **schemes** - Provide any schemes that the API uses.
- **produces** - Document which media types the API uses.
- **paths** - Detail the paths including methods, parameters, enums, responses, and tags.
- **definitions** - Provide schema definitions used in all requests and responses.

To help accomplish this, I often will scrape, and use any existing artifacts I can possible find. Then you just have to roll up your sleeves and begin copying and pasting from the existing API documentation, until you have a complete definition. There is never any definitive way to make sure you've profiled the entire API, but do your best to profile what is available, including all the detail the provider as shared. There will always be more that we can do later, as the API gets used more, and integrated by more providers and consumers.

**Postman Collection**
Once you have an OpenAPI definition available for the API, import it into Postman. Make sure you have a key, and the relevant authentication environment settings you need. Then begin making API calls to each individual API path, making sure your API definition is as complete as it possibly can. This can be the quickest, or the most time consuming of the profiling, depending on the complexity and design of the API. The goal is to certify each API path, and make sure it truly reflects what has been documented. Once you are done, export a Postman Collection for the API, complimenting the existing OpenAPI, but with a more run-time ready API definiton.

**Merging the Two Definitions**
Depending on how many changes occurred within the Postman portion of the profiling you will have to sync things up with the OpenAPI. Sometimes it is a matter of making minor adjustments, sometimes you are better off generating an entirely new OpenAPI from the Postman Collection using [APIMATIC's API Transformer](https://apimatic.io/transformer). The goal is to make sure the OpenAPI and Postman are in sync, and working the same way as expected. Once they are in sync they can uploaded to the Github repository for the project.

**Managing the Unkown Unknowns**
There will be a lot of unknowns along the way. A lot of compromises, and shortcuts that can be taken. Not every definition will be perfect, and sometimes it will require making multiple definitions because of the way an API provider has designed their API and used multiple subdomains. Document it all as Github issues in the repository. Use the Github issues for each API as the journal for what happened, and where you document any open questions, or unfinished dwork. Making the repository the central truth for the API definition, as well as the conversation around the profiling process.

**Providing Central APIs.json Index**
The final step of the process is to create an APIs.json index for the API. [You can find a sample one over at the specification website](http://apisjson.org/format.html). When I profile an API using APIs.json I am always looking for as much detail as I possibly can, but for the purposes of API Stack profiling, I'm looking for these essential building blocks:

- **Website** - The primary website for an entity owning the API.
- **Portal** - The URL to the developer portal for an API.
- **Documentation** - The direct link to the API documentation.
- **OpenAPI** - The link to the OpenAPI I created on Github.
- **Postman** - The link to the Postman Collection I created on Github.
- **Sign Up** - Where do you sign up for an API.
- **Pricing** - A link to the plans, tiers, and pricing for an API.
- **Terms of Service** - A URL to the terms of service for an API.
- **Twitter** - The Twitter account for the API provider – ideally, API specific.
- **Github** - The Github account or organization for the API provider.

If you create multiple OpenAPIs, and Postman Collections, you can add an entry for each API. If you break a larger API provider into several entity provider repositories, you can link them together using the include property of the APIs.json file. I know the name of the specification is JSON, but feel free to do them in YAML if you feel more comfortable--I do. ;-) The goal of the APIs.json is to provide a complete profile of the API operations, going beyond what OpenAPI and Postman Collections deliver.

**Including In The API Stack**
You should keep all your work in your own Github organization or user account. Once you've created a repository you would like to include in the API Stack, and syndicate the work to the Streamdata.io API Gallery, APIs.io, APIs.guru, Postman Network, and others, then [just submit as a Github issue on the main repository](https://github.com/api-stack/api-stack/issues). I'm still working on the details of how to keep repositories in sync with contributors, then reward and recognize them for work their work, but for now I'm relying on Github to track all contributions, and we'll figure this part out later. The API Stack is just the workbench for all of this, and I'm using it as a place to merge the work of many partners, from many sources, and then work to sensibly syndicate out validated API profiles to all the partner galleries, directories, and search engines.
