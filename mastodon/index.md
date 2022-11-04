---
description: Mastodon Day One
---
<style>.inner { min-width: 80% }</style>

This guide, focussed towards Twitter migrants, is intended to tell you enough about Mastodon to let you decide whether 
to create an account, and if so, to get started, all in well under an hour.

It is *not* an in-depth guide, but I'll provide links to more advanced ones at the end.

# What *is* Mastodon?

Essentially, it's "like Twitter, but distributed". Twitter you probably know, but what does "distributed" (or commonly, "federated") mean here?

- \- Twitter runs on multiple, separate systems called "instances" each with their own web address, as opposed to Twitter which runs on one central system at Twitter.com

- \- Each of these instances is run by a different group, mostly non-profit or community, so the whole thing isn't under the control of one company, and can't suddenly all change hands at once.

Once you're on it… it feels pretty much like Twitter, but less commercialized.

# Before I dive in…

## Your options

There are a few sites often suggested as alternatives:

### CounterSocial

I keep referring to CounterSocial as "Mastodon in a Trenchcoat". It's essentially Mastodon under the hood, and you can communicate with any other CounterSocial account from any Mastodon account, and vice-versa. It's just quite hard to see this, or anything else, before you sign up - which doesn't feel like a great experience to me. Personally I would (and did) just create a Mastodon account on a less self-consciously edgy server. 

### Cohost.org

I've not used this, but my understanding is that it doesn't communicate with Mastodon. If you want both a Cohost and Mastodon acocunt, there's no reason you can't.

## Concerns

You might have head that "Mastodon admins can read your DMs". 

The short answer: Yes, if they really want to, but so can Twitter's. I'm not worrying about it, but if you want more detail, read 
[socialMediaDMSecurity](socialMediaDMSecurity.md)

# How do I get an account?

- \- Pick an open instance
- \- Go to its homepage
- \- Fill out the signup form

That first point is the stumbling block for 95% of would-be users, so let's cover what an instance is and how to find one.

# What is an Instance?

It's a copy of the Mastodon code, or another set of software that speaks the same language, with its own admin and moderation team, and sometimes a specific set of rules or target audience.

# Does it matter which Instance I join?

Short answer: Not really. 

**All instances pass messages to each other**, so choosing one instance doesn't mean you can't connect and interact with anyone whose account is on a different instance, almost as if you were on the same one. (I'll cover what that "almost" means later, but it's not a major issue).

You can think of it a bit like email: you can log onto Hotmail, I can log onto GMail, and we can both communicate with each other by letting
the server sort out where to hand the messages. This is the key difference from Twitter: on Twitter, you go to the site with the messages, on Mastodon the messages come to your site.

If you find later that you'd rather be on another instance, you can very easily move, so the important thing is really just to pick one and dive in. For example, I started off on [Mastodon.Social](https://mastodon.social/), left the account idle for a while, came back once it had got really busy, and just set up a redirect from my old address to my new one. All my followers followed the account, though my old posts remained on the old server

