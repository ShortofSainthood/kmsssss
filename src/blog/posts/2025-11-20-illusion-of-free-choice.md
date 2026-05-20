---
title: "Generative AI and the Illusion of Free Choice"
date: "2025-11-20"
lastUpdated: "2025-12-02"
categories: ["AI","tech","rant"]
desc: "You can't just choose not to engage with AI"
metaimage: "/assets/images/acjtnk.jpg"
readmore: true
status:
    mood: "frustrated"
    listening:
        song: "Caroline Polachek - So Hot You're Hurting My Feelings"
        link: "https://www.youtube.com/watch?v=sn3cHUtNZKo"
    watching: "SnapCube"
    playing: "PawBorough"
---

I've seen a few different people talk about the uprise of the "zero-click internet". For those unfamiliar, in a nutshell the "zero-click internet" refers to how search engines now use AI summaries to answer questions, so users don't actually have to click on links or visit sites anymore.

There are obviously a lot of problems with this. [AI overviews are notoriously buggy](https://www.reddit.com/r/atetherock/). They often get stuff wrong and the sources for said info is often missing or misattributed, but you probably already knew that. Smarter people than me have already pointed all of this out and analyzed it in depth.

Something I haven't seen as many talk about, however, is that even if you turn AI summaries off, the search results still suck.

<!-- excerpt -->

I have AI disabled on pretty much everything I own, including search engines. I don't like it and, like I said, half the time the info is wrong anyway, so there's no point in leaving it on.

A situation I run into a lot is I'll have a question, so I'll search for it. For example, the other day I searched "why do horses lick salt rocks?". Several websites came up, I clicked on a handful of them. One of them gave me a malware warning, the rest were full of (probably AI-generated) prose that didn't even answer my question. Each website takes an inordinate amount of time to load and when I inspect element there's a ton of scripts running in the background (likely some kind of analytics).

Unfortunately, most modern sites misuse [semantic HTML](https://en.wikipedia.org/wiki/Semantic_HTML) in an attempt to raise their SEO. For example, if you search for "horse", google is more likely to show you pages that have "horse" in the page title or in one of the pages headings. In theory, this is a great idea. It places weight on keywords depending on their semantic role.  Sites about horses are more likely to have "horse" somewhere important like that. It prioritizes sites that are actually *focused* on horses, rather than sites that just offhandedly mention the word somewhere in a random paragraph. In practice, however, many sites have abused this to get higher in search results.

So, what you end up with are these massive pages with dozens of headings that sort of resemble FAQ pages at a glance, but once you actually start reading them you realized most of it is meaningless fluff, likely written by an LLM. They have "why do horses lick salt rocks?" as one of the headings, so it comes up in search results, but none of the text on the page actually answers the question. Someone (or more likely, some kind of bot) found the most common horse questions and formatted it into a website that they can place a bunch of ads onto.

Eventually I just gave up and headed over to Wikipedia instead. I went to the article on horses, which links to the article on [equine nutrition](https://en.wikipedia.org/wiki/Equine_nutrition). That article cites [Nutritional Management for Horses](https://www.extension.purdue.edu/extmedia/as/as-429.html) from Purdue University's Cooperative Extension Service. Here's an excerpt:

>"Salt (NaCl) aids the \[horse's\] body in fluid and temperature regulation. In hot weather, the temperature of the body is controlled by sweating. Water, salt, and other minerals are given off and need to be replenished. The salt intake of a horse is directly proportional to the water intake."

Finally, an answer to my question!

However, most people aren't going to be as diligent as I was. Sure, I only clicked three links, that might not seem like a lot, but most people want their answers *immediately*, they don't even want to have to click *one* link. I imagine a lot of people will just get frustrated and turn AI summaries back on, if they ever had them turned off in the first place.

Some of the sources Wikipedia uses are only accessible via the [Wayback Machine](https://web.archive.org/), so they wouldn't show up via normal search indexing anyway. The only reliable ways of finding them is through Wikipedia or the Internet Archive itself.

The funny thing is, if you use the AI summary and check the source, it's almost always either Wikipedia, Reddit, or one of those SEO spam sites. It's sites with AI-generated content, being skimmed and summarized by an AI. If you turn off the AI summaries, you still have to deal with the websites it would be sourcing from. No matter what you do, it's all AI.

<figure>
	<img src="/assets/images/acjtnk.jpg" alt="The illusion of free choice">
	<figcaption>
		A drawing with the text "The illusion of free choice". It shows a cow in front of a maze with two entrances. One entrance is labeled "reading a shitty AI summary" and the other is labeled "reading a shitty AI-generated website". Both paths of the maze lead to the same place, which is labeled "Reading Shitty AI".
	</figcaption>
</figure>

The reason I write all of this is because I think some people have this misconception that if you don't like AI you can just choose not to engage with it. Just adjust the settings, just don't visit sites you don't like, etc, etc. I don't know how else to explain that I already tried that, they're literally *everywhere*, no matter what you do, even the most basic of questions.

I fucking hate it.

## Addendum 2025-12-02

Apparently, [Wikipedia has started allowing AI generated content in their articles](https://en.wikipedia.org/wiki/Wikipedia:Large_language_models). In fairness, they're a lot more nuanced about it than other sites are. They don't allow AI to write whole articles from scratch, but do allow it for things like copyediting. All AI-made edits still have to go through the same approval process as any human-made edits.

I still have some concerns, though. If an LLM gets its data by scraping Wikipedia articles, and then people use that LLM to edit Wikipedia, is that not just an ouroboros of information? People usually talk about "AI inbreeding" with respect to generated photo or video, but does that not also apply to text? Not trying to be a smartass, I'm genuinely asking.

*[SEO]:  search engine optimization
*[LLM]:  large language model
*[LLMs]:  large language models