---
description: 'Responsibility and "programming" in Stochastic Tools'
title: 'Lack of control does not mean lack of liability'
---

_The following is a collected thread im response to an interesting post on how people differ in the assignment of responsibility between chatbots (anthropomorphized) and self-driving cars (seen more as machines):_

While the anthropomorphization point is true, I think describing genAI systems as "programmed" also gives a false impression. While they rest entirely on, and within, software systems, the models themselves do not follow the "if this, then that" logic that describing them as "programmed" implies. 

Unlike programmed systems, which embed a logical process, genAI models (LLMs) embed a mass of *information*, of the past experiences of other entities. The "instruction" to an LLM is therefore (roughly) "find similar situations to this and respond in a (statistically) appropriate way…

… potentially on a word-by-word basis". This statistical (and therefore unpredictable and non-reproducible) element is what's referred to as "stochastic". Whether output is valid depends on the properties of the statistics, whether the "past experience" is sufficiently relevant to this situation…

The validity of output also depends on whether the model has enough context specific to the current case; this can be really tricky both because that context can be very esoteric knowledge captured in a human mind, and because models aren't constantly updated - training a model takes $millions

To return to "programming" an LLM and what that implies, we must remember that every part of an LLM's input is used statistically, not absolutely. You cannot program an LLM with "don't do X"; you can add it to its instructions, but that just embeds it into the prompt, and it will "consider" it…

but (assuming for example that your LLM can access files and websites in general), any instruction "don't delete important files, or upload them to novel locations" will just be weighted into the model, and can be effectively ignored.

This is not to say that the creators of genAI models are not causally responsible for their actions. They are responsible for all actions the model *could* take! But they have not specifically programmed those actions, and therefore likely don't even know the full range of those actions could be!

Therefore *hard* constraints on LLM behavior have to be applied externally - which can be hard when the model could statistically do anything. To write deterministic controls of "you can access the web; don't hack, fill out police tip forms, or try to apply to a visa" is likely impossible, so…

putting an LLM in a position where it can access the web is a potential, statistical risk; this risk multiplies when you also give the machine access to bank accounts, passwords, all files on your hard drive etc. It also increases when you add specific capabilities to your model, eg web access…

and so a genAI model becomes ever more dangerous once you've also trained it to hack, create videos, impersonate humans (either generally, as in appear human to another human, or specifically, to deepfake a specific human).

So the only responsible way to operate, eg, an LLM that can hack is to MAKE DAMNED SURE, externally to the model, it can't access the open internet, but only your test systems. Doing so is not particularly hard from a networking viewpoint, so long as the model can't reconfigure that network.

Equally, failing to lock a model's external environment down adequately, which *is* a causal, "programming" task, is pure negligence, in exactly the same way that testing weapons, or doing dangerous chemical or industrial work, or germ research, in insufficiently controlled environment would be.

So the existence and use of LLMs/genAI *requires* programmers (so the drive to replace them is problematic, see bsky.app/profile/did:...), but this does not mean that any LLM's behavior can ever be strictly programmatically controlled, only that the ability that it has to act on it *must* be.