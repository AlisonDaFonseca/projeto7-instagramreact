import { useState } from "react";

export default function Post(props) {


    const [classeCor, setClasseCor] = useState("");
    const [heart, setHeart] = useState("heart-outline");
    const [salvarPost, setSalvarPost] = useState("bookmark-outline");
    const [qtdLikes, setQtdLikes] = useState(props.numeroCurtida);
    

    function salvaPost(){
        if(salvarPost === "bookmark-outline"){
            setSalvarPost("bookmark");
            
        }else{
            setSalvarPost("bookmark-outline");
            
        }
    }

    function likeIcone() {
        if (classeCor === "") {
            setClasseCor("vermelho");
            setHeart("heart");
            setQtdLikes(qtdLikes + 1);
            
        } else {
            setClasseCor("");
            setHeart("heart-outline");
            setQtdLikes(qtdLikes -1);
        }
    }

    function likeImagem() {
        if (classeCor === "") {
            setClasseCor("vermelho");
            setHeart("heart");
            setQtdLikes(qtdLikes + 1);
        } 
    }



    return (
        <>
            <div key={props.imageUser} class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imageUser} alt={props.nomeUser} />
                        {props.nomeUser}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img onDoubleClick={likeImagem} src={props.imagePost} alt={props.altPost} />
                </div>

                <div class="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon onClick={likeIcone} name={heart} class={classeCor} ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon onClick={salvaPost} name={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.imageCurtiu} alt={props.nomeCurtiu} />
                        <div class="texto">
                            Curtido por <strong>{props.nomeCurtiu}</strong> e <strong>outras {qtdLikes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}