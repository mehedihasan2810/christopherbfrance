import { Portfolio } from "@/interfaces/portfolio";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const portfolioDirectory = join(process.cwd(), "src/portfolio");

export function getPortfolioSlugs() {
  return fs.readdirSync(portfolioDirectory);
}

export function getPortfolioBySlug(slug: string) {
  const fullPath = join(portfolioDirectory, `${slug}/index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug, content } as Portfolio;
}

export function getAllPortfolios(): Portfolio[] {
  const slugs = getPortfolioSlugs();
  const portfolio = slugs
    .map((slug) => getPortfolioBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      Number(post1.order) < Number(post2.order) ? -1 : 1
    );
  return addPrevNextSlugs(portfolio);
}

function addPrevNextSlugs(data: Portfolio[]): Portfolio[] {
  const length = data.length;
  for (let i = 0; i < length; i++) {
    const currentSlug = data[i].slug;
    if (i > 0) {
      data[i].prevSlug = data[i - 1].slug;
    } else {
      data[i].prevSlug = null;
    }
    if (i < length - 1) {
      data[i].nextSlug = data[i + 1].slug;
    } else {
      data[i].nextSlug = null;
    }
  }
  return data;
}

export function wrapImagesWithFigure(htmlString: string) {
  // Define a regular expression to match img tags
  const imgRegex = /<img\s+([^>]+)>/g;

  // Replace all img tags with figure tags and figcaption wrapped by anchor tags
  const modifiedHtmlString = htmlString.replace(imgRegex, function (match, p1) {
    // Extract the src and alt attribute values
    const srcMatch = /src="([^"]+)"/.exec(p1);
    const src = srcMatch ? srcMatch[1] : "";
    const altMatch = /alt="([^"]+)"/.exec(p1);
    const altText = altMatch ? altMatch[1] : "";

    // Construct the replacement string with anchor, figure, and figcaption
    return `<figure><a href="${src}" target="_blank"><img ${p1} width="640" height="480"></img></a><figcaption>${altText}</figcaption></figure>`;
  });

  return modifiedHtmlString;
}
