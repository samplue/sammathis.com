import yaml from "js-yaml";
import Image from "@11ty/eleventy-img";
import { HtmlBasePlugin } from "@11ty/eleventy";

const FONT_DIR = "node_modules/@fontsource/archivo/files";
const FONT_FILES = [400, 500, 600].flatMap((weight) => [
  `archivo-latin-${weight}-normal.woff2`,
  `archivo-latin-ext-${weight}-normal.woff2`,
]);

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // "Assistant & VFX Editor" -> line break after "&" on small screens only
  eleventyConfig.addFilter("ampBreak", (text) =>
    String(text ?? "")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/ &amp; /g, ' &amp;<br class="br-mobile"> '),
  );

  eleventyConfig.addPassthroughCopy({ "src/assets/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  for (const file of FONT_FILES) {
    eleventyConfig.addPassthroughCopy({ [`${FONT_DIR}/${file}`]: `assets/fonts/${file}` });
  }

  // Posters are uploaded through Pages CMS into src/posters; the template gets
  // responsive AVIF/WebP/JPEG output instead of the raw upload.
  eleventyConfig.addAsyncShortcode("poster", async (src, alt) => {
    const metadata = await Image(`src/${src.replace(/^\/+/, "")}`, {
      widths: [240, 480, 720],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "_site/assets/posters/",
      urlPath: "/assets/posters/",
    });
    return Image.generateHTML(metadata, {
      alt,
      sizes: "(max-width: 640px) 50vw, (max-width: 1000px) 33vw, 220px",
      loading: "lazy",
      decoding: "async",
      class: "tile__img",
    });
  });

  return {
    dir: { input: "src", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
  };
}
