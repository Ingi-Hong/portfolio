module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("landing.css");
  eleventyConfig.addPassthroughCopy("JosefinSans-VariableFont_wght.ttf");
  eleventyConfig.addPassthroughCopy("coloredAvatarCircleCutout.png");
  eleventyConfig.addPassthroughCopy("Oswald-VariableFont_wght.ttf");
  eleventyConfig.addPassthroughCopy("blue.png");
  eleventyConfig.addPassthroughCopy("scripts.js");
  eleventyConfig.addPassthroughCopy("tornis.js");
  eleventyConfig.addPassthroughCopy("IngiHongResume2023.pdf");

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("docs/404.html");
        browserSync.addMiddleware("*", (req, res) => {
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
  });

  return {
    dir: { input: ".", output: "docs" },
  };
};
