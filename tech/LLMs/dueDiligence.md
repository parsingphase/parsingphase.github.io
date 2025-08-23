---
description: 'Considerations to make before using LLMs in a software project'
title: 'Considerations to make before using LLMs in a software project'
---

# Introduction

Few things in tech are as polarized as the decision of whether to use LLM tooling in development, and yet that decision is rarely structured or formalized. I believe we can and should do better than a knee-jerk reaction here, so I’ll cover some due-diligence questions we should be asking to get an answer that is safe, correct, and ideally, moral.

## Why is due diligence needed here?

But first… why is this such a big decision? Why are decisions about this tool more complex than those about any other, e.g. which IDE to use?

Because LLMs are not just a simple tool. While an IDE can have effects in terms of developer efficiency and experience, they don’t get between the developer and their code. LLMs, on the other hand, not only intercept user intent, they make direct contributions to the code, or to generation of user-facing content. As such, using an LLM is more equivalent to adding a developer, or outsourcing, than it is to a selecting the interface in which a developer works. LLMs are absolutely *not* a neutral tool, as the questions we discuss will further show.

Of course, there are many causal tooling decisions which we would consider to require such research, such as the choice of language, hosting provider etc., and we’ll also see that some of those apply to other aspects of LLM usage.

Notice that in this piece, I focus on the questions that should be asked, rather than trying to answer them as elsewhere.
# What are the considerations?

So… what should we be asking?

Well, I’m not going to provide a simple checklist, as the considerations vary with various forms of tool usage, the industry the developer is in, and the proximity with which the LLM might interact with the end-user or the system infrastructure.

However, as a *minimum*, we should meet the following requirements for LLM and related tools, all of which I’ll expand on below:
1. The tool can actually perform this task
2. The tool can perform this task *safely*
3. The tool can perform this task cost-effectively
4. The tool will remain available for as long as the project critically relies on it

Exactly how each analysis considers and weights those factors will vary, but I’ll aim to take a fairly completist view.

## 1.  Can the tool perform this task?

The first point might appear axiomatic, but that does mean it belongs in the list, even if it’d usually be considered implicit. And it’s far from unusual for “AI” to be mandated for a project without a full idea of:
 - What’s actually meant by “AI” here, i.e. if there is an understanding of which tools from those under the “AI” umbrella are to be used (and why).
 - Whether this particular tool can actually meet requirements, or whether (particularly in large corporate or government projects), the “AI can do anything” hype has been uncritically accepted.

So we need to ask:
 - Which tools are being proposed, and why?
 - Where has usage of these tools been successful in a similar goal? Is this information independent, reliable, vendor-provided? If it’s worked, or not worked, elsewhere, is that the common outcome?

## 2.  Can this tool perform the task safely?

Point 2, is a considerably larger concern; the concept of what “safely” can mean in this domain is extremely broad.

We can start by breaking out both the potentially impacted parties and the potential types of harm.

### Developers & other staff

If we’re putting the tooling between the developer and their outputs, then the developer is the first party here. Harm here can take various forms:
 - Will this tooling benefit the developer’s productivity? Research has shown that this cannot be assumed (even if the developer self-reports higher productivity).
 - Will the *expectations* on that change in productivity be accurate? If not, what will be the impact on the operator be? Will they be expected to achieve more with tooling that doesn’t actually support this, or will staffing levels be modified on these assumptions, potentially increasing workload that way? Or will the tool genuinely reduce their workload?
 - How will the developer’s job satisfaction be impacted? While each company can decide whether that’s a concern for them, it does have the potential to affect morale, productivity and turnover.

Overall, the impact on the developer should be neutral or positive.

### Service users (customers)

Potential risks to the user come in two main forms:
 - Will the built system keep their private information secure, i.e. will it meet expected standards of privacy and security?
 - Will the information the system provides to the user be consistently safe and reliable?

A third risk is present if the customer relies on constant service availability
 - Will the use of this tooling affect uptime of the service?

How might these risks manifest? While trying to remain brief, they might include:
 - If the LLM tooling is involved in the construction of the system
   - What is its effect on the security and reliability of the code?
 - If the LLM tooling is involved in the delivery of the system:
   - Does it expose the user to direct risks via user interaction?
     - Generative risks: Is the system involved in generation of information for the user? Can that information be guaranteed safe in all cases, if it relates to user finances, health, well-being etc.?
     - Secondary risks: Is it immune from third-party prompt injection, for example, and can it be relied on to give each user access only to their own data?
   - In the case where the system is providing essential social services, particularly if it replaces a human provider, is it doing so adequately, i.e. at least as well as a well-resourced human would be able to?
   - Can the tool’s availability be guaranteed?
     - Whether it’s run on the company’s infrastructure or that of a third party, what uptime can be expected?
     -  If that tooling is temporarily unavailable, what is the impact on the customer experience?

