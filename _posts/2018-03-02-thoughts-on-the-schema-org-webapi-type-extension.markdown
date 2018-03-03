---
published: true
layout: post
title: Thoughts On The Schema.Org WebAPI Type Extension
date: 2018-03-02T09:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Definitions
  - Schema.org
  - Protocols
image: 'https://s3.amazonaws.com/kinlane-productions/schema-org/schema-org.png'
---
<p><img src="{{ page.image }}" width="45%" align="right" style="padding: 15px;" /></p>I'm putting some thought into [the Schema.Org WebAPI Type Extension proposal](https://webapi-discovery.github.io/rfcs/rfc0001.html#content-types) by Mike Ralphson (Mermade Software) and Ivan Goncharov (APIs.guru), to "facilitate better automatic discovery of WebAPIs and associated machine and human-readable documentation". It's an interesting evolution in how we define APIs, in terms of API discovery, but I would also add potentially at "execute time".

Here is what a base WebAPI type schema could look like:

```{
  "@context": "http://schema.org/",
  "@type": "WebAPI",
  "name": "Google Knowledge Graph Search API",
  "description": "The Knowledge Graph Search API lets you find entities in the Google Knowledge Graph. The API uses standard schema.org types and is compliant with the JSON-LD specification.",
  "documentation": "https://developers.google.com/knowledge-graph/",
  "termsOfService": "https://developers.google.com/knowledge-graph/terms",
  "provider": {
    "@type": "Organization",
    "name": "Google Inc."
  }
}```

Then the proposed extensions could include the following:

- **versions** (OPTIONAL array of [thing](https://schema.org/Thing) -> [Property](http://meta.schema.org/Property) -> [softwareVersion](http://schema.org/softwareVersion)). It is RECOMMENDED that APIs be versioned using [semver]
- **entryPoints** (OPTIONAL array of [Thing](https://schema.org/Thing) -> [Intangible](https://schema.org/Intangible) -> [EntryPoint](https://schema.org/EntryPoint))
- **license** (OPTIONAL, [CreativeWork](http://schema.org/CreativeWork) or [URL](http://schema.org/URL)) - the license for the design/signature of the API
- **transport** (enumerated [Text](http://schema.org/Text): HTTP, HTTPS, SMTP,  MQTT, WS, WSS etc)</p>
- **apiProtocol** (OPTIONAL, enumerated [Text](http://schema.org/Text):  SOAP, GraphQL, gRPC, Hydra, JSON API, XML-RPC, JSON-RPC etc)
- **webApiDefinitions** (OPTIONAL array of [EntryPoints](http://schema.org/EntryPoint)) containing links to <a data-link-type="dfn" href="#machine-readable-api-definition" id="ref-for-machine-readable-api-definition-1">machine-readable API definition</a>s
- **webApiActions** (OPTIONAL array of potential [Actions](http://schema.org/Action))

The webApiDefinitions (EntryPoint) contentType property contains a reference to one of the following conten types:

- **OpenAPI / Swagger in JSON** - application/openapi+json or application/x-openapi+json
- **OpenAPI / Swagger in YAML** - application/openapi
- **RAML** - application/raml+yaml
- **API Blueprint in markdown** - text/vnd.apiblueprint
- **API Blueprint parsed in JSON** - application/vnd.refract.parse-result+json
- **API Blueprint parsed in YAML** - application/vnd.refract.parse-result+yaml

Then the webApiActions property brings a handful of actions to the table, with the following being suggested:

- **apiAuthentication** - Links to a resource detailing authentication requirements. Note this is a human-readable resource, not an authentication endpoint
- **apiClientRegistration** - Links to a resource where a client may register to use the API
- **apiConsole** - Links to an interactive console where API calls may be tested
- **apiPayment** - Links to a resource detailing pricing details of the API

I fully support extending the Schema.org WebAPI vocabulary in this way. It adds all the bindings needed to make the WebAPI type executable at runtime, as well as it states at discovery time. I like the transport and protocol additions, helping ensure the WebAPI vocabulary is as robust as it possibly can. webApiDefinitions provides all the technical details regarding the surface area of the API we need to actually engage with it at runtime, and webApiActions begins to get at some of the business of APIs friction that exists at runtime. Making for an interesting vocabulary that can be used to describe web APIs, which also becomes more actionable by providing everything you need to get up and running.

The suggestions are well thought out and complete. If I was to add any elements, I'd say it also needs a support link. There will be contact information embedded within the API definitions, but having a direct link along with registration, documentation, terms of service, authentication, and payment would help out significantly. I would say that the content type to transport and protocol coverage is deficient a bit. Meaning you have SOAP, but not referencing WSDL. I know that there isn't a direct definition covering every transport and protocol, but eventually it should be as comprehensive as it can. (ie. adding AsyncAPI, etc. in the future)

The WebAPI type extensions reflect what we have been trying to push forward with our [APIs.json](http://apisjson.org) work, but comes at it from a different direction. I feel there are significant benefits to having all these details as part of the Schema.org vocabulary, expanding on what you can describe in a common way. Which can then also be used as part of each APIs requests, responses, and messages. I don't see APIs.json as part of a formal vocabulary like this--I see it more as the agile format for indexing APIs that exist, and building versatile collections of APIs which could also contain a WebAPI reference.

I wish I had more constructive criticism or feedback, but I think it is a great first draft of suggestions for evolving the WebAPI type. There are other webApiActions properties I'd like to see based upon my APIs.json work, but I think this represents an excellent first step. There will be some fuzziness between documentation and apiConsole, as well as gaps in actionability between apiAuthentication, and apiClientRegistration--thinks like application creation (to get keys), and opportunities to have Github, Twitter, and other OpenID/OAuth authentication, but these things can be worked out down the road. Sadly there isn't much standardization at this layer currently, and I see this extension as a first start towards making this happen. As I said, this is a good start, and we have lots of work ahead as we see more adoption.

Nice work Mike and Ivan! Let me know how I can continue to amplify and get the word out. We need to help make sure folks are describing their APIs using Schema.org. I'd love to be able to automate the discovery of APIs, using existing search engines and tooling--I know that you two would like to see this as well. API discovery is a huge problem, which there hasn't been much movement on in the last decade, and having a common vocabulary that API providers can use to describe their APIs, which search engines can tune into would help move us further down the road when it comes to having more robust API discovery.
