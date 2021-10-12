
export default function NoticiaPrevia(props){
    return(
        <div className="noticiaLista">
            <h3>{props.titulo}</h3>

            <figure>
                <img src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg" alt="{props.titulo}"/>
                <figcaption>{props.titulo}</figcaption>
            </figure>

            <p>{props.conteudo}</p>
            <input type="submit" value="Saiba Mais"/>
        </div>
    )
}