To be appropriate for customer use, the impact on the customer should be usually positive, and in the worst-case scenario, no worse than neutral.

### The company itself

Weighted against the probable benefits, what is the reputational or financial risk to the company if the tooling either fails to protect customers or staff, or potentially causes damage to internal tooling or data?

Evidently, the impact must be positive for this usage to be worthwhile for the company.

## 3. Is use of the tooling cost-effective?

At the moment, LLM tools are generally being provided at a massive financial loss to the providers, who hope for future cost reductions or scale effects to make them viable in the long term. This means that right now, the direct costs (as opposed to staff and opportunity costs) of these tools may not seem significant.

However, users need to consider not just what the tooling currently costs, but what it might cost if those provider subsidies dried up and exposed them to the real cost of the service. As it may be hard at this point to identify what these costs might be, an alternative approach here might analyze the impacts of moving back away from these tools if they were to become cost-prohibitive.

Further, the indirect costs, as well as the cost of training, and any internal infrastructure, should still be considered.

## 4. Will the tooling be available for the required term?

The “AI” industry is somewhat unusual in history, in that it forms some colossal fraction of the US economy while being somewhat new and largely unproven, to the extent that if it were to collapse, it could cause a significant recession. This alone gives us some reasons to hope that it does not vanish entirely, but planning requires rather more than hope. Despite the huge market caps, no companies are making a profit from supplying LLM services. How long this will remain the case, and how the companies survive if they can’t make a profit long-term, is unclear. As such it’s reasonable to assume that, even if the industry as a whole continues, some suppliers may not survive.

What this means to the company depends on how deeply integrated the product is into the company, and how easily an equivalent can be substituted. If we imagine that developer tooling were to become unavailable, we might hope – if the developers have maintained their skills and not become dependent on it, and the company has maintained adequate staffing and a talent pipeline, this might be a lower impact. If, however, the day-to-day provision of the service depends on ongoing availability of the tools – for example if the company is providing LLM-generated content, or live chat services, then loss of availability of this tooling could be problematic in the case of a short-term outage, and existential if no replacement service can be substituted.

## Wider concerns

Beyond the concerns specifically enumerated above, there are other factors which certain companies might consider appropriate for consideration. We can ignore the existential bugbear of AGI supplanting or attacking humanity as unevidenced and infeasible, despite the professed concern of some of the more imaginative members of the industry, but there are less apocalyptic yet still widely relevant concerns.

On an environmental level, LLM tooling requires 10-15 times the power (and this is currently only increasing) as previous systems, and we’re told to expect that new datacenters take as much power as entire states – in addition to cooling requirements which mean huge demands in fresh water usage. Given the US retreat from renewable energy, this cannot avoid both local and global environmental impacts.

On a social level, the effects of LLMs are already concerning. Incidences of LLM-induced psychosis, depression and dependence are being reported with increasing and alarming frequency. LLM output has already grossly contaminated the public sphere in terms of information quality. Creative industries in particular are contending with loss of employment and unauthorized use of their IP, while the prevalence of the “LLM voice” reduces creativity more widely. The promise that “AI will free us from work” is not useful in a society where we generally still need to work to live, and as such we can see that the effects of these tools includes increasing inequality via the centralizing of wealth and power. We can also see examples of students and patients receiving substandard levels of care when human services are replaced with machines.

Of these externalities, the environmental ones are intrinsic to all usage, while some companies will not have a direct impact in the social space. To what extent a company choses to weight these concerns is for them to evaluate, and may depend on their social position and the nature of their audience and users. But they should do so consciously, recognizing that these are not neutral technologies, and besides being internal ethical considerations, be aware that this may affect public perceptions of them.

# Sources of information

The current AI boom is often referred to as a “hype bubble”. Whether or not you agree with the analysis of it being a bubble, it is undeniable that hype is prevalent, and finding accurate and timely information is non-trivial. A balanced view of the industry and technologies will require attention to independent and academic sources, including those whose results may seem critical of the industry.

It's worth addressing why it's so important to solicit external information here, too. After all, in-house analysis or pilot programs are a recognized approach for many medium-impact tools. Here again, the unique nature of LLM tooling is the issue; LLMs can reasonably be described as "seeming machines"; their strength is in "seeming to work", i.e. projecting confidence that is inherently unrelated to actual outcome or accuracy. This can mean that problems can be masked and not appear during initial use. Some other considerations can be found in [Psychological Factors.md](psychologicalFactors.md).


# Conclusion

Ultimately (at least, without significant legal changes unlikely to occur in the US in the near future), it is down to each company to choose the level of due diligence they apply, and whether they are prepared for any consequences for failing to do so. Further, it’s down to each company to weigh the factors they consider appropriate. However, as a matter of risk management, this decision of whether, and how, to make such an assessment should be recognized and deliberate, and any assessment made should be recorded for future reference.
 
 

