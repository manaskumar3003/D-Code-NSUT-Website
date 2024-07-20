"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blogtemplate from './blogtemplate';

interface BlogContentType {
    _id: string;
    title: string;
    content: string;
    author:string;
    authorUrl:string;
  }



const page = ({ params }: { params: { slug: string } }) => {
    let [BlogContent, setBlogContent] = useState([]);

    useEffect(() => {
        axios.get("https://server-xvy0.onrender.com/blog/bloglist")
            .then(res => {
                const blog = res.data.find((blog: { _id: string; }) => blog._id === params.slug);
                setBlogContent(blog);
                console.log(blog);
            })
            .catch(err => {
                console.error("Error fetching blog list: ", err);
            });
    }, []);


  return (
    <div>

        <Blogtemplate title={BlogContent.title} author={BlogContent.author} content={BlogContent.content} imageUrl={BlogContent.imageUrl} authorUrl={BlogContent.authorUrl}/>


    </div>
  )
}

export default page