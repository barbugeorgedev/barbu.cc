import PageTitle from '@/components/PageTitle'
import fs from 'fs'
import generateRss from '@/lib/generate-rss'


import {getAllPosts, getPostBySlug} from "@graphql/apollo/posts";
import {object} from "prop-types";
import {markdownToHtml} from "@lib/util";
import PostLayout from "@layouts/PostLayout";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts
      .filter((post) => typeof post?.attributes?.slug === "string")
      .map((post) => (
          {
              params: {
                  slug: post?.attributes?.slug,
              },
          })
      );

  return {
    paths,
    fallback: false,
  };
}



export async function getStaticProps({ params }) {
    const post = await getPostBySlug(params.slug);
    const content = (post?.attributes?.content || "");
    const authorDetails = (post?.attributes?.author?.data?.attributes || "");
    const allPosts = await getAllPosts();

    const index = allPosts.findIndex(object => {
        return object.id === post.id;
    });

    const prev = (Array.from(allPosts)[index-1] || null);
    const next = (Array.from(allPosts)[index+1] || null);

    // rss
    if (allPosts.length > 0) {
      const rss = generateRss(allPosts)
      fs.writeFileSync('./public/feed.xml', rss)
    }

    return {
        props: {
            content,
            post,
            authorDetails,
            prev,
            next,
        },
        revalidate: 60 * 60 * 24,
    };
}

export default function Post({ post, content, authorDetails, prev, next }) {

  return (
      <>
        <PostLayout
            frontMatter={post}
            authorDetails={authorDetails}
            prev={prev}
            next={next}
            content={content}
        />
      </>
  )
}



Post.defaultProps = {
    post: {},
};

Post.propTypes = {
    post: object,
};