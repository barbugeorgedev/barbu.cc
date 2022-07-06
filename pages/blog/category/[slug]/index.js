import { any } from "prop-types";
import { useRouter } from 'next/router'

import siteMetadata from '@/data/siteMetadata'
import BlogLayout from '@/layouts/BlogLayout'
import { PageSEO } from '@/components/SEO'
import { POSTS_PER_PAGE } from '@/pages/blog'

import {getAllCategories, getCategoryBySlug} from "@lib/apollo/categories";


export async function getStaticPaths() {
    const posts = await getAllCategories();
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
    const category =  await getCategoryBySlug(params.slug);
    const posts = category.attributes.posts.data;
    const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
    const route = {name:'category', param:params.slug}

    const pagination = {
        currentPage: 1,
        totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
    }

    return {
        props: { initialDisplayPosts, posts, pagination, category, route },
        revalidate: 60 * 60 * 24,

    }
}

export default function Category({ posts, initialDisplayPosts, pagination, category, route }) {
    return (
        <>
            <PageSEO title={`Blog - ${siteMetadata.author}`} description={siteMetadata.description} />
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


Category.defaultProps = {
    posts: {},
};

Category.propTypes = {
    posts: any,
};