import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../data/posts";


export default function BlogPost() {
const { id } = useParams();
const post = posts.find(p => p.id === parseInt(id));


if (!post) return <h2>Post Not Found</h2>;


return (
<div className="container">
<h1>{post.title}</h1>
<p>{post.body}</p>
</div>
);
}
