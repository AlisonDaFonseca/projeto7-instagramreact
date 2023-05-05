
export default function Story() {
    let listaStory = [
        { usuario: "9gag", imagem: "assets/img/9gag.svg", alt: "9gag" },
        { usuario: "meowed", imagem: "assets/img/meowed.svg", alt: "meowed" },
        { usuario: "barked", imagem: "assets/img/barked.svg", alt: "barked" },
        { usuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet" },
        { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg", alt: "wawawicomics" },
        { usuario: "respondeai", imagem: "assets/img/respondeai.svg", alt: "respondeai" },
        { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg", alt: "filomoderna" },
        { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg", alt: "memeriagourmet" }
    ];

    return (
        <div class="stories">
            {listaStory.map(story => (
                <div class="story">
                    <div class="imagem">
                        <img src={story.imagem} alt={story.alt} />
                    </div>
                    <div class="usuario">
                        {story.usuario}
                    </div>
                </div>
            ))}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    );
}