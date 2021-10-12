import './Reset.css';
import './Header.css';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default function Header(){
    return(
        <div className="header">
            <div className="logotipo">
            <Link to="/"><h1>Olibet</h1><small>news</small></Link>
            </div>
            <div className="busca">
                <form action="">
                    <input type="text" name="noticias" id="noticias" placeholder="Pesquisar notícias"/>
                    <input  type="submit" name="acao" id="acao" value="buscar"/>
                </form>
            </div>
            <Link to="/Painel" className="admin">Login</Link>
        </div>
    )
}