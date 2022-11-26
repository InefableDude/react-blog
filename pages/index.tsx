import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'

import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections"

const Home: NextPage = ( { posts } ) => {
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Learn With Dudep</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FeaturedPosts></FeaturedPosts>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
                <div className='lg:col-span-8 col-span-1'>
                    {
                        posts.map(
                            (post, index) => (
                                <PostCard post={ post.node } key={ post.node.title } ></PostCard>
                            )
                        )
                    }
                </div>
                <div className='lg:col-span-4 col-span-1'> 
                    <div className='lg:sticky relative top-8'>
                        <PostWidget></PostWidget>
                        <Categories></Categories>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

export async function getStaticProps() {
    const posts = (await getPosts()) || [];
    return {
        props: { posts }
    }
}