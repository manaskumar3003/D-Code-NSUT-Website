// BlogPage.tsx
"use client"
import React from 'react'
import Blogtemplate from './blogtemplate';
import { blogContents, BlogContentType } from '../blogData';

const Page = ({ params }: { params: { slug: string } }) => {
    const BlogContent = blogContents.find(blog => blog._id === params.slug) || null;

    if (!BlogContent) {
        return <div>Blog post not found.</div>;
    }

    return (
        <div>
            <Blogtemplate 
                title={BlogContent.title} 
                author={BlogContent.author} 
                content={BlogContent.content} 
                imageUrl={BlogContent.imageUrl} 
                authorUrl={BlogContent.authorUrl} 
            />
        </div>
    );
}

export default Page;
