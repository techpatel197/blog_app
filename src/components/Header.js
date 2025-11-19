import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
return (
<header style={{ background: "#222", padding: "15px", color: "white" }}>
<h2><Link to="/" style={{ color: "white", textDecoration: "none" }}>React Blog</Link></h2>
</header>
);
}
