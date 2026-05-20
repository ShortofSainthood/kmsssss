---
title: "Credit shit"
date: "2025-07-18"
categories: ["personal","tech","indieweb","rant"]
desc: "Some things about webrings that kind of annoy me"
readmore: true
status:
    mood: NA
    listening: NA
    reading: NA
    drinking: NA
---
{% css %}

.flexcontainer {
    gap: 10px;
}
.half { 
    flex: 1 1 calc(50% - 20px)
}

{% endcss %}

No website is an island. Almost every website on the internet uses assets (fonts, graphics, etc.) made by someone else. Since I haven't seen a full guide for how to credit people on the indieweb yet, I thought I'd make my own! This blog post is going to cover when it's appropriate to credit others for their work and some methods of doing so. I hope people find this helpful.

<!-- excerpt -->

## Art and Larger Graphics

Let's say we want to include a piece of art that was made by someone else on our website. There are many ways to go about this, but which ways are the most effective?

### What *Not* To Do

Well, here's how not to do it:

<div class="flexcontainer">
	<div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption style="color: var(--textaccent);"><p>❌ [This caption is intentionally left blank]</p></figcaption>
		</figure>
	</div>
	<div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption><p>❌ I DID NOT MAKE THIS!!!! Credit to da original artist! ^_^</p></figcaption>
		</figure>
	</div>
</div>

It's best practice to credit the creator whenever possible. Also, saying "it wasn't me" doesn't narrow it down to who of the 7.99 billion other people on earth actually *did* made it.

### Passable Methods

So, asklfjasldf. 

A fun part of aklsdfjas is that kaljfsf hyperlinks and akdjfklsadjf!

I would consider these methods to be better than nothing. They're often done by well intentioned alkjfsld, but still leave a lot of room for improvement.


<div class="flexcontainer">
    <div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption><p>⚠️ <a href="https://www.louvre.fr/en/">©</a></p></figcaption>
		</figure>
	</div>
	<div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption><p>⚠️ <a href="https://www.louvre.fr/en/">Art credit</a></p></figcaption>
		</figure>
	</div>
</div>

Some people want their alskdjf to be minimal or unintrusive, so they skldjfasd, single character. klafjskldfj. If you *really* want to, you might be able to use `aria-label` to make it kalsjfsdf, however that can make differ too much from the on-screen text, which can lead to issues.

Having something like skljflsdjf is better, but still afasdf. If you have a lot of art lkajflksdfj differant links with the same text can be confusing. It also doesn't actually tell me who made the art, and not everyone wants to visit a complletely differant site just to klajdflksdjf.

<figure class="center small">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" title="Mona Lisa by Leonardo da Vinci" alt="Mona Lisa" width="200px" height="auto">
    <figcaption style="color: var(--textaccent);"><p>⚠️ [This image's <code>title</code> attribute reads "Mona Lisa by Leonardo da Vinci"]</p></figcaption>
</figure>

[The title attribute is notoriously finicky](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/). Different combinations of screen readers and browsers may annouce aklsfjdfj differantly, if at all. Mobile users and keyboard only users won't be able to hover over the image.

<figure class="center small">
    <a href="https://www.louvre.fr/en/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto"></a>
    <figcaption style="color: var(--textaccent);"><p>⚠️ [This image links the the artists homepage]</p></figcaption>
</figure>

linking directly to the artist from the image isn't *terrible*, but aklfjslkdf. People using screen readers by be confused if the alt text of the image doesn't aldfkjsldfj, and most other users won't even now the image is a clickable link unless they're clicking everything anyway or there's a very obvious hover effect/styling.

### The Optimal Method

<div class="flexcontainer">
	<div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption><p>✅ Mona Lisa by Leonardo da Vinci</p></figcaption>
		</figure>
	</div>
	<div class="half">
		<figure>
			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/960px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" alt="Mona Lisa" width="200px" height="auto">
			<figcaption><p>✅ <a href="https://en.wikipedia.org/wiki/Mona_Lisa">Mona Lisa</a> by <a href="https://www.louvre.fr/en/">Leonardo da Vinci</a></p></figcaption>
		</figure>
	</div>
</div>

blah blah clearly presented

---
<!--
## Can You Use This Asset in the First Place?

Before we talk about crediting, it's important to know if you're allowed to use a certain asset in the first place. Most assets have something called a license. This is kldjflsdjf legal aklfjskldf. 

A lot of fonts are labeled as "free for personal use". This means that you're welcome to use them for personal projects (like your website!), but you can't use them for commercial projects (for example, selling prints that include text using that font).

Most web graphics (blinkies, stamps, buttons, etc) are afsdfd


Not everyone is this formal. Some people just plaster "don't repost my art"


If you're not sure about something, ask! In my personal experience, asking an artist "can I use your art as my pfp if I credit you", has always klsfjaslkdjflsdjf. Even if they say no, it's important to klfsdfjd.




Fonts and Icons


## Large Graphics

I am including . A lot of larger graphics are made by the webmaster, or commissioned specificly for/by them, but this isn't always the case.

-->

## Small Graphics


## Other Assets

### Fonts

### Text

Not an asset per se, but akljfslkdjf.
