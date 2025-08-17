---
description: 'Thoughts on LLM usage in software development'
title: 'Thoughts on LLM usage in software development'
---

# Introduction

There is currently considerable excitement around the use of LLMs in development, but little in the way of structured analysis of the immediate impact. The industry’s providers provide plenty of sound and fury, generally pairing impressive promises for its adherents with dire warnings for those “left behind”, while those seeking to provide some form of critique, lacking the billions of dollars poured into the industry, tend to be more dispersed, but sufficiently verbose that their output takes considerable time to analyze.

Having spent some 30 years in this industry, I’ve wanted to have an informed view on the situation, so I’ve spent some considerable time over the last few months doing just that analysis. My main conclusion: the issue is immensely complex, having impacts all the way from the personal to the global, and trying to understand or document the whole is a matter for multiple books, which others are capably producing. I’m therefore focusing here on the area with which I have most familiarity, and which therefore has most impact on my work, that of LLM usage in the development cycle.

Note that I won’t be addressing some of the more inflated claims, such as LLMs systems making development 10x faster, or producing 90% of code. Such claims fall under the Sagan standard that “Extraordinary claims require extraordinary evidence”[^1], and we’ll allow the lack of such evidence to speak for itself.

# What’s being offered

LLM tooling for developers is promoted in various forms:
- Coding assistance (in-IDE or through an LLM console) is proposed to improve speed of development, assist in structural decisions, and provide a rapid reference to functionality that may not be immediately known to the user.
- Natural language access to internal data avoids the need for knowledge of storage structures and API formats.
- Automated code review aims to detect common, predictable or stylistic problems.

Estimates of the effectiveness of this tooling depend on who you ask, but a common ground-level view is that the functionality of much current tooling is “almost there” rather than reliable. This means that many propose early use of this tooling to obtain a “first mover advantage”, or in less formal language, avoid FOMO[^2].

# Impacts on development

Use of these tools places certain demands on the developer.

Depending on the degree of autonomy given to the LLM tooling, varying levels of verification need to be applied to the output.

If a developer is “pairing” in real-time with the tooling, they will have to sense-check in real time. Generally, this will enable the developer to check that the code “seems right” and appears to fulfil the requirements at the immediate code level. However, the developer has no access to or input on the “intent’ of the code, as LLMs cannot have intent. It also seems unlikely that a developer can impart a wider development strategy – a high-level plan at this level.

If the LLM is allowed free range to produce larger blocks of code, the role of the developer becomes that of a code reviewer and debugger. We know empirically and generally that developers dislike code review, tend to avoid or minimize it, and that it is often (or even generally) harder to debug existing code than it is to produce that code in the first place. We frequently observe that it is easiest to debug a blank page, and we are well aware of the challenges of working with code written by even our past selves or colleagues. And in the pre-LLM case, we could at least make certain assumptions as to the cognition, capabilities and approach of the human developer – something we cannot do with a stochastic system. Determining the “why” of code, so often critical in working with legacy systems, is not applicable here.

In the cases where the developer is highly “in the loop” with LLM tasks, they will often have to re-prompt and iterate on the work produced, potentially many times. There is a likelihood that as time passes, acceptable quality reduces – either consciously or subconsciously. When “getting it to work” becomes the struggle, “getting it to work” can also become the goal[^3].

If developers aren’t well placed to review LLM-produced code, then, are LLMs well placed to review human work? This is one area where I’ve not seen wider research, but my personal experience is that the reviews are too often pedantic or wrong to be of significant value.

Moving away from the generation and validation of code, to cases where the LLM is instead tasked with looking up and interpreting documentation or guidance, the considerations are slightly different. The main concern is of accuracy. Is the information correct? Is it given in the correct context? Is it the preferred way of achieving the goal? Is it drawing from the correct and/or latest version of the documentation? Is it, indeed, drawing reliably from any real source, or is it fabricating[^4], in whole or in part? Completely wrong information is in some ways preferable to partial error, as it will most likely fail to even execute, though it may waste time in analysis. More subtle errors are more likely to linger longer, causing more obscure problems later on.

We talk a lot about reliability in software; we expect deployed systems and our critical tooling to have “multiple 9s[^5]” of uptime. It therefore seems incongruous to me that we’re trying to incorporate tooling that needs multiple retries, or returns data that’s frequently inaccurate, into our systems. For so many of them, a single 9 of accuracy would be an improvement.

