---
description: 'Building right from wrong - judging and obtaining usefulness from LLMs'
title: 'Building right from wrong - judging and obtaining usefulness from LLMs'
---
I’ve written elsewhere about many other issues with the use, costs, risks and payoffs of LLMs, but these don’t necessarily touch on the daily question that matters to their users: if we were to somehow able to resolve the wider risks (or, in more practically immediate and very human sense, ignore or externalise them), how useful could they be? After all, many people use them regularly, even in technical areas, and find their output to be useful. Is it?

A recent OpenAI study confirms that as statistical systems, LLMs can and will never stop “hallucinating”. As such, we’d need to learn to use tools that are always going to get things wrong - and sometimes, inevitably, wildly wrong - while delivering adequate confidence in their answers[^1].

**The strength of LLMs is not, therefore, that they return correct answers. The strength of LLMs is that they return wrong answers fast.**

Now, that’s one snarky-looking pronouncement. But more usefully, it’s also true, and by digging into it, we can learn a lot more about the apparent utility of LLMs.

LLMs obviously don’t get everything wrong[^2]. The discussion would be a lot simpler if they did, and we’d be looking for something else to spend 20% of the stock market on (GREEN ENERGY IS RIGHT THERE!), but they clearly get some stuff right. Trying to quantify how much they get right is itself incredibly difficult, and they don’t always get the same stuff right, so we’re dealing with some very hard-to-quantify uncertainty. In particular, it means that they can’t be relied on to produce any one answer correctly - which means that in every case, if we can’t validate the answer ourselves, we have to treat it as if it’s inaccurate. Or in other words; “partly wrong”, and “sometimes wrong”, both still have to be handled like “wrong”.

So if we can’t rely on accuracy, can speed make the use of LLMs worthwhile?[^3]

It depends. Speed can give us two things - it can give us a “good enough” answer faster than we could create it ourselves, or it can give us the chance for rapid, guided iterations until we *reach* good enough.

Either case requires us to judge “good enough”. This requires either skill, or indifference to accuracy. Which again, sounds snarky, but in some cases it might not matter to the user! [^4] This might be an aspect of a given problem, or it might be an ethical issue[^5], but it’s not really a case we can usefully expand on here.

So let’s assume that the user is trying to validate the responses they get, and iteratively improve them, generally by “re-prompting” or by prompting to iterate in specific areas. Validation can take various forms, requiring various levels of skill and effort. If an answer is nonsensical (or for a code answer, nonfunctional), then validating it is going to be trivial. The closer an answer appears to being correct, the more skill its validation will need[^6]. Complicating this is the tendency for “hallucination” to increase with complexity; ie, if the context window grows as a chat session progresses, or as a codebase grows over multiple, iterative prompting sessions.

So the trade-off the user makes, hopefully intentionally, in using LLM tools versus doing the work themselves becomes that of whether it takes less time (or effort, depending on the user’s metric) to repeatedly shepherd machine answers than to use the knowledge this requires to actually do that work.

That trade-off depends on the domain of the problem, and how “good enough” can be defined. The domain determines how much risk exposure is acceptable, and how hard the evaluation is. Obviously, in the medical domain, these are: very little, and very, so this would seem to be a poor fit to the “wrong, but fast” tooling. In some textual preparation domains - particularly fiction, or inconsequential reporting, the risk is unlikely to exceed that of professional embarrassment. The legal domain falls somewhere between the two, dependent on situation.

In the coding domain we know that review is hard, and that the complexity of review increases exponentially with the size of a change, as well as with the size of a codebase, and indeed that review is often harder (if faster) than actual creation of code, so, to my mind, it’s a bold developer that trusts anything but simple code to this equation. Clearly, there **are** bold developers out there, for good reasons or bad, but personally, this is not a way of working than I can see myself benefitting from adopting.

In many cases, the user has the option of allowing the LLM tooling to do some part of the work and then complete it manually - meaning that the definition of “good enough” becomes “done enough”, allowing for different trade-offs. In coding terms, that might mean that the LLM creates the boilerplate code and the developer then adds features. Or, it might mean that the developer accepts “mostly working” but buggy code then irons out enough bugs to get to “good enough” for submission.

