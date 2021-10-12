import react from 'react';
import { useParams } from 'react-router';

export default function Noticia(props){

    const {id} = useParams();

    return(
        <div className="wrapper">
            <div className="noticiaSingle  top">
                <h2>Estou na notícia single {id}</h2>
            </div>
        </div>
    )
}