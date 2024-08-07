// Page.tsx
"use client"
import React from 'react';
import Blogpage from './blogpage';
import { blogContents } from './blogData';

const Page = () => {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">The Blog</h2>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">Read out rich and valuable blogs from the house of Dcode.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogContents.map((blog) => (
                    <Blogpage
                        key={blog._id}
                        title={blog.title}
                        slugurl={blog._id}
                        imageUrl={blog.imageUrl}
                        author={blog.author}
                        authorUrl={blog.authorUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
