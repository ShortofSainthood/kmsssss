---
title: "Webmastery Links"
layout: base.njk
desc: "Some resources to help you make the most out of your website!</p><p>Links marked with a \"⭐\" are personal favorites of mine."
lastUpdated: "2025-07-12"
showLastUpdated: true
eleventyNavigation:
  key: Webmastery Links
  parent: Link Directory
TOC: true
showDesc: true
TOCsidebar: true
---
{% css %}
    li.fave {list-style-type: "⭐ ";}

/*
    h3, h3 ~ p {
        margin-left: 1.5rem
    }
*/


h3, h3 + p, h3 + ul, h3 + p + ul, h3 + p + ul + p {
        margin-left: 1.5rem
    }



{% endcss %}

## General Resources { #general }
* [Awesome Lists](https://github.com/sindresorhus/awesome) - Tech resource directory. Here are some awesome lists that are specifically relevant to basic web development:
    * [Awesome HTML](https://github.com/diegocard/awesome-html5)
    * [Awesome CSS](https://github.com/awesome-css-group/awesome-css)
    * [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)
    * [Awesome PHP](https://github.com/ziadoz/awesome-php)
    * [Awesome Selfhosted](https://awesome-selfhosted.net/)
* [Comparison of Different Web Hosts](https://kalechips.net/stuff/hosting)
* [HTML Cheat Sheet](https://htmlcheatsheet.com/)
* [HTML for People](https://htmlforpeople.com/) - A more practical, people-oriented guide to HTML.
* [MDN Web Docs](https://developer.mozilla.org/en-US/) - Comprehensive, in-depth documentation for all things web development! (HTML, CSS, Javascript, HTTP, common web APIs).{ .fave }
* [W3Schools](https://www.w3schools.com/) - *The* absolute best place to learn web development for beginners *and* its totally free! 100% recommend for anyone just getting started!{ .fave }

## CSS { #css }
* [CSS Background Patterns](https://www.magicpattern.design/tools/css-backgrounds)
* [CSS Pixel Border Maker](https://maxbittker.github.io/broider/) - Also includes a bunch of pre-made borders you can use.
* [Hover.css](https://ianlunn.github.io/Hover/) - CSS hover/focus effects.
* [How to Style Broken Images in CSS](https://bitsofco.de/styling-broken-images/)
* [Realtime Colors](https://www.realtimecolors.com) - Preview color palettes for your website.

## Javascript { #js }
* [Indent.js](https://zebzhao.github.io/indent.js/) - Indents your JavaScript for you.
* [The Modern JavaScript Tutorial](https://javascript.info/)
* [Moment.js](https://momentjs.com/) - JavaScript library for parsing and formatting dates/times.
* [Vanilla JavaScript Repository](https://vanillalist.top/) - Lightweight Javascript that doesn't use JQuery or other external libraries.

## Fonts { #fonts }
* [CSS 101: Fonts](https://www.beepbird.net/css-basics/2027-07-21-4.-fonts.html) - A guide to styling and using custom fonts.
* [Google Webfont Helper](https://gwfh.mranftl.com/fonts) - Resources to help you self-host google fonts.
* [System Font Stack](https://systemfontstack.com/) - A guide to pre-installed system fonts.

## Frameworks { #frameworks }

### Blogging Engines { #blogging }
* [Chyrp Lite](https://chyrplite.net/)
* [TinyBlog](https://github.com/petabyt/tinyblog)
* [Zonelets](https://zonelets.net/) 
    * [Accessible Zonelets](/code/projects/accessible-zonelets/)
    * [Zoner](https://ryantrawick.itch.io/zoner) - A static site generator for building Zonelets-style blogs.
    * [ZoneRSS](https://adamledoux.net/zoneRSS/) - A Zonelets-compatible RSS feed and posting tool.

### Image Galleries { #galleries  }
* [Kale's Static Accessible Gallery Generator](https://kalechips.net/projects/code/static-gallery/info) { .fave }
    * [Accessible Eleventy Gallery](/code/projects/accessible-eleventy-gallery/)
* [Melons Gallery Maker](https://melonking.itch.io/melons-gallery-maker)

## Accessibility { #a11y }
* [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
* [A11y Syntax Highlighting](https://github.com/ericwbailey/a11y-syntax-highlighting/tree/main)
* [Colorblind Web Page Simulator](https://www.toptal.com/designers/colorfilter)
* [How to Style Focus Outlines](https://medienbaecker.com/articles/focus-outlines) { .fave }
* [Owly's Accessibility Tips](https://owly.fans/accessibility/)
* [Randoma11y](https://randoma11y.com/) - Randomly generates color combinations with high color contrast. { .fave }
* [WebAIM](https://webaim.org/) - My go-to source for web accessibility info. Here are some pages that I think are especially helpful: { .fave }
    * [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
    * [Creating Screen Reader-Only Content](https://webaim.org/techniques/css/invisiblecontent/)
    * [HTML Semantics and Accessibility Cheat Sheet](https://webaim.org/resources/htmlcheatsheet/)
    * [Implementing "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### Evaluation Tools { #evaluationtools }

These tools scan your page and automatically detect possible accessibility issues. These aren't foolproof, but can still be extremely helpful for finding problems you might not have ever noticed otherwise.

* [Axe DevTools](https://www.deque.com/axe/devtools/) - The wording on the official website would make you think you have to sign up or that it's only a free trial, but the full free version is still available for browsers:
    * [For Chrome](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1){ aria-label="axe DevTools at the Google Web Store" }
    * [For Firefox](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/){ aria-label="axe DevTools at Mozilla Add-ons" }
    * [For Edge](https://microsoftedge.microsoft.com/addons/detail/axe-devtools-web-access/kcenlimkmjjkdfcaleembgmldmnnlfkn){ aria-label="axe DevTools at Edge Add-ons" }
* [IBM accessibility checker](https://www.ibm.com/able/toolkit/tools/#develop){ .fave }
* [WAVE Web Accessibility Evaluation Tools](https://wave.webaim.org/)

See also: [Web Accessibility Evaluation Tools List ](https://www.w3.org/WAI/test-evaluate/tools/list/)

## Layouts & Templates { #layouts }
* [Almostsweet's Layouts](https://almostsweet.neocities.org/design)
* [Eggramen's CSS Test Pages](https://eggramen.neocities.org/code/css_testpages)
* [Kalechip's Layouts](https://kalechips.net/projects/layouts/)
* [Lilaclynx's Layouts](http://lilaclynx.net/layouts.html)
* [Neothemes](https://neothemes.neocities.org/)
* [Beepbird's Templates](https://www.beepbird.net/freebies/site-templates/website-templates.html)
* [Sadgrl's Layouts](https://goblin-heart.net/sadgrl/webmastery/layouts/)
* [Templaterr](https://templaterr.neocities.org/)
* [Tentacool's Layouts](https://codesharing.neocities.org/directory/layouts)
<!-- and of course, my layouts -->

### CSS Frameworks { #cssframeworks }

These aren't full layouts. These are stylesheets that have very few or no classes, and can be applied to *any* HTML file right out of the box.

* [Ground Floor](https://groundfloor.neocities.org/)
* [Lissom.CSS](https://lissomware.github.io/css/)
* [Tufte.CSS](https://edwardtufte.github.io/tufte-css/)
* [Water.CSS](https://watercss.kognise.dev/)

## Snippets { #snippets }

Bits and pieces of code that can be incorporated into larger projects.

* [Codemyui.com](https://codemyui.com/)<!-- - HTML, CSS, JavaScript-->
* [Kalechip's Code Snippets](https://kalechips.net/projects/snippets)<!-- - HTML, CSS, JavaScript, PHP-->
* [Phuoc.ng](https://phuoc.ng/)<!-- - HTML, CSS, JavaScript-->
* [Sadgrl's Code Snippets](https://goblin-heart.net/sadgrl/learn/sections/snippets)<!-- - HTML, CSS, JavaScript-->
* [Shadow's Theme Bits](https://web.archive.org/web/20231205090044/https://patchworkofshadows.neocities.org/eng/other/design/theme_bits)<!-- - HTML, CSS-->
* [W3 ARIA Design Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/)<!-- - HTML, CSS, JavaScript--> { .fave }

## Web Directories{ #directories }

Lists of websites that you can browse to find cool new sites, or join so that more people visit your site. This section also includes webrings, fanlistings, cliques, etc.

* [Ray's Webring List](https://brisray.com/web/webring-list.htm) { .fave }
* [Ray's Indie Web Directories](https://brisray.com/web/indiedirs.htm) { .fave }
* [Webri.ng](https://webri.ng/)
* [Neocites sites tagged "webring"](https://neocities.org/browse?sort_by=followers&tag=webring)
* [My (not so good) web directory/webring list](/links/webmastery/directories)

### Fanlistings{ #fanlistings }
* [The Fanlistings Network](https://thefanlistings.org/)
* [The Anime Fanlistings Network](https://animefanlistings.com/)
* [The Movielistings Network](https://themovielistings.org/)
* [Alter Listings Network](https://alterlistings.wordpress.com/)
* [Fans Fans Fans](https://fansfansfans.net/)

### Cliques{ #cliques }
* [Cliqued!](https://cliqued.wings.nu)
* [Project CLIQUE](https://project.shadow-lord.com/)
* [Tricky Fox Cliques](https://ballonlea.net/trickyfox/)

## Web Graphics { #graphics }

<div class="box callout warning">
    {% lucide "triangle-alert", { "size": "32" } %}
    <p><strong>Some of these sites contain fast/flashing GIFs.</strong> Please proceed with caution if you have photosensitivity.</p>
</div>

### 88x31 Buttons { #88x31 }

The classic gray buttons that you'll see on a lot of older sites.

* [88x31 Database](https://88x31db.com/)
* [88by31.neocities.org](https://88by31.neocities.org/)
* [The 88x31 GIF Collection](https://cyber.dabamos.de/88x31/)
* [Lucas's button collection](https://anlucas.neocities.org/88x31Buttons)
* [Hekate's button maker](https://hekate2.github.io/buttonmaker/)
* [Sadgrl's button maker](https://goblin-heart.net/sadgrl/projects/88x31-button-maker)

### Blinkies { #blinkies }
* [blinkies.cafe](https://blinkies.cafe/) - A site that lets you make and share blinkies online!
* [How to make a blinkie in any image editor](https://blinkies.cafe/blog/2022-05-14-how-to-make-blinkies)
* [How to add a crossfade effect to your blinkie](https://www.tumblr.com/transbro/703092811459952640)

### Smilies { #smilies }
* [Mazeguy Smilies](https://mazeguy.net/smilies.html)
* [YourSmileys.org](https://yoursmiles.org/)

### Misc Graphics { #miscgraphics }
* [22,000 Animated GIFs](https://drive.google.com/drive/folders/1wWwTMS9LxWI1etYJGxDQIhjtuR895si3)
* [86x15 Buttons](https://idbuttons.neocities.org/)
* [Animated Graphics Tutorial](https://www.sunnyneo.com/tutorial/blinkiepainttutorial.php)
* [Diabella Loves Cats](http://diabellalovescats.com/) - Animal graphics
* [Glitter-Graphics.com](https://www.glitter-graphics.com/)
* [Honeycomb Stamps](https://mooeena.site/honeycomb)
* [Pats Web Graphics](http://www.patswebgraphics.com/)
* [Userbox Generator](https://www.yerich.net/userbox/)
* [Web Badges](https://web.badges.world)

[Back to Link Directory Index](/links/) { .speciallink }