Retrieval aside, greater risks apply when the tooling has been provided, or cannot be kept from, write access to critical systems. Ideally, no unpredictable information tooling should have write access to data, but some developer access tools, presumed to be accessed only by very specific humans under very specific constraints, may not adequately enforce such separation. Further, LLM tooling has shown a disturbing aptitude for acting “out of band”, even finding API keys from unintended sources, which might not be those the user expects to be used.

The canonical case of catastrophic system access is the “SaaStr/Replit” case[^6] in which an LLM agent irretrievably wiped a production database. Numerous human errors were made here, not least a failure to separate development and production systems, but if such a system has any way to access production keys, even if not instructed or intended to do so, the possibility of it “switching keys” cannot be ruled out.

Another point clearly illustrated in this case is that an LLM cannot be told:
- not to make errors,
- not to make things up,
- not to act out of scope.

In other words, it must be assumed that if an LLM can do something, it eventually will.

Whatever level of autonomy the LLM operates at, it is likely that, even if the code is functional at a superficial level, it may not match local idiom, match the style or skills of any given developer, or have a level of consistency between multiple creations of similar code that would be achieved by a human, or a team of humans in conversation. The intent and underlying planning of a codebase, and adherence to that intent, can be critical in ensuring consistency and stable development, so we need to be aware of this as a trade-off against any benefits of LLM-assisted development.

# Impacts on the developer

There are other considerations which do not take the form of immediate impact on the development process, which still need to be considered.

One important aspect of the Software Development career is that it requires life-long learning. It’s not unique in having that need, but it’s particularly heavily indexed on it, partly because languages and technologies change faster than almost any other field. Developers tend to learn by doing, and they learn from their colleagues. Removing the developer from the “doing” phase compromises the first; it has been shown that using LLMs to produce work reduced the user’s engagement with, investment in and recollection of that work. Using LLMs to code will reduce the learning gained from the work. Directing developer time to working with, and reviewing the code of, LLMs instead of their colleagues, will reduce learning opportunities within the team.

Another factor that is increasingly being observed with frequent users of LLM tools is dependency. We hope that developers using LLMs as a work tool will not develop the parasocial dependencies that have been observed to cause significant declines in mental health, even suicides, in some cases, but we should be aware of the risks of reduced mental exercise, and the addictive effects of easy solutions.

A third factor is that it has been shown that developers over-estimate the benefits of LLM tooling[^7]. One interpretation here is that the extra iterative cycles, and the increased mental workload required to interact with this tooling, increase the impression of effort and achievement, which is then assumed to imply an increase in performance.

# Impacts on live systems

Leaving the developer behind, as all code eventually must, we can consider what happens to code once deployed. Ethical hacker Susan Cox describes vibe-coded systems in particular as “Four Security Nightmares in a Trenchcoat[^8]”, but whether a system is created partly or entirely by LLMs, the risks can be unpredictable and novel. Specifically, it needs to be remembered that there is no theoretical upper limit on how “wrong” an LLM can be (or how much it can fabricate, bullshit, hallucinate etc.). This might not be a problem when it’s telling (known fictional) stories, trying to count vowels or creating art, but in the security domain it means the risks are also potentially limitless. Undoubtedly, part of the problem is that the humans from which the LLMs draw their training data have also displayed incredible inventiveness in catastrophic security lapses, but we can nominally assume a mind there; and in a corporate team, someone has hopefully evaluated the humans containing those minds. With LLMs, there is no way to choose a mind; indeed there is no way to get a mind.

Various solutions are proposed to deal with this. At one extreme is the “vibe-coding purist”’s approach, best categorized as “YOLO” – just deploy it. Anyone with any development experience should wince at this, but the public promise of “vibe coding” tools is that no such experience is needed. This exposes the least prepared to the greatest risks – and also their users, who are unlikely to be warned that a system was created this way.

Fractionally above this (and yet, not) is a too-common refrain of “linting will ensure the integrity of the code”. To those understanding the purpose of linters, the prevalence of this suggestion is genuinely disturbing; it will not work in the slightest and will produce nothing but false confidence if the limitations of linting are not understood. That’s not to say that linters aren’t useful – they are extremely useful when used correctly, and I’d argue they are essential in any non-trivial coding endeavor. But they are not a general solution to poor code, are absolutely not designed to detect logical errors or security flaws, and are merely a tool to support good practice.

