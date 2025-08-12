---
description: Social Media DM Security
title: Social Media DM Security
---

<style>body { color: #000 } .inner { min-width: 80% } a { color: #d5000d }</style>

I'm not quite sure why there's quite so much energy being put into knocking Mastodon, but the two favorite scare stories
see to be "It's hard" (Nope, you can probably [get running in 30 minutes](/mastodon)) and
"Instance admins can read your DMs" (so can Facebook's & Twitter's, and your Email provider's can read your unencrypted
email).

So let's be clear… Mastodon is not inherently less secure than any other web-based messaging system. Pretty much by
definition, server admins can read your posts on pretty much every web-based system in existence.
**Building and running a system whose data you can’t read is a really hard engineering problem**. The best you can do is
control who has access to the database keys and production systems through which messages pass; these are policy
controls, not technical ones.

This includes Twitter - both its engineers and their chain of command, through them. If they handle database security
well, it might be that only _some_ admins (& their bosses, if they demand it) can read from the DB, but ultimately you
can't tell a system how to read messages unless you can read them yourself.

The only way to build a system where you can't read the data you're passing is to have it encrypted before you see it
and decrypted after it's left your systems. When people are tying raw text into your website, that's not happening.
Even if systems encrypt messages as they store them (and it's pretty standard now), if plain text is going into their
servers to be encrypted and stored, the plain version can be intercepted on input, or when it's decrypted to
display/send to the recipient(s).

To encrypt / decrypt outside of the central server (which would mean that all the data that passes through the server
would be unreadable by its operators), you need on-device encryption, where you have, on your phone/tablet,
your "private" keys that can read messages sent to you, and the "public" keys of everyone you want to send to, with
which you encrypt messages to them. This requirement to encrypt per-recipient generally also means you need to send one
encrypted message per recipient (though there are ways of "bagging" messages for a specific set of recipients).

It's also hard, without some serious key-sharing architecture (which I _assume_ iMessage etc have), to have your same
private keys on all your devices, without sharing them with the central service to pass between devices. Which means
secure messaging is most commonly per-device.

Ultimately this means the security of your "private" messages in a system owned by someone else depends on how much you
trust that owner. Do you trust Twitter's current owners more than you trust Mastodon's server admins (of your instance
and your recipient's server only)?

One benefit that Mastodon (and compatible services) have here is that, in the extreme case, you can actually run your
own server, which means you have better control of half of the conversation. (This applies equally to email servers).
If the person with whom you're communicating also controls their own server, you only have to trust each other.
If you're not willing or able to run your own server (and even if you're familiar with the tech, it's an added hassle),
your remaining choice is of who, if anyone, you want to trust to hold your data for you.

The bottom line then is: If you don't trust Twitter or Facebook, don't use it for DMs. If you don't trust the admin of
the Mastodon instance handling either side of a conversation, don't use that instance for DMs. If you don't trust Google
or Microsoft, don't use GMail or Hotmail for confidential messages. If you genuinely need security, don't use social
media for that message; use an on-device messaging system with end-to-end encryption and no web interface, and don't
annoy any nation-states.

Disclaimer - I'm a software developer and systems admin, not a cryptographer. I'm sure there's a thousand technical
"yeah, but"s out there. But for the average social media user, the above is a reasonable grounding.

---

[Back to Mastodon guide](/mastodon) |
[Back to site index](..)
