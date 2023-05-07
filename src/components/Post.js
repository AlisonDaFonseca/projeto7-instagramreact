import { useState } from "react";

export default function Post(props) {


    const [classeCor, setClasseCor] = useState("");
    const [classeHeart, setClasseheart] = useState("escondido");
    const [animation, setAnimation] = useState("heart-curtida")
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
            setClasseheart("heart-curtida");
            setTimeout(() => {
                setClasseheart("heart-animacao");
            }, 50); 
            setTimeout(() => {
                setClasseheart("escondido");
            }, 500); 
        } 
    }



    return (
        <>
            <div data-test="post" className="post" >
                <div className="topo">
                    <div className="usuario">
                        <img src={props.imageUser} alt={props.nomeUser} />
                        {props.nomeUser}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img data-test="post-image" onDoubleClick={likeImagem} src={props.imagePost} alt={props.altPost} />
                    <ion-icon name="heart" class={classeHeart} ></ion-icon>

                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon data-test="like-post" onClick={likeIcone} name={heart} class={classeCor} ></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon data-test="save-post" onClick={salvaPost} name={salvarPost}></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img src={props.imageCurtiu} alt={props.nomeCurtiu} />
                        <div className="texto">
                            Curtido por <strong>{props.nomeCurtiu}</strong> e <strong data-test="likes-number">outras {qtdLikes} pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}