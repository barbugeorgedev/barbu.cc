import { any } from "prop-types";

import siteMetadata from '@/data/siteMetadata'
import BlogLayout from '@/layouts/BlogLayout'
import { PageSEO } from '@/components/SEO'
import { POSTS_PER_PAGE } from '@/pages/blog'

import {getAllCategories, getCategoryBySlug} from "@lib/apollo/categories";
import {getAllPosts} from "@lib/apollo/posts";


export async function getStaticPaths() {

    const posts = await getAllCategories();
    const totalPosts =  await getAllPosts();
    const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
    const pathPage = Array.from({ length: totalPages }, (_, i) => ({
        params: {
            page: (i + 1).toString()
        },
    }))

    const pathSlug = posts
        .filter((post) => typeof post?.attributes?.slug === "string")
        .map((post) => (
            {
                params: {
                    slug: post?.attributes?.slug,
                },
            })
        );

    const paths = [];
    const path = pathSlug.map(
        (slugs, i) => pathPage.map(
            (pages) => paths.push( {params: {page: pages.params.page, slug: slugs.params.slug }} )
        )
    );

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const category =  await getCategoryBySlug(params.slug);
    const posts = category.attributes.posts.data;
    const pageNumber = parseInt(params.page)
    const initialDisplayPosts = posts.slice(
        POSTS_PER_PAGE * (pageNumber - 1),
        POSTS_PER_PAGE * pageNumber
    )
    const route = {name:'category', param:params.slug}
    const pagination = {
        currentPage: pageNumber,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return {
        props: {
            initialDisplayPosts,
            posts,
            pagination,
            route,
            category
        },
        revalidate: 60 * 60 * 24,

    }
}

export default function CategoryPage({ posts, initialDisplayPosts, pagination, category, route }) {
    return (
        <>
            <PageSEO title={`Category ${category.attributes.name} - ${siteMetadata.author}`} description={siteMetadata.description} />
            <BlogLayout
                posts={posts}
                route={route}
                initialDisplayPosts={initialDisplayPosts}
                pagination={pagination}
                title={category.attributes.name}
            />
        </>
    )
}


CategoryPage.defaultProps = {
    posts: {},
};

CategoryPage.propTypes = {
    posts: any,
};