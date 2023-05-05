
export default function Suggestion() {
    let listaSuggestion = [
        { imagemUsuario: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagemUsuario: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagemUsuario: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagemUsuario: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagemUsuario: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {listaSuggestion.map(suggestion => (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={suggestion.imagemUsuario} alt={suggestion.nome} />
                        <div class="texto">
                            <div class="nome">{suggestion.nome}</div>
                            <div class="razao">{suggestion.razao}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
            ))}

        </div>
    );
}