import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import Posts from './components/Posts';
import PostDetail from "./components/PostDetail";
import NoPage from "./components/NoPage";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/blog' element={<Posts />} />
          <Route path='/blog/:fileName' element={<PostDetail />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