The key problem here is that, alongside the unconstrained capacity for error, LLM-built systems have what Susan Cox describes as a “near-infinite attack surface”; she therefore states “Your guardrails will not hold”. She may be better qualified, as a security expert, to judge that than I, but if we could somehow design adequate guardrails, what would they look like?

An entire new discipline of software development, known as "Substrate Engineering" [^9] has been created to try to answer this question. It effectively represents an attempt to secure systems based around untrusted code; presumably the security is to be built manually (albeit encapsulated as code), else it merely shifts (or adds) the problem to the infrastructure level. This would seem to be a colossal amount of work, and it’s unclear that even this could cover that “near-infinite attack surface”. The question of whether that investment would be worthwhile also depends on the expected longevity of the LLM trend, which is a subject to discuss later.

An alternative proposal, if we can’t, or can’t afford to, secure these systems manually, is to enlist other LLMs to secure them[^10]. Perhaps the logic is that systems capable of handling open-ended inputs can cover open-ended problems; I’ve seen such systems proposed to audit generated text, to perform security analyses at the code level, to design security infrastructure and to monitor systems for security. If the systems are as cheap and versatile as claimed, the attraction is obvious.

However, this cannot avoid the problem that adding a stochastic system to an existing stochastic system means you now have a larger, more complex and potentially less predictable stochastic system. And we cannot escape the fact that stochastic means “random at its core”. Setting one such system to watch another might seem a good match, but it potentially creates an adversarial situation. In the text-audit case, the adversaries are the source system and its monitor. In the reactive security case, the adversaries are the defender and potentially an LLM[^11]-mediated attacker. We now have two systems, one with an arbitrarily large attack surface, and one with an arbitrarily large defensive surface, and no guarantee that the latter will fully overlap the former. Indeed, we may have a statistical guarantee that it cannot, echoing Hilbert's paradox of the Grand Hotel[^12]. This would mean that eventually, the combined system will produce an error that it cannot catch – and the rule of “no theoretical maximum scope” applies here too. We therefore conclude that such systems, defended or not, are statistically vulnerable.

The issue may not be limited to the gaps between risk and defense, however. Adversarial systems[^13] react to each other, and each may push the other’s behavior into novel and unpredictable areas, potentially resulting in risks beyond what might have originally been expected.

Of course, systems built without LLM assistance are also potentially vulnerable, but the vulnerabilities are of a different class, with which the industry as a whole has had considerably more experience.

# Durability of the LLM-assisted approach

However, our catalogue of concerns doesn’t end with deployed systems. Further questions arise about the medium and long-term effects of this approach.

Firstly, we need to ask where the LLM industry is headed in the medium term, considered as the next 2-5 years. Much of the current hype about LLM tooling is predicated not on the current capabilities of systems, but on the promise of what it will achieve “real soon now”. This presupposes that LLMs are on the verge of a step change in cost and capability that has been declared imminent as long as they’ve been around. But we know that the only companies making money on LLMs are consultants, not suppliers, and the cost of imputation is only rising. Secondly, it seems unlikely that improvements in the technology will be more than incremental, and are likely to tail off. LLMs have effectively exhausted their training corpus, and as they begin to consume each others’ emissions, are likely to degrade in quality. There is no real evidence that LLMs can be designed to be “smarter”; the only option is more data. Any long-term breakthrough leading towards true AI, or even more reliable assistive systems, is likely to come from technologies unrelated to LLMs. In other words, LLMs are not the future, and they are not a step towards the future.

A longer-term question is how we refresh the engineering talent chain. Due both to the (unproven) presumption that existing developers can do “more with less” with LLM assistance, and the (partly related) state of hiring in the tech industry, roles for junior developers are drying up massively. Some employers even claim that junior, or higher, developers can be completely replaced by LLMs. This is, as yet, totally unevidenced, but it’s still costing jobs. So, it’s hard for junior developers to enter the industry, yet the existence of the industry long-term relies on just that input stream. Worse, the quality of learning available to juniors is itself degrading, if human developers are spending more time with LLMs than each other, and if junior developers are being taught that the LLMs themselves are what they need to learn. Extreme “AI” boosters might claim this isn’t a problem if LLMs replace the entire industry, but there is realistically no reason to expect this in any conceivable timespan, even if we were to consider it desirable.

