import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SiteHeader from './components/SiteHeader';
import ArticleList from './components/ArticlesList';
import ArticlesDetails from './components/ArticlesDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <SiteHeader />
    <Routes>
      <Route path="/" element={<ArticleList/>} />
      <Route path="/details/:article_id" element={<ArticlesDetails/>} />

    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;