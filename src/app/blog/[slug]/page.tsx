"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blogtemplate from './blogtemplate';

interface BlogContentType {
    _id: string;
    title: string;
    content: string;
    author: string;
    authorUrl: string;
    imageUrl?: string; // Assuming imageUrl might be optional
}

const Page = ({ params }: { params: { slug: string } }) => {
    let [BlogContent, setBlogContent] = useState<BlogContentType | null>(null);

    useEffect(() => {
        axios.get("https://server-xvy0.onrender.com/blog/bloglist")
            .then(res => {
                const blog = res.data.find((blog: BlogContentType) => blog._id === params.slug);
                setBlogContent(blog || null);
                console.log(blog);
            })
            .catch(err => {
                console.error("Error fetching blog list: ", err);
            });
    }, [params.slug]);

    if (!BlogContent) {
        return <div>Loading...</div>;
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