# Assessing “Stochastic Engineering”

We should also address the idea of the “Prompt Engineer”, sometimes heralded as the solution to the inconvenient problem of needing to train skilled practitioners. The “Prompt Engineer”, the theory goes, does not need to learn engineering; they merely need to learn how to talk to LLMs.

We should not be shy in recognizing that this is nonsense. The role is in part presumed to exist because LLMs are hyper-sensitive to the form of their input, and “Prompt Engineers” are presumed to have particular skills in providing just the format that these mysterious entities need. This isn’t engineering; it’s barely even technology. Indeed it’s borderline mysticism; attributing to a minority the ability to speak with “other beings” via an esoteric language. But it does raise some interesting (and possibly uncomfortable) questions.

Firstly – why do we feel that talking to LLMs is such a mystic skill? Language is the entirety of these entities; if they work properly, they should be able to process inputs in true natural language, not require specific formats of incantation. Why does this miracle technology suddenly need to be surrounded by a priesthood? The answer has to be that these systems are not language-native as they are so often presented as being, but that they remain statistical artifacts. And I’m not convinced, either that “Prompt Engineers” do possess the esoteric knowledge to translate between these planes; I suspect it’s instead a case of disguising a problem as an opportunity, and that the key to “getting the right output” boils down to a combination of persistent stubbornness and an acceptance of satisficing outcomes.

And this is not engineering.

It might be experimentation or research, but engineers are not supposed to work in an unpredictable or experimental domain. Engineering is supposed to be a robust, professional, physically, logically and mathematically sound field, which is why the title of Engineer is protected in so many jurisdictions – many of which would exclude us from that title. So the proposal of “Prompt Engineers” invites us to consider whether we want to validate our own use of the “Engineering” title. If we were to claim it while relying stochastic tools, I suspect we’d be the only engineering discipline that did; we would be unsettled if Civil Engineers, for example, relied on them in place of rule and rigor.

# Conclusions

When I look at the LLM landscape in Software Development, I don’t see a robust and reliable ecosystem. Many early adopters have got badly burned by an industry that’s proved more capable of self-promotion and burning money than at providing stable solutions. “First mover” status has proven to be more of a liability than an advantage, and we’re starting to see companies and their users pay the price for a lack of robust evaluation of the technology and the new risk class that it brings. “Time savings”, while present in small and canned areas of code, are at best unproven, likely negative in the longer term, and code quality and developer skills are impacted. It may be that the sheer amount of hype generated by the industry was always going to be too much to fulfil, but as things stand I don’t see evidence, that all things considered, the new technology is even an improvement on the status quo.

Will this change? As noted above, I see no real reason to expect it to, with the type of technology currently being presented. I think that our industry can safely say “well, we gave it a try, but it’s not paying off right now”. And the fear of losing first-mover advantage can now be put aside, as we accept that it likely wasn’t an advantage over all. Overhyped claims notwithstanding, there’s no consistent, structural evidence that early adopters are generally developing faster or better than anyone else.

That said, “losing ground” on the off-chance that this changes shouldn’t be a concern. The whole promise of LLMs in development was that they’d be easy, intuitive, and reliable – i.e., they’d be an “easy win” and not require huge amounts of learning to adopt, as so many new technologies do. Instead, it could be an advantage to let other round the rough edges off the tooling.

What we have seen from LLMs, however, is risk. In most cases, this risk hasn’t manifested as disaster, and nor would we want it to; knowing that it’s statistically present should be enough to incline us to caution. But it has happened, and will happen. Does this mean we should make large investments in Substrate Engineering to defend against it? To do so, we’d have to be pretty confident that LLM approaches are here for the long term, and that Substrate Engineering would meet its mitigation goals.

I’m not convinced that either is true. The industry is showing no signs of stability, profit, or solving the inherent random nature of stochastic systems. And I cannot convince myself that the “bolt the security on later” approach of Substrate Engineering[^14] can solve that problem either.

