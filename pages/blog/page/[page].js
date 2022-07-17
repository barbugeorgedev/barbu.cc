import { useState } from "react";
import { any } from "prop-types";


import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import BlogLayout from '@layouts/BlogLayout'
import { POSTS_PER_PAGE } from '@/pages/blog'

import { getAllPosts } from "@graphql/apollo/posts";

export async function getStaticPaths() {
  const totalPosts =  await getAllPosts();
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts();
  const pageNumber = parseInt(params.page)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const route = {name:'blog'}
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination,
      route,
    },
  }
}

export default function PostPage({  posts, initialDisplayPosts, pagination, route }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <BlogLayout
        posts={posts}
        route={route}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}


PostPage.defaultProps = {
  posts: {},
};

PostPage.propTypes = {
  posts: any,
};