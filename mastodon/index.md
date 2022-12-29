---
description: 'Mastodon "Day One" Guide'
title: 'Mastodon "Day One" Guide'
---
<style>body { color: #000 } .inner { min-width: 80% } a { color: #d5000d }</style>

This guide, focussed towards Twitter migrants, is intended to tell you enough about Mastodon to let you decide whether
to create an account, and if so, to get started, all in well under an hour.

It is *not* an in-depth guide, but I'll provide links to more advanced ones at the end.

# What *is* Mastodon?

Essentially, it's "like Twitter, but distributed". Like Twitter, content is public by default, open to the world, and
you can read such anyone's public content without signing up to anything.

The differences are that it's non-commercial, and distributed (or "federated"). What does that mean?

- \- Mastodon runs on multiple, separate systems called "instances" each with their own web address, as opposed to
  Twitter which runs on one central system at Twitter.com

- \- Each of these instances is run by a different group, mostly non-profit or community, so the whole thing isn't under
  the control of one company, and can't suddenly all change hands at once.

Once you're on it… it feels pretty much like Twitter, but with no ads or algorithms.

# Before I dive in…

## Your options

There are a few sites often suggested as alternatives:

### CounterSocial

CounterSocial is a Mastodon-based service whose admins had a public falling-out with the lead developer of Mastodon,
copied the code and tried to remove the sharing features and turn it into a closed-by-default service. Strangely, 
CounterSocial profiles still advertise themselves as standard Mastodon ones for wider access, and private pages are 
very weakly protected. The backstory and obvious software issues mean that I suggest people avoid this service; if you
want public sharing, use a public Mastodon instance, and if you want a closed system, use one designed that way in the 
first place.

### cohost

Cohost also doesn't expose any of its posts, or much detail on its services, to the public. Its Terms of Service however
make clear that it's set up as a walled garden intended as a place for users to sell content to each other.
While this does give them a revenue stream that's not ad-dependant, this is clearly a single-company, non-interoperable
commercial product.

As a closed, age-limited community, this doesn't feel like a direct alternative to either Twitter or Mastodon.

## Concerns

### Security

You might have head that "Mastodon admins can read your DMs".

The short answer: Yes, if they really want to, but so can Twitter's & Facebook's. I'm not worrying about it, but if you
want more detail, read [Social Media DM Security](socialMediaDMSecurity.md)

### Speed & reliability

Right now, a lot of people are moving from Twitter either into entirely new accounts, or into accounts that have sat
idle for years, and the resulting surge in load means some of the servers are running very slow or throwing errors.
However, this shouldn't put you off joining, and you should find the experience improves as the instances scale up.
A lot of instance admins are doing incredible work to make this happen.

### Adult or aggressive content

All human life is on Mastodon, for better or worse, and the federation system both supports and deals with this. All
instances have their own moderators, usually fairly explicit in their rules and beliefs, and they will deal with issues
within their own instances. While there are, unfortunately, Nazi and similar instances out there (because humans),
you can generally avoid that content by simply not creating your account on one, because most instances simply cut off
communication with them. While the federation system means that all instances *can* intercommunicate, it doesn't mean
they have to, and blocking an instance is an easy way to isolate aggressors en-masse.

On the flip side, this also means some instances very explicitly allow adult content. The extent to which this content
is federated varies, and you won't generally be flooded with adult material on a general instance, but if you want to
join a sex-positive instance (possibly in addition to another more public account), you can do so without the fear that
advertisers will be pushing it to become "family friendly".

One thing to remember is that Mastodon servers are run by different communities all around the world, all with local
laws and norms. Many are in Europe, where the sort of free-speech absolutism that protects violent or hate-speech isn't
prevalent, and most particularly in Germany, which has strong laws against Nazi content.

# How do I get an account?

- \- Pick an open instance
- \- Go to its homepage
- \- Fill out the signup form

That first point is the stumbling block for 95% of would-be users, so let's cover what an instance is and how to find
one.

# What is an Instance?

It's a copy of the Mastodon code, or another set of software that speaks the same language, with its own admin and
moderation team, and sometimes a specific set of rules or target audience.

# Does it matter which Instance I join?

Short answer: Not really.

**All instances pass messages to each other**, so choosing one instance doesn't mean you can't connect and interact with
anyone whose account is on a different instance, almost as if you were on the same one. (I'll cover what that "almost"
means later, but it's not a major issue).

You can think of it a bit like email: you can log onto Hotmail, I can log onto GMail, and we can both communicate with
each other by letting the servers sort out where to send the messages. This is the key difference from Twitter: on
Twitter, you go to the site with the messages, on Mastodon the messages come to your site.

If you find later that you'd rather be on another instance, you can very easily move, so the important thing is really
just to pick one and dive in. For example, I started off on [Mastodon.Social](https://mastodon.social/), left the
account idle for a while, came back once it had got really busy, and just set up a redirect from my old address to my
new one. All my followers followed the account, though my old posts remained on the old server

To see what a redirect looks like, you can take a look at my old
account: [@parsingphase@mastodon.social](https://mastodon.social/@parsingphase).

# OK, so how do I find a first instance?

Short answer: If you know someone who already has an account and they say their server works, and they can either invite
you or the server is open, join them.

Rather helpfully, the [Debirdify](https://pruvisto.org/debirdify/) tool can not only tell you which instances your
Twitter friends and followers are using, but find their Mastodon accounts for you, if they've surfaced that data.

Otherwise, there are a few larger servers which are accepting self-signups at the time of writing, including:

- \- [Masto.AI](https://masto.ai/about) 
- \- [Federate.Social](https://federate.social/about)
- \- [Mstdn.social](https://mstdn.social/about)
- \- [Mas.to](https://mas.to/about)

You can also consider one of these smaller, regional instances, which are sometimes less heavily loaded, but can still
fully interconnect with all other Mastodon users:

- \- [Mastodonapp.UK](https://mastodonapp.uk/about)
- \- [Mastodon.Scot](https://mastodon.scot/about)
- \- [Toot.Wales](https://toot.wales/about)
- \- [Mastodon.IE (Ireland)](https://mastodon.ie/about)
- \- [Mastodon.Uno (Italy)](https://mastodon.uno/about)
- \- [Masto.PT (Portugal)](https://masto.pt/about)
- \- [Mastodon.Top (France)](https://mastodon.top/about)
- \- [Social.tchncs (Germany)](https://social.tchncs.de/about)

Less direct answer (but more reliable long-term): Take a look at one of the following lists and pick one that's open and
looks interesting.

- \- [joinmastodon.org/servers](https://joinmastodon.org/servers)
- \- [instances.social](https://instances.social/)

Remember… you can choose a new server in future if you want; you're not limited to one account, and you can redirect an
old account to a future one later on. Whichever server you choose, please make sure you read their rules and policies to
avoid surprises later.

# How do I create an account?

There should be a "sign up" button or form somewhere on the server's main or 'About' page.
It varies in location depending on the version of the software they're running.

## Can I have the same username as I did on Twitter?

Well… sort-of. Mastodon names are always two parts: `@username@host.tld`, where `username` is for you to choose,
and `host.tld` is the server's address, used by other servers and tools to find your account. You'll always need to
share the account in this full form; if you just give the username, people won't find you. That said though, chances are
you can choose a `username` that matches what you had on Twitter.

# I've got an account. Now what?

- \- Fill out your bio
- \- Start posting, possibly with a brief intro
- \- Follow people

Strictly, you can do these in any order, but if you do them in the order above, it'll give people more idea who just
followed them and you'll be more likely to get a follow back. If you're short on inspiration for your bio, or can't
find that perfect profile / header pic, just grab the ones from your Twitter account until you get a chance to update!

The bio and first post are easy. Finding people is a little trickier.

# How do I find people to follow?

## How do I follow my Twitter friends on Mastodon?

As mentioned above, [Debirdify](https://pruvisto.org/debirdify/) has a few handy tricks in this area.
Visit the site and hit "Authorise with Twitter", and it will ask to use your Twitter access to scan through the bios and
pinned posts of everyone you follow to find any that include a Mastodon address.
If it finds any, it'll then let you download a list that you can import into your Mastodon account at `Preferences` =>
`Import and export` => `Import` to follow them en-masse.

[Fedifinder](https://fedifinder.glitch.me/) will also generate a similar list, with slightly different options.

If you'd prefer a more guided / mobile-friendly version without having to download & upload files: [MoveToDon](https://www.movetodon.org/).

At the moment, it's worth repeating the search and import every few days, as more and more Twitter users move and share
their Mastodon accounts.

To make yourself findable by these tools (and by your Twitter friends), add your full account name
(`@username@host.tld`, eg `@me@mastodon.online`) to your Twitter bio. This lets the tools find you, but doesn't give
visitors a clickable link. For that, add the address of your Mastodon profile (eg `mastodon.online/@me`).

## How do I follow someone whose address I know?

The general purpose answer to a lot of things in the web interface of most Mastodon websites is "stick it in the search
bar". For example, if you paste `@feditips@mstdn.social` into the search bar and hit search, it'll give you the chance
to follow an account with a very useful set of daily tips. This also generally works with the URL of a user's profile 
page, which can be useful if the address itself isn't clear.

Another alternative, if you want to follow someone from their profile page that's not on your server, is to use the 
[Mastodon "Instance Changer" bookmarklet](https://homepages.inf.ed.ac.uk/imurray2/code/mastodon.html), which smooths out
a lot of the friction caused by Mastodon's multi-server nature.

## How do I find new people?

- \- Browse the "explore", "local" or "federated" feeds of your site
- \- Check our directories like [Fedi.directory](https://fedi.directory/)
- \- Search for hashtags. Mastodon doesn't have a full-text search function (this would be near impossible in a
  federated system), but you can search by hashtag. Also, make liberal use of **relevant** hashtags in your own posts to
  let them and you be found.

## Do people have to approve my follow requests?

It varies by server, and users can set this setting for themselves, but in most cases, you won't need a user's
permission to follow them. However, because of the speed issues mentioned above, if you follow someone on one of the
busiest servers from elsewhere, you might see them as "pending approval" for a bit, while the remote server gets around
to processing and confirming that "follow".

# What next?

Dive in and enjoy, but please remember: Mastodon's instances are more than just lifeboats for Twitter. They're
pre-existing communities with their own rules and conventions, and generally a higher "duty of care" for each other.
Please help maintain these conventions to keep Mastodon a healthy and inclusive place.

So, please:

- \- Read and follow your local instance's rules
- \- Add Alt Text to all your images
- \- Use #CamelCase to make hashtags easier to read, and clearer for screen readers
- \- Use the "Content Warning" function where appropriate.

It's also worth remembering that Mastodon is non-commercial, it's not selling adverts or blue ticks, and running servers
and developing software cost money.
If you can afford it, you're heartily encouraged to send a few bucks a month to your server host via their tip jar if
they have one (most do and it'll usually be on the `/about` page rather than the homepage), or, if you want to support
development of the software itself and some of the "flagship" servers, you can support
[Mastodon on Patreon](https://www.patreon.com/mastodon). This will help keep the servers running and managed, and stave
off commercial pressures. Of course, if you can't afford it, or don't know if you want to yet, there's no obligation,
and no way of seeing if a given account does or not.

## Use an app on your phone or tablet

I can only speak for Apple devices as that's what I use, but I
like [MetaText](https://apps.apple.com/us/app/metatext/id1523996615).

As with instances, you can try one app now and another later (but without having to change your account in any way).

For more apps, see [joinmastodon.org/apps](https://joinmastodon.org/apps) - make sure you scroll down to "Third-party
Apps" to see a wide choice.

# Trivia

## Is there an edit button?

Yes, on some servers that have upgraded to the new v4 Mastodon software. It'll be available to other servers as they
upgrade.

## Is there verification?

Sort-of. There's no "blue tick" to say you've shown someone your ID or paid a few bucks (if you see blue ticks, users
have added an emoji to their username, as a bit of an in-joke).
But if you own a website, you can "prove" that you're the owner of that site and it'll be highlighted on your profile.

# Finally

I'm deliberately keeping this guide *really* short, as there are other great ones online. If you want to find me on
Mastodon to follow (you'll get a daily feed of pretty decent wild bird photography, for a start), or to ask questions,
I'm at [@parsingphase@m.phase.org](https://m.phase.org/@parsingphase).

Those other guides include:

- \- [(An Increasingly Less-Brief) Guide To Mastodon](http://guidetomastodon.com)
- \- [Fedi.tips](https://fedi.tips/)

---

[Back to site index](..)
| [Changelog](https://github.com/parsingphase/parsingphase.github.io/commits/main/mastodon/index.md)
