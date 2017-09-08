---
published: true
layout: post
title: Link Relation Types for APIs
date: 2017-08-11T16:00:00.000Z
tags:
  - API Evangelist
  - Discovery
  - Definitions
  - Standards
  - Specifications
image: >-
  https://s3.amazonaws.com/kinlane-productions/erik-wilde/link-relation-types-for-web-services.png
---
<p><a href="https://tools.ietf.org/html/draft-wilde-service-link-rel-03"><img src="https://s3.amazonaws.com/kinlane-productions/erik-wilde/link-relation-types-for-web-services.png" align="right" width="40%" style="padding: 15px;" /></a></p>I have been reading through a number of specifications lately, trying to get more up to speed on what standards are available for me to choose from when designing APIs. Next up on my list is [Link Relation Types for Web Services](https://tools.ietf.org/html/draft-wilde-service-link-rel-03), by Erik Wilde. I wanted to take this informational specification and repost here on my site, partially because I find it easier to read, and the process of breaking things down and publishing as a posts helps me digest the specification and absorb more of what it contains.

I'm particularly interested in this one, because Erik captures what I've had in my head for APIs.json property types, but haven't been able to always articulate as well as Erik does, let alone published as an official specification. I think his argument captures the challenge we face with mapping out the structure we have, and how we can balance the web with the API, making sure as much of it becomes machine readable as possible. I've grabbed the meat of Link Relation Types for Web Services and pasted here, so I can break down, and reference across my storytelling.

<hr />

1.  Introduction
One of the defining aspects of the Web is that it is possible to interact with Web resources without any prior knowledge of the specifics of the resource.  Following Web Architecture by using URIs, HTTP, and media types, the Web's uniform interface allows interactions with resources without the more complex binding procedures of other approaches.

Many resources on the Web are provided as part of a set of resources that are referred to as a "Web Service" or a "Web API".  In many cases, these services or APIs are defined and managed as a whole, and it may be desirable for clients to be able to discover this service information.

Service information can be broadly separated into two categories: One category is primarily targeted for human users and often uses generic representations for human readable documents, such as HTML or PDF. The other category is structured information that follows some more formalized description model, and is primarily intended for consumption by machines, for example for tools and code libraries.

In the context of this memo, the human-oriented variant is referred to as "documentation", and the machine-oriented variant is referred to as "description".

These two categories are not necessarily mutually exclusive, as there are representations that have been proposed that are intended for both human consumption, and for interpretation by machine clients. In addition, a typical pattern for service documentation/description is that there is human-oriented high-level documentation that is intended to put a service in context and explain the general model, which is complemented by a machine-level description that is intended as a detailed technical description of the service.  These two resources could be interlinked, but since they are intended for different audiences, it can make sense to provide entry points for both of them.

This memo places no constraints on the specific representations used for either of those two categories.  It simply allows providers of aWeb service to make the documentation and/or the description of their services discoverable, and defines two link relations that serve that purpose.

In addition, this memo defines a link relation that allows providers of a Web service to link to a resource that represents status information about the service.  This information often represents operational information that allows service consumers to retrieve information about "service health" and related issues.

2.  Terminology
The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT","SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in RFC 2119 [RFC2119].

3.  Web Services
"Web Services" or "Web APIs" (sometimes also referred to as "HTTP API" or "REST API") are a way to expose information and services on the Web. Following the principles of Web architecture[ they expose URI-identified resources, which are then accessed and transferred using a specific representation.  Many services use representations that contain links, and often these links are typed links.

Using typed links, resources can identify relationship types to other resources.  RFC 5988 [RFC5988] establishes a framework of registered link relation types, which are identified by simple strings and registered in an IANA registry.  Any resource that supports typed links according to RFC 5988 can then use these identifiers to represent resource relationships on the Web without having to re-invent registered relation types.

In recent years, Web services as well as their documentation and description languages have gained popularity, due to the general popularity of the Web as a platform for providing information and services.  However, the design of documentation and description languages varies with a number of factors, such as the general application domain, the preferred application data model, and the preferred approach for exposing services.

This specification allows service providers to use a unified way to link to service documentation and/or description.  This link should not make any assumptions about the provided type of documentation and/or description, so that service providers can choose the ones that best fit their services and needs.

3.1.  Documenting Web Services
In the context of this specification, "documentation" refers to information that is primarily intended for human consumption.Typical representations for this kind of documentation are HTML andPDF.
Documentation is often structured, but the exact kind of structure depends on the structure of the service that is documented, as well as on the specific way in which the documentation authors choose to document it.

3.2.  Describing Web Services
In the context of this specification, "description" refers to information that is primarily intended for machine consumption.Typical representations for this are dictated by the technology underlying the service itself, which means that in today's technology landscape, description formats exist that are based on XML, JSON, RDF, and a variety of other structured data models.  Also, in each of those technologies, there may be a variety of languages that a redefined to achieve the same general purpose of describing a Web service.

Descriptions are always structured, but the structuring principles depend on the nature of the described service.  For example, one of the earlier service description approaches, the Web ServicesDescription Language (WSDL), uses "operations" as its core concept, which are essentially identical to function calls, because the underlying model is based on that of the Remote Procedure Call (RPC) model.  Other description languages for non-RPC approaches to services will use different structuring approaches.

3.3.  Unified Documentation/Description
If service providers use an approach where there is no distinction of service documentation Section 3.1 and service descriptionSection 3.2, then they may not feel the need to use two separate links.  In such a case, an alternative approach is to use the"service" link relation type, which has no indication of whether it links to documentation or description, and thus may be better fit if no such differentiation is required.

4.  Link Relations for Web Services
In order to allow Web services to represent the relation of individual resources to service documentation or description, this specification introduces and registers two new link relation types.

4.1.  The service-doc Link Relation Type
The "service-doc" link relation type is used to represent the fact that a resource is part of a bigger set of resources that are documented at a specific URI.  The target resource is expected to provide documentation that is primarily intended for human consumption.

4.2.  The service-desc Link Relation Type
The "service-desc" link relation type is used to represent the fact that a resource is part of a bigger set of resources that are described at a specific URI.  The target resource is expected to provide a service description that is primarily intended for machine consumption.  In many cases, it is provided in a representation that is consumed by tools, code libraries, or similar components.

5.  Web Service Status Resources
Web services providing access to a set of resources often are hosted and operated in an environment for which status information may be available.  This information may be as simple as confirming that a service is operational, or may provide additional information about different aspects of a service, and/or a history of status information, possibly listing incidents and their resolution.

The "status" link relation type can be used to link to such a status resource, allowing service consumers to retrieve status information about a Web service's status.  Such a link may not be available from all resources provided by a Web service, but from key resources such as a Web service's home resource.

This memo does not restrict the representation of a status resource in any way.  It may be primarily focused on human or machine consumption, or a combination of both.  It may be a simple "traffic light" indicator for service health, or a more sophisticated representation conveying more detailed information such as service subsystems and/or a status history.

6.  IANA Considerations
The link relation types below have been registered by IANA perSection 6.2.1 of RFC 5988 [RFC5988]:

6.1.  Link Relation Type: service-doc

   Relation Name: service-doc<br />
   Description: Linking to service documentation that is primarily   intended for human<br /> consumption.<br />
   Reference: [[ This document ]]<br />

6.2.  Link Relation Type: service-desc

   Relation Name: service-desc<br />
   Description: Linking to service description that is primarily   intended for consumption by machines.<br />
   Reference: [[ This document ]]<br />

6.3.  Link Relation Type: status

   Relation Name: status<br />
   Description: Linking to a resource that represents the status of a   Web service or API.<br />
   Reference: [[ This document ]]<br />

<hr />

**Adding Some Of My Own Thoughts Beyond The Specification**
This specification provides a more coherent service-doc, and service-desc that I think we did with humanURL, and support for multiple API definition formats (swagger, api blueprint, raml) as properties for any API. This specification provides a clear solution for human consumption, as well as one intended for consumption by machines. Another interesting link relation it provides is status, helping articulate the current state of an API.

It makes me happy to see this specification pushing forward and formalizing the conversation. I see the evolution of link relations for APIs as an important part of the API discovery and definition conversations in coming years. Processing this specification has [helped jumpstart some conversation around APIs.json](https://github.com/apis-json/api-json/issues), as well as other specifications like [JSON Home](http://apievangelist.com/2017/08/03/api-discovery-using-json-home/) and [Pivio](http://apievangelist.com/2017/08/03/microservice-discovery-using-pivio/).

[Thanks for letting me build on your work Erik!](https://tools.ietf.org/html/draft-wilde-service-link-rel-03) - I am looking forward to contributing.
