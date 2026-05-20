const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const safeLinks = require('@sardine/eleventy-plugin-external-links');
const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMark = require("markdown-it-mark");
const markdownItDeflist = require("markdown-it-deflist");
const markdownItAbbr = require("markdown-it-abbr");
const mdItObsidianCallouts = require('markdown-it-obsidian-callouts');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const eleventyLucideicons = require("@grimlink/eleventy-plugin-lucide-icons");
const pluginTOC = require('eleventy-plugin-toc')
const blogTools = require("eleventy-plugin-blog-tools");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const pluginRss = require("@11ty/eleventy-plugin-rss");
// const { DateTime } = require("luxon");

module.exports = async function (eleventyConfig) {
	const { InputPathToUrlTransformPlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
}

module.exports = function (eleventyConfig) {

	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

	// This makes the eleventy command quieter (with less detail)
	eleventyConfig.setQuietMode(true);
  
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/.htaccess");
	// eleventyConfig.addPassthroughCopy("./src/fan/fanlisting");
	// eleventyConfig.addPassthroughCopy("./src/colorfulwonders/");

	eleventyConfig.addBundle("css");


	// ??????
	eleventyConfig.addFilter("exclude", (arr, exclude) => arr.filter(el => el !== exclude))
	eleventyConfig.addFilter("limit", (arr, limit) => arr.slice(0, limit))

	eleventyConfig.addFilter('niceDate', niceDate);
	function niceDate(input) {
		if (input.length == 4) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric"
			})}`;
		} else if (input.length == 5) {
			return `${new Date(input).toLocaleString("en-US", {
				month: "long",
				day: "numeric",
			})}`;
		} else if (input.length == 7) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "long",
			})}`;
		} else {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})}`;
		}
	};

	eleventyConfig.addFilter('niceDateShort', niceDateShort);
	
	function niceDateShort(input) {
		if (input.length == 4) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric"
			})}`;
		} else if (input.length == 5) {
			return `${new Date(input).toLocaleString("en-US", {
				month: "short",
				day: "numeric",
			})}`;
		} else if (input.length == 7) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "short",
			})}`;
		} else {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "short",
				day: "numeric",
			})}`;
		}
	};

	eleventyConfig.addFilter('niceDateShort2D', niceDateShort2D);

	function niceDateShort2D(input) {
		if (input.length == 4) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric"
			})}`;
		} else if (input.length == 5) {
			return `${new Date(input).toLocaleString("en-US", {
				month: "short",
				day: "2-digit",
			})}`;
		} else if (input.length == 7) {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "short",
			})}`;
		} else {
			return `${new Date(input+"T15:14:14.578Z").toLocaleString("en-US", {
				year: "numeric",
				month: "short",
				day: "2-digit",
			})}`;
		}
	};



	eleventyConfig.addFilter('computeYears', function (items) {
		return items.map(item => Object.assign({ year: new Date(item.date).getFullYear() }, item));
	});

	/*eleventyConfig.addFilter('getYear', getYear);

	function getYear(input) {
		return `${new Date(input).getFullYear()}`;
	}*/

	/*eleventyConfig.addFilter("justYear", (input) => {
		dateObj = new Date(input);
		return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat('yyyy');
	});*/

	eleventyConfig.addFilter('getYear', function (input) {
		console.log(input);
		return new Date(input).getFullYear();
	})

	/*eleventyConfig.addFilter("justYear", dateObj => {
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy");
	});*/

	
	/*eleventyConfig.addFilter("justYear", (dateObj) => {
	return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);

		// other config likely here
	});*/

	eleventyConfig.addShortcode("myCustomImage", function (url, alt) {
		return `<img src="${eleventyConfig.getFilter("url")(url)}" alt="${alt}">`;
	});

	eleventyConfig.addShortcode("colorText", function (color, text) {
		return `<span style="color: var(--${color});">${text}</span>`;
	});

	eleventyConfig.addFilter("upperCase", function (value) {
		if (!value) return "";
		return "<span style=\"text-transform: uppercase;\">" + value + "</span>";
	});

	/*
	DEMO TEST DON'T USE THIS!!!!!
	eleventyConfig.addFilter("doSomethingWithIt", function (value) {
		if (!value) return "";
		return value.toLowerCase() + " :)";
	  });

	  */

	eleventyConfig.addPlugin(syntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	  
	eleventyConfig.addPlugin(safeLinks);

	const markdownItOptions = {
		html: true,
		breaks: true,
		linkify: true
	}
	const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)
	eleventyConfig.setLibrary('md', markdownLib)





	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItMark));
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItDeflist));
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(markdownItAbbr));
	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mdItObsidianCallouts));

	var md = require('markdown-it')()
            .use(require('markdown-it-mark'));

	md.render('==marked==') // => '<p><mark>marked</mark></p>'

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPlugin(eleventyLucideicons, {
		"class": "lucideicon",
		"alt": ""
	  });

	eleventyConfig.addPlugin(pluginTOC, {
		tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
		wrapper: "div",
		ul: true
	  })
	  
	  /*

	eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
		// Optional, default is "---"
		excerpt_separator: '<!-- more -->'
	});
*/
	eleventyConfig.addPlugin(blogTools);

	eleventyConfig.addFilter("excerpt", (post) => {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 350)) + " […]";
	});

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/rss.xml",
		collection: {
			name: "feed",
			limit: 0, // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "Sainthood.xyz",
			subtitle: "Your guess is as good as mine.",
			base: "https://sainthood.xyz/",
			author: {
				name: "Saint",
				email: "contact@sainthood.xyz", // Optional
			}
		}
	});

	/*eleventyConfig.addPlugin(pluginRss);*/

	// Categories
	eleventyConfig.addCollection('categoryList', collection => {
		let catSet = {};
		collection.getAll().forEach(item => {
			if (!item.data.categories) return;
			item.data.categories.filter(
				cat => !['posts', 'all'].includes(cat)
			).forEach(
				cat => {
					if (!catSet[cat]) { catSet[cat] = []; }
					catSet[cat].push(item)
				}
			);
		});
		return catSet;
	});

	eleventyConfig.addCollection("tagNames", (collection) => {
    // Select all the posts you wan tthis to apply to.
    const posts = collection.getFilteredByGlob(["./src/blog/posts/*.md", "./src/blog/posts/*.html"]);
    //Get all the tag names
    const tags = posts.flatMap(post => post.data.categories);  
    // Get just the uniquie names
    const uniqueTags = [...new Set(tags)]; 

    // Array to hold the tag names and the number of posts for each
    let tagList = []

    // Loop through the unique tags and add the tag name and the number of posts to the array
    for (const uniqueTag of uniqueTags) {
      tagList.push({
        tagName: uniqueTag,
        // Count the number of posts for each tag
        tagCount: tags.filter( (tagName) => (tagName === uniqueTag) ).length,
         // could add url creation key here if you want
      })
    }

    // Sort the array by the number of posts 
    // swap a.tagCount - b.tagCount to b.tagCount - a.tagCount to sort descending.
    tagList.sort((a, b) => b.tagCount - a.tagCount);

    // Return the array
    return tagList

  })

  /*
  eleventyConfig.addCollection("postsByTag", (collection) => {
  const posts = collection.getFilteredByGlob(["./src/blog/posts/*.md", "./src/blog/posts/*.html"]);
  
  const byTag = new Map();

  for (const post of posts) {
    for (const tag of post.data.categories) {
      if (!byTag.has(tag)) {
        byTag.set(tag, []);
      }
      
      byTag.get(tag).push(post);
    }
  }
  
  return byTag;
})
  */

eleventyConfig.addPairedShortcode("callout", function(content, level = "", format = "html", customLabel = "") {
		if( format === "md" ) {
			content = mdIt.renderInline(content);
		} else if( format === "md-block" ) {
			content = mdIt.render(content);
		}
		let label = "";
		if(customLabel) {
			label = customLabel;
		} else if(level === "info" || level === "danger") {
			label = level.toUpperCase() + ":";
		} else if(level === "warning") {
			label = "WARNING:";
		}
		let labelHtml = label ? `<div class="elv-callout-label">${customLabel || label}</div>` : "";
		let contentHtml = (content || "").trim().length > 0 ? `<div class="elv-callout-c">${content}</div>` : "";

		return `<div class="callout${level ? ` ${level}` : ""}">${labelHtml}${contentHtml}</div>`;
	});
	

	return {
	  dir: {
		input: "src",
		output: "_site",
		layouts: "_includes/layouts",
		data: "_data",
		includes: "_includes"
	  },
	  markdownTemplateEngine: "njk",
	  htmlTemplateEngine: "njk"
		/*templateFormats: [ "md", "njk", "html", ],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dataTemplateEngine: "njk",*/
	  };
  };