So how, in this case, do we know when the code is “good enough”, or that we’ve adequately removed or avoided error in it? We can use certain analysis tools such as linters, and we can add (or require the LLM to add) tests. Confirming adequate test coverage is itself a skill, as is writing tests that exercise all appropriate cases. A complication here is that LLMs have been observed to write code that only simulates what is demanded, and to write passing tests that don’t actually test anything before passing. Again, not the usual case, but a hazard to be aware of. The developer may, with some luck and skill, and the perseverance to fully read and understand the generated code, be able to produce a functional and working solution.

What they will not be able to do, however - without a high degree of intervention - is to write intentful code, and they will again likely require significant intervention to create locally idiomatic and well-integrated code that uses existing functionality rather than duplicating it. Again, this difficulty for the LLM and its handler increase significantly with the size of the codebase.

We also need to be aware of the risks of aiming for “functional” or “good enough”. By iterating on code that’s not adequate, each iteration requiring time, energy and patience, the natural inclination is to stop with code that is “adequate”, and no better. Remembering the initial goals and intents - if the developer fully framed these, when the machine was expected to “do the work” can be difficult if the process inherently shifts the goals.

Finally, the chance of obscure, hard-to-detect edge-case bugs and/or security will remain, as these are always the hardest to find by review.

Ultimately, how good the code is that a developer can create with an LLM will depend on how good the developer is, and how much iteration they are prepared to perform. My suspicion is that even with high levels of iteration, even a moderate developer will produce slightly better code without such tooling than with, and that any developer below that level is taking a risk releasing code in any security-sensitive situation. I’d initially be inclined to say “any security-sensitive situation” means anywhere but their own machine - including release of source code to GitHub, etc. - but these days, with the rise of AI slop-squatting[^7], even running inadequately verified, LLM-built code on your own machine can carry significant risk.

In summary, I am not inclined, having explored the idea in this essay, to believe that developers are likely to produce their best work faster with LLMs than without. Junior developers might be able to produce code this way that they could not in other ways, but that is a risk, not an advantage, if they don’t fully understand and examine what they’ve created. Intermediate and senior developers may perform some low-risk tasks faster, but at the loss of intent and familiarity in the created code, and at the expense of growing complexity, structural issues and poorer LLM performance as the codebase grows. I started off this piece to try to understand how the iterative LLM-aided approach might work, but ultimately, I don’t see the speed benefits as significant or persistent, and the resulting distancing of the developer from the code, coupled with the diminishing returns of the tooling, make me think that this is unlikely to be a sustainably beneficial path.

<hr />

[^1]: There is a suggestion in recent research that some system could be placed around LLMs to gauge the probability of an answer being correct, and refuse to return low-confidence answers. Personally, I’m sceptical - both from my understanding of the systems and from the industry’s track record of delivery - so, handling this case in detail is probably better done when we’ve some idea what it might look like, and when. But, in short, I’m unconvinced that putting confidences on stochastic answers is likely to solve core problems.

[^2]: trying to completely avoid anthropomorphic language here is going to limit readability, so bear with me

[^3]: Like everything else here, speed is relative. “Chatbots” are rarely truly conversationally fast. So I’m kinda taking “fast” as a measure of “reduced human time and effort” here.

[^4]: There’s also the problem of those who use LLMs without understanding, despite warnings, that LLMs are not reliable. For anyone who’s grown up with every car ad saying “do not attempt” as a car drives down an empty road, or every health product saying “this product does not treat… any disease”, it’s not actually that huge a leap to consider warnings to be generally meaningless. But: if you do not understand the risks of LLMs, you should not use them. And this also means: children should not use them.

[^5]: The use of LLMs as tools to “flood the zone”, however, is itself a problem that is not adequately addressed by society.

[^6]: For code, a full validation will by necessity involve reading and understanding every line. No developer should ever submit code they themselves cannot understand or could not write.

[^7]: [The Rise of Slopsquatting: How AI Hallucinations Are Fueling...](https://socket.dev/blog/slopsquatting-how-ai-hallucinations-are-fueling-a-new-class-of-supply-chain-attacks)
