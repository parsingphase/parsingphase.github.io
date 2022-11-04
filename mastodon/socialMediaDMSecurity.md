---
description: Social Media DM Security
---
# Social Media DM Security

(NB - this is copied from a twitter thread I wrote, I'll tidy it up a bit over time)

So the “Mastodon server admins can read all your posts!” excitement is going around again.
Thing is… server admins can read your posts on pretty much every web-based system in existence. 
Building and running a system whose data you can’t read is a really hard engineering problem.

Rest assured this also means Twitter admins can also read your messages. 
If they handle database security well, that might mean only *some* admins (& their bosses, if they demand it) can read from the DB, but ultimately you can't tell a system how to read messages unless you can read them yourself.

The only way to build a system where you can't read the data you're passing is to have it encrypted before you see it and decrypted after it's left your systems. When people are tying raw text into your website, that's not happening.

Even if admins (claim to) encrypt on storage (and it's pretty standard now), if plain text is going into their servers to be encrypted and stored, they can intercept it on input, or when it's decrypted to display/send to the recipient(s).

To encrypt / decrypt outside of the central server, you need on-device encryption, where you have, on your phone/tablet, your "private" keys that can read messages sent to you, and the "public" keys of everyone your want to send to, with which you encrypt messages to them.

This requirement to encrypt per-recipient generally also means you need to send one encrypted message per recipient (though there are ways of "bagging" messages for a specific set of recipients).

It's also hard, without some serious key-sharing architecture (which I *assume* iMessage etc have), to have your same private keys on all your devices, without sharing them with the central service to pass between devices. Which means secure messaging is most commonly per-device.

Ultimately this means the security of your "private" messages in a system owned by someone else depends on how much you trust that owner. Do you trust Twitter's current owners more than you trust Mastodon's server admins (of your instance and your recipient's server only)?

One benefit that Mastodon (and compatible services) have here is that you can actually run your own server, which means you have better control of half of the conversation. (The same logic applies to email servers FWIW). If they other person's also on their own server, great!

That doesn't mean you *have* to run your own server to be "secure"; frankly for most people it's simply a case of finding an existing server they trust "at least as much" as Twitter's or Facebook's owners. But if you really need to be extremely secure, social media is not the way.

Disclaimer - I'm a software developer and systems admin, not a cryptographer. I'm sure there's a thousand technical "yeah, but"s out there. But for the average social media user, the above is a reasonable grounding.

---

[Back to Mastodon guide](/mastodon) |
[Back to site index](..)


