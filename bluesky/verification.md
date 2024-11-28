---
description: "Notes on Bluesky's verification"
title: "Bluesky's Domain Verification is Good, Actually"
---
# Custom handle verification at Bluesky

## Notes on the Bluesky approach

One of a few features from Twitter that Bluesky users are interested in is identity verification -  the purpose that Twitter's "blue ticks" used to serve before they were corrupted like everything else on that site. Currently, Bluesky allows that by letting the user prove ownership of (or authority to use) a domain, or subdomain, that matches their custom handle. This approach isn't widely loved, but personally, I think it's a very good system, allowing persistence of a web-wide identity, and letting users have a handle that can match their established website.

One argument in its favor is that DNS is already widely used for identity verification. Besides its original purpose for host lookup (when you go to a website, DNS defines where that is, and it's also DNS that directs your email to the right server), DNS is also used to verify things ownership and authority for things like email sending and identity, or mapping ownership for services like [keybase](https://keybase.io). It's a well established pattern, that should be understood by anyone who manages network services in any way, whether they're a systems administrator, developer, or just a domain owner.

DNS also has the benefit that it works with simple labels that work well as handles - dotted strings like [parsingphase.dev](https://bsky.app/profile/parsingphase.dev) or [theatlantic.com](https://bsky.app/profile/). Even "default" handles like [whysharksmatter.bsky.social](https://bsky.app/profile/whysharksmatter.bsky.social) are just an extension of this pattern - and they illustrate two useful features of Bluesky's verification. First, they don't require every user to own their own domain name. Instead, by attaching the identity to the "bsky.social" domain, they allow the owners of that domain - Bluesky themselves - to provide the identity. Secondly, they don't actually use DNS directly as the verification mechanism. Instead, they use the second (and widely ignored) mechanism of web-based verification, hosting a plain-text file on a web server at the corresponding domain - a mechanism available to those who runs websites but doesn't want to get hands-on with DNS.

This idea of delegating identity to a shared provider makes domain-based verification much more useful. For a lot of people whose identity isn't closely mapped to a two-part hostname such as parsingphase.dev, they may be better served by association with a third party. One key example is that of US Senators or Representatives - they want to assert that they're associated with the organizations [senate.gov](https://senate.gov) or [house.gov](https://house.gov) respectively. So, for example, you can have Bernie Sanders assert that aspect of his identity with the handle [sanders.senate.gov](https://bsky.app/profile/sanders.senate.gov). 

For someone whose identity is primarily "professional" in a role tied to a larger organization, delegation to that organization may be ideal from both a technical and practical viewpoint. Journalists primarily linked to a specific media outlet might well be name.outlet.com. Musicians linked to a band might be name.band.com, or will likely have a domain of their own as a solo artist. Researchers might be linked to their university - name.university.edu - or their [ORCID](https://orcid.org/) ID (currently not a particularly beautiful format, but a useful example). Similarly, sites such as LinkedIn, or email providers, also link a network identity to a personal one, and could potentially add functionality to support ID hosting to existing account management.

One of the core arguments against the current scheme, however, is that it doesn't work for those who *don't* have an "established online identity". However, the complexity in identity verification for anyone in this category isn't purely technical. At its core, the question is just what identity you would want to assert. Really, a name - a human's given name - isn't particularly unique. If I had the name "Brian Cox", for example, I'd be entitled to assert it as an identity even if I wasn't one of the ["famous" Brian Coxes](https://en.wikipedia.org/wiki/Brian_Cox) - but I might get mistaken for one of them by asserting just that. If I were to assert "Brian Cox, the footballer" that apparently wouldn't be much clearer. And if I were the well-known, musical physicist, I might avoid the problem by identifying myself with my website of [apolloschildren.com](https://apolloschildren.com/). 

The network operation also has the benefit that the assertion can be automated and therefore doesn't require a lot of time-consuming and expensive human intervention. Bluesky can handle any number of identities automatically with their team of 20, but as soon as human verification of documents and paperwork is required, staffing needs rocket. So, if in-house verification via these sources is to come, it's a ways into the future, and not a solution we should expect to see in the near future. In the short term, then, anyone who wants a custom name they can't verify themselves will need to find another way to delegate that identity. I already mentioned LinkedIn and email providers as options, but other services exist (such as [keybase.io](https://keybase.io)) which are partway towards that providing that function. 

While users might not want to have a delegated domain as their primary ID, BlueSky does at least allow users to place a "display name" next to their verified handle. That verified identity has to be fairly upfront to be useful, however, and the "domain as handle" certainly achieves that. The secondary option is to have some sort of verified identity on the profile, as Mastodon does, and the link-back approach (where users place a custom tag on a website) is quite effective there. However, it does mean that this verification is only usually seen on the user's own federated server, rather than widely visible alongside posts - making it easy for a server administrator to manipulate it (in effect *any* verification is only as reliable as the server you're viewing it on). So, besides the cost and complexity, secondary verification mechanisms also suffer a problem of visibility and familiarity, as well as creating yet one more "indentifier" to a user.

It's worth taking a moment to enumerate those identities. The most flexible, and least robust (and least unique) is the display name. As noted, this will usually be seen alongside the verified domain-based identity (whether custom, or bluesky default). But the most important, most unique, and least visible, is the DID. These identifiers are just simple, short strings - for parsingphase.dev, the DID happens to be `did=did:plc:jsjgrbio76yz7zzch5fsasox`. By hosting this, the identity manager (me, in this case) says "we assert that the only user allowed to use this name is the one with this internal ID (DID) at Bluesky'. This doesn't prove that `did=did:plc:jsjgrbio76yz7zzch5fsasox` *is* `parsingphase.dev`, for what it's worth - anyone could host that DID. But only the person who has that DID at Bluesky can do the other half of the validation - setting the value of `parsingphase.dev` in my Bluesky settings tells their system that "the only domain allowed to assert this DID is `parsingphase.dev". Each part of the verification confirms the relationship in one direction, combining to create a robust verification.

This DID can be hosted in one of two ways - in DNS (like the one for parsingphase.dev is hosted) as a "text" record under the defined location of *_atproto.**parsingphase.dev*** (you can [look up my _atproto dns record here](https://mxtoolbox.com/SuperTool.aspx?action=txt%3a_atproto.parsingphase.dev&run=toolpage)), or on a website at (again) a defined location, of *https://**domain.like.handle**/.well-known/atproto-did*, like **.bsky.social** ones are, eg [https://whysharksmatter.bsky.social/.well-known/atproto-did](https://whysharksmatter.bsky.social/.well-known/atproto-did).

## Setting up your custom handle

However you host the DID that proves your identity, you'll get the value from your Bluesky settings page at [https://bsky.app/settings/account](https://bsky.app/settings/account) (go to _Handle_ - _I have my own domain_) and you'll see it. This is also where you'll tell Bluesky what your custom domain will be. Once you've entered that custom value and collected the DID, you're halfway there.

The latter half of the process depends on whether you want to use web or DNS hosting for your DID. We'll use `my.identity-example.com" as the example handle here, and assume you already own the `identity-example.com` domain

### Web hosting

First, set up your website at https://my.identity-example.com (you might have already done this).

Secondly, copy the DID from your into a file on that site called `.well-known/atproto-did`. 

**And you're done**… if your site provider allows that and defaults to serving files as plain text (`text/plain` mimetype).  If not, the tweak to serve it as `text/plain` is very much system dependant. In an ideal world, the system might also accept the file as `.well-known/atproto-did.txt`, but as far as I know, it doesn't.

### DNS hosting

Assuming you're not *really* old-school and managing your DNS on the server in text files, you'll need to visit the "domain control" panel for your domain management provider. In some cases, this will be the same as your website hosting provider. Then you need to add a name record of the `TXT` type for the name `_atproto` to the value of your DID. Exactly what this looks like varies by provide, but usually, the "type" field is a dropdown control. As a rule, googling for `(name of your hosting provider) add DNS TXT record` will give you exactly the steps you need - although, if you know where your domain control panel is, the steps may be fairly evident.

One you're done that… **you're done** - although it might make a few minutes for the server to update.

### Either approach

Once you've added the DID, the Bluesky settings page should let you verify it (and possibly troubleshoot). At that point, you'll be able to use the new handle.

## If you don't have a domain yet

Bluesky can sell you a domain via its partner (which also gets them a little funding) and set it up directly as your handle. Login to your Bluesky account on [account.bsky.app](https://account.bsky.app/user/domains), click "Domains" and go from there.