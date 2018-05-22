---
published: true
layout: post
title: An OpenAPI Service Dependency Vendor Extensions
date: 2018-04-02T11:00:00.000Z
tags:
  - API Evangelist
  - Dependencies
  - Discovery
  - Definitions
image: >-
  http://kinlane-productions.s3.amazonaws.com/algorotoscope/builder/filtered/71_113_800_500_0_max_0_-1_-1.jpg
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>I'm working on a healthcare related microservice project, and I'm looking for a way to help developers express their service dependencies within the OpenAPI or some other artifact. At this point I'm feeling like the OpenAPI is the place to articulate this, adding a vendor extension to the specification that can allow for the referencing of one or more other services any particular service is dependent on. Helping make service discovery more machine readable at discovery and runtime.

To help not reinvent the wheel, I am looking at [using the Schema.org Web API type including the extensions put forth by Mike Ralphson and team.](https://apievangelist.com/2018/03/02/thoughts-on-the-schema-org-webapi-type-extension/) I'd like the x-api-dependencies collection to adopt a standardized schema, that was flexible enough to reference different types of other services. I'd like to see the following elements be present for each dependency:

- versions (OPTIONAL array of thing -> Property -> softwareVersion). It is RECOMMENDED that APIs be versioned using [semver]
- entryPoints (OPTIONAL array of Thing -> Intangible -> EntryPoint)
- license (OPTIONAL, CreativeWork or URL) - the license for the design/signature of the API
- transport (enumerated Text: HTTP, HTTPS, SMTP, MQTT, WS, WSS etc)</p>
- apiProtocol (OPTIONAL, enumerated Text: SOAP, GraphQL, gRPC, Hydra, JSON API, XML-RPC, JSON-RPC etc)
- webApiDefinitions (OPTIONAL array of EntryPoints) containing links to machine-readable API definitions
- webApiActions (OPTIONAL array of potential Actions)

Using the Schema.org Web type would allow for a pretty robust way to reference dependencies between services in a machine readable way, that can be indexed, and even visualized in services and tooling. When it comes to evolving and moving forward services, having dependency details baked in by default make a lot of sense, and ideally each dependency definition would have all the details of the dependency, as well as potential contact information, to make sure everyone is connected regarding the service road map. Anytime a service is being deprecated, versioned, or impacted in any way, we have all the dependencies needed to make an educated decision regarding how to progress with the least amount of friction as possible.

I'm going to go ahead and create a draft OpenAPI vendor extension specification for x-service-dependencies, and use [the Schema.org WebAPI type](https://pending.schema.org/WebAPI), complete with [the added extensions](https://webapi-discovery.github.io/rfcs/rfc0001.html#content-types). Once I start using it, and have successfully implemented it for a handful of services I will publish and share a working example. I'm also on the hunt for other examples of how teams are doing this. I'm not looking for code dependency management solutions, I am specifically looking for API dependency management solutions, and how teams are making these dependencies discoverable in a machine readable way. If you know of any interesting approaches, please let me know, I'd like to hear more about it.
