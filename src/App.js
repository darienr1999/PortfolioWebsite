import logo from './logo.svg';
import './App.css';

import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import {BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';



import Background from './Background';
import MainPage from './MainPage';
import ProjectPage from './ProjectPage';



function App() {
  /*
  server data = 
  {text: some text}
  */
  
  const [page, setPage] = useState({});

  
  return (
    <Router>
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"

        />
        <style>
          {'body {background-color: #ffff; color: white;'}
        </style>
        
        <script src="https://kit.fontawesome.com/2f5683a395.js" crossorigin="anonymous"></script>
      </Helmet>
      
      <Routes>
        <Route exact path="/" element= {<MainPage />}/>
        <Route  exact path="/project/:projectLinkParam" element ={<ProjectPage/>}/> 
      </Routes>
    </div>
    </Router>
  );
}

export default App;
