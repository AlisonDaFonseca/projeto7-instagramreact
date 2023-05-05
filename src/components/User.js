import { useState } from "react";

export default function User() {
    let [nome, setNome] = useState('catanacomics');

    function perguntarNome(){
        let novoNome = prompt('Digite seu nome: ');
            setNome(novoNome);
    }

    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome ? `${nome}` : 'catanacomics'}</strong>
                    <ion-icon name="pencil" onClick={perguntarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}