
export default function Suggestion() {
    let listaSuggestion = [
        { imagemUsuario: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { imagemUsuario: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { imagemUsuario: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { imagemUsuario: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { imagemUsuario: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {listaSuggestion.map(suggestion => (
                <div key={suggestion.imagemUsuario} className="sugestao">
                    <div className="usuario">
                        <img src={suggestion.imagemUsuario} alt={suggestion.nome} />
                        <div className="texto">
                            <div className="nome">{suggestion.nome}</div>
                            <div className="razao">{suggestion.razao}</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                </div>
            ))}

        </div>
    );
}