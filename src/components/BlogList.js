import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../data/posts";


export default function BlogList() {
return (
<div className="container">
<h1>Blog Posts</h1>
{posts.map(post => (
<div className="post-card" key={post.id}>
<h2 className="post-title">{post.title}</h2>
<p className="post-body">{post.body.substring(0, 100)}...</p>
<Link to={`/post/${post.id}`}>Read More</Link>
</div>
))}
</div>
);
}
