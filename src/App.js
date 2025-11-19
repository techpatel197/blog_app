import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import "./App.css";


function App() {
return (
<Router>
<Header />
<Routes>
<Route path="/" element={<BlogList />} />
<Route path="/post/:id" element={<BlogPost />} />
</Routes>
<Footer />
</Router>
);
}


export default App;
