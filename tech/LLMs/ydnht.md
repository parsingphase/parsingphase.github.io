---
description: 'You do not have to hand IT to the techbros'
title: 'You do not have to hand IT to the techbros'
---

A much-deserved backlash to genAI is spreading across society, as more and more people start to recognize the destructive costs behind the shining promises. Whether it's in the arts, education, science, or supposedly agentic systems that are now proposed to run our lives for us, we're starting to see that the trade-offs aren't worth the cost.

But a lot of writing on the topic seems to grant the same exclusion, whether out of a genuine belief that it's a special case, or a desire to seem even-handed by ceding a point to genAI proponents. That exclusion tends to run along the lines of "While genAI may have some use in coding…".

But why is that exception so often assumed?

I suspect there are various reasons. One might be that we assume genAI to be part of the domain of "software" - chatbots are systems we use to do things via the computer, so the natural domain to do things *in* is software. And indeed, vibe-coding seems magically effective in many cases; a stranger to coding can ask a chatbot to do things that they couldn't start to do without assistance, and produce something that *looks* somewhat like a professional product. And someone who has more coding experience can use it to take shortcuts in the usual development workflow, skipping some repetitive tasks or using the chatbot to avoid the need to understand an existing system or language behavior. The output seems to work, and maybe the agent can even test it for you. This meets the definition of "useful", surely?

Well, it might. But we should always seek to make our software more than purely "useful"; it needs to be safe, secure, reliable, understood, maintainable and extendable (these are overlapping areas). And the cost needs to be less than the benefit.

We've seen vibe-coded software fail all of these goals at one point or another. Systems that delete their own production data. Systems so insecure they leak users' confidential and sensitive information. Systems that keel over at any sort of scale. Systems that leak passwords and digital keys, or financial details. We've seen that these systems can fail in many ways, and in some cases, in a dramatic and costly fashion. But most (?) of the time, they seem to work, for those who are either tolerant of these risks, or unaware of them.

But why does generatively-coded software seem to work better than its outputs in other domains?

Well, software development passes through a level of self-filtering that doesn't necessarily apply in other domains. Telling whether an article is nonsensical likely requires human intervention, but software that's *complete* nonsense won't compile or run. That "nonsense" threshold can be raised a little further by including testing within the developed software - but neither compilation nor self-tests guarantee resilient correctness; to run is not to run well, but the fact that software might superficially work can hide any number of internal risks or error cases.

The truth is that it can be genuinely hard to gauge the quality of software. I've worked in this field for almost thirty years, and one thing I've found repeatedly is that software that's atrocious on the inside can still seem to work pretty effectively at the surface. Even if that makes it inefficient, it's often possible just to throw more processing power at it, which will never be seen by the end user. Nor will that user be able to count its fingers, or see any of the "tells" that LLM-generated output has in other domains. Generated software can get away with a lot.

But if it works, who cares, right?

Well, more of us ought to. If we're not hitting security or safety issues purely because of luck, we shouldn't accept that; it's dangerous and unprofessional behavior. Further, generated software will never have been fully understood by a human in the same way that traditionally written code should have. This makes it harder to debug, and a risk for future maintenance, possibly to the extent that the developer becomes dependent on stochastic tooling to fix or extend it in the future, pulling us ever further away from control and understanding. And if that tooling either deteriorates with volume, or becomes less reliable or unavailable in the future, we're stuck. Not merely because the code's got harder, but because we've become less practiced at working with it in a traditional way - we've become deskilled.

Skilling up in software takes years, and we get well paid for it (relatively) because of the comparative rarity of these skills, and because of the work we've put in both to build and to maintain them. That rarity leads to an unpleasant truth about the software industry - because of the shortage of engineers, you can have a career that pays pretty well without actually being much good at it. And over my career, I've seen a noteworthy minority who've really not been very good at it. (I'm obviously implying that I don't think I'm one of them. Considerable effort and introspection has gone into the last three decades to ensure that's true). To some extent, this explains why the industry is so keen to be able to produce more code without so much dependency on developers; it doesn't explain why so many developers used to being paid a premium for their skills expect to keep making that salary when they use a machine to do their jobs for them. It may also explain a company's willingness to accept "good enough", if they're used to developers who only hold themselves to that standard.

The truth is that writing software well is hard; building those skills and continuing to improve them, or even maintain them, depends on continual hands-on work, of a type that's lost once we allow genAI to take over too much of the process.

What happens if we stop doing that work?

In the short term, we get software that's usually "good enough", and only sometimes fails catastrophically. In the long term, on the scale of multiple years, we're in far more trouble. The code, as noted above, gets slowly harder to extend and maintain, but at the same time not only does the skill of individual developers deteriorate, but the whole educational and professional pipeline that currently produces developers dies out. If we're teaching school-age students to rely on genAI in all fields, even as companies seek to replace junior developers with genAI, and fail to give existing engineers the chance to skill up, while more senior devs age out (or burn out) of the industry, we're going to run out of developers. We would end up relying almost entirely on genAI. But that genAI has to have someone, or something, maintain it - both in terms of the infrastructure it runs on, and in the continued development and training of models.

If we've deskilled all the humans, then these models have to run, develop and maintain themselves, with ever lesser human knowledge. It seems unlikely that they're going to be able to do this; we're not going to get AGI, "true intelligence" from genAI - suggestions that we might are pure hype. But there's also the fact that the agents would need to operate in the real world, performing physical design, construction and maintenance. Even if this were possible, it seems far from desirable. To do so would require a far higher and continuously renewing level of ability, but genAI can't achieve this kind of self-improvement internally; any LLM that feeds on its own outputs, or the outputs of other LLMs, inherently deteriorates. Novelty, new training material, and innovative development, has to come from the very human skills that are likely to be eliminated by genAI.

We're setting ourselves up for an industry-wide collapse, at some point in the future. How far away that is, and what damage we'll have done in the meantime, is hard to know. If we're "lucky", this failure occurs fairly soon, while we still maintain some level of skill. If not, we could set ourselves back by a generation or more. Whether we wait for this collapse, or recognize its risks and avoid it by steering back towards keeping skills human, we'll eventually have to recognize that cognitive delegation is not sustainable, and has to be rejected. The professional thing to do is therefore to reject it now, before further harm can be done.

----
[More writing on LLMs](.)

----