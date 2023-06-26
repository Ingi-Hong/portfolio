module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("javascript");


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
