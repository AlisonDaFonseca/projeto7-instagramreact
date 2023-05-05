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
        <div class="usuario">
            <img src={imagem ? `${imagem}` : "assets/img/catanacomics.svg"} alt="imagem de perfil" onClick={perguntarLinkImagem}/>
            <div class="texto">
                <span>
                    <strong>{nome ? `${nome}` : 'catanacomics'}</strong>
                    <ion-icon name="pencil" onClick={perguntarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}