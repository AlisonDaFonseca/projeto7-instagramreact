import { useState } from "react";

export default function User() {
    let [nome, setNome] = useState('catanacomics');
    let [imagem, setImagem] = useState("assets/img/catanacomics.svg");

    function perguntarNome(){
        let novoNome = prompt('Digite seu nome: ');
            setNome(novoNome);
    }
    function perguntarLinkImagem(){
        let novaImagem = prompt('Digite o link da imagem: ');
            setImagem(novaImagem);
    }

    return (
        <div className="usuario">
            <img data-test="profile-image" src={imagem ? `${imagem}` : "assets/img/catanacomics.svg"} alt="imagem de perfil" onClick={perguntarLinkImagem}/>
            <div className="texto">
                <span>
                    <strong data-test="name">{nome ? `${nome}` : 'catanacomics'}</strong>
                    <ion-icon test="edit-name" name="pencil" onClick={perguntarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}