To see what a redirect looks like, you can take a look at my old account: [@parsingphase@mastodon.social](https://mastodon.social/@parsingphase).

# OK, so how do I find a first instance?

Short answer: If you know someone who already has an account and they say their server works,
and they can either invite you or the server is open, join them.

Otherwise, pick one of these large, open (at the time of writing), general-purpose servers at random:

- \- [Mstdn.social](https://mstdn.social/)
- \- [Mastodon.online](https://mastodon.online/)
- \- [Mas.to](https://mas.to/)
- \- [C.IM](https://c.im/)

Less direct answer: Take a look at one of the following lists and pick one that's open and looks interesting.

- \- [joinmastodon.org/servers](https://joinmastodon.org/servers)
- \- [instances.social](https://instances.social/)

Remember… you can choose a new server in future if you want; you're not limited to one account, and you can redirect an old account to a future one later on.

# How do I create an account?

There should be a "sign up" button or form somewhere on the server's main page. It varies in location depending on the version of the software they're running.

## Can I have the same username as I did on Twitter?

Well… sort-of. Mastodon names are always two parts: `@username@host.tld`, where `user` is for you to choose, and `host.tld` is the server's address, used by other servers and tools to find your account. You'll always need to share the account in this full form; if you just give the username, people won't find you. That said though, chances are you can choose a `username` that matches what you had on Twitter.

# I've got an account. Now what?

- \- Fill out your bio
- \- Start posting, possibly with a brief intro
- \- Follow people

Strictly, you can do these in any order, but if you do them in the order above, it'll give people more idea who just followed them and you'll be more likely to get a follow back.

The bio and first post are easy. Finding people is a little trickier.

# How do I find people to follow?

## How do I find my Twitter friends on Mastodon?

Visit [Debirdify](https://pruvisto.org/debirdify/) and hit "Authorise with Twitter". This will ask to use your twitter access to scan through the bios and pinned posts of everyone you follow to find any that include a Mastodon address. If it finds any, it'll then let you download a list that you can import into your Mastodon account at Preferences => Import and export => Import. 

[Fedifinder](https://fedifinder.glitch.me/) will also generate a similar list, with slightly different options.

To make yourself findable by these tools (and by your twitter friends), add your full account name (`@username@host.tld`, eg `me@mastodon.online`) to your twitter bio. This lets the tools find you, but doesn't give visitors a clickable link. For that, add the address of your Mastodon profile (eg `mastodon.online/@me`).

## How do I follow someone whose address I know?

The general purpose answer to a lot of things in the web interface of most Mastodon websites is "stick it in the search bar". For example, if you paste `@feditips@mstdn.social` into the search bar and hit search, it'll give you the chance to follow an account with a very useful set of daily tips.

## How do I find new people?

- \- Browse the "explore", "local" or "federated" feeds of your site
- \- Check our directories like [Fedi.directory](https://fedi.directory/)  

# What next?

Dive in and enjoy, but please remember: Mastodon's instances are more than just lifeboats for Twitter. They're pre-existing communities with their own rules and conventions - please try to follow them. 
Fortunately the rules are generally short, and not onerous. 

The conventions aren't difficult either, but please:

- \- Add Alt Text to all your images
- \- Use #CamelCase to make hashtags easier to read, and clearer for screen readers
- \- Use the "Content Warning" function where appropriate.

It's also worth remembering that Mastodon is non-commercial, it's not selling adverts or blue ticks, and running servers
and developing software cost money. 
If you can afford it, you're heartily encouraged to send a few bucks a month to your server host via their tip jar if they have one on their home page, or, if you want to support development of the software itself and some of the "flagship" servers, you can support [Mastodon on Patreon](https://www.patreon.com/mastodon). This will help keep the servers running and managed, and stave off commercial pressures. Of course, if you can't afford it, or don't know if you want to yet, there's no obligation, and no way of seeing if a given account does or not.

## Use an app on your phone or tablet

I can only speak for Apple devices as that's what I use, but I like [MetaText](https://apps.apple.com/us/app/metatext/id1523996615).

As with instances, you can try one app now and another later (but without having to change your account in any way). 

For more apps, see [joinmastodon.org/apps](https://joinmastodon.org/apps) - make sure you scroll down to "Third-party Apps" to see a wide choice.

# Finally

I'm deliberately keeping this guide *really* short, as there are other great ones online. If you want to find me on Mastodon to follow
(you'll get a daily feed of pretty decent wild bird photography, for a start), or to ask questions,
I'm at [@parsingphase@m.phase.org](https://m.phase.org/@parsingphase).

Those other guides include:

- \- [(An Increasingly Less-Brief) Guide To Mastodon](http://guidetomastodon.com)
- \- [Fedi.tips](https://fedi.tips/)

---

[Back to site index](..)
