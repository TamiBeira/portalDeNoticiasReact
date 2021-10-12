import React,{useState,useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import NoticiaPrevia from './NoticiaPrevia';
import Noticia from './Noticia';

import api from './Api';
import axios from 'axios';

function App() {

  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/noticia/:id">
          <div className="wrapper">
            <Header/>
            <Noticia/>
            </div>
          </Route>
          <Route path="/">
            <div className="wrapper">
            <Header/>
            <div className="home">
              <Link to="/noticia/esportes/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
              <Link to="/noticia/games/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
              <Link to="/noticia/programação/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
              <Link to="/noticia/esportes/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
              <Link to="/noticia/esportes/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
              <Link to="/noticia/esportes/alguma">
                <NoticiaPrevia conteudo="Aqui é minha notícia de exemplo..." titulo="Olibet notícia 01"/>
              </Link>
            </div>
            </div>

          </Route>
        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
