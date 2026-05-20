module.exports = {
	/* Some cool stuff! */
	eleventyComputed: {
		year: function (data) {
			return new Date(data.date || data.page.date).getFullYear();
		},
		/* More cool stuff! */
	},
}