import moment from "moment";

import { getAllPosts } from "@graphql/apollo/posts";

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const baseUrl = "https://www.barbu.cc";
  let date = new Date().toISOString();
  const formatDate = "YYYY-MM-DD";
  date = moment(date).format(formatDate);

  const posts = await getAllPosts();

  const staticPages = ["", "about", "blog", "projects"].map(
    (staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    }
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${posts
        .map((post) => {
          return `
            <url>
              <loc>${baseUrl}/${post?.attributes?.slug}</loc>
              <lastmod>${moment(post?.attributes?.updatedAt).format(
                formatDate
              )}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${date}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