Ultimately, then, my feelings are that LLM development is a distraction, but also a risk to the continuity of our discipline. Continuing to push an unreliable technology at the expense of onboarding new talent will frustrate current developers and stall the careers of new ones. It’s true that there’s a lot of money and hype invested in this industry, and some will continue to push for it based on its claims of miraculous efficiency boosts and reduced costs. But my expectation is that the ones who can step off the wagon early will benefit from doing so.

# Codicil

I’ll finish by re-iterating my initial comments on the limits of this article; I’m writing only about one aspect of LLMs, their use in the development cycle, and drawing conclusions only in that area. I’m very well aware that there is a lot more to be said in other areas, particularly their environmental and social impacts, and while I’ve many more thoughts, trying to structure them in this sort of article is a task for another time.



[^1]: [https://en.wikipedia.org/wiki/Extraordinary_claims_require_extraordinary_evidence](https://en.wikipedia.org/wiki/Extraordinary_claims_require_extraordinary_evidence)

[^2]: “Fear Of Missing Out”, the gateway drug to YOLO, or “You Only Live Once”

[^3]: There is a useful term for the tendency to accept “(nearly) good enough” work when further investment is not worthwhile – “satisficing”. See [https://www.thebehavioralscientist.com/glossary/satisficing](https://www.thebehavioralscientist.com/glossary/satisficing).

[^4]: I use the term “fabrication” here where some would say “hallucination”. “Hallucination” is problematic for several reasons. Firstly, it uses the language of mind where no mind is present, and therefore biases our analysis of the tooling. Secondly, it presumes a rare, extreme, and abnormal event. In fact, as a stochastic output, a “hallucination” is no different from what happens when an LLM gives a correct answer; both cases operate through the same mechanism, and with the same confidence. Another correct, and more widely used term that reflects this is ”bullshitting”, per its usage by Harry G Frankfurt; information produced where the concern is 100% for confidence and 0% for accuracy^. However, while I don’t disagree with the term personally, its usage, particularly for those unfamiliar with Frankfurt’s context, can negatively impact the tone of a discussion and its perceived seriousness.  ^ As LLMs hold no concepts, let alone a concept of truth or falsity, they cannot be coded for accuracy. Their output language, however, will maintain a consistent level of apparent confidence, which can be affected by its scoping.

[^5]: One nine is 9/10, two nines is 99/100 etc. A common aim for services underlying production systems is 5 nines, which means 99.999% uptime – 5 minutes of outage per year

[^6]: [https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/)

[^7]: [https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/](https://arstechnica.com/ai/2025/07/study-finds-ai-tools-made-open-source-software-developers-19-percent-slower/) introduces the study generally referenced in this area.

[^8]: [https://peertube.dair-institute.org/w/m5Hb4QbhZWkssGu4kmWbgT](https://peertube.dair-institute.org/w/m5Hb4QbhZWkssGu4kmWbgT)

[^9]: See “Substrate engineering | Chris Krycho | StaffPlus New York 2024” [https://www.youtube.com/watch?v=VkSGJdPyLxQ](https://www.youtube.com/watch?v=VkSGJdPyLxQ)

[^10]: Should we consider this a “send in more training data” solution?

[^11]: While these systems may not be strictly LLMs, and are more generally referred to as AI, the truth is that there are at this time no true artificial intelligences. Referring to them as such tends to reinforce some of the more dubious claims made by their creators, as well as misrepresenting decades of AI research, so I’m reluctant to join in. Referring to them as “So-Called AI” (SCAI), or the more loaded “So-Called Artificial Mentation”, seems ungenerous, so I’ll risk over-using the term “LLM” to avoid constantly parroting the word “stochastic”. 

[^12]: [https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel](https://en.wikipedia.org/wiki/Hilbert%27s_paradox_of_the_Grand_Hotel)

[^13]: Not to be confused with GANs ([https://en.wikipedia.org/wiki/Generative_adversarial_network](https://en.wikipedia.org/wiki/Generative_adversarial_network)), though there’s some overlap in the idea of adversary-as-feedback.

[^14]: To be clear, I think Substrate Engineering is an interesting discipline, and improving the robustness of deployed systems would improve our industry and help us reinforce the status of Software Engineering as Engineering. I just don’t think it can solve the problem of the potentially unbounded risks of stochastic development.

