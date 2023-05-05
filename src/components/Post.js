
export default function Post() {
    let listPost = [
        { imageUser: "assets/img/meowed.svg", nomeUser: "meowed", imagePost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", imageCurtiu: "assets/img/respondeai.svg",nomeCurtiu: "respondeai", numeroCurtida: 101.523 },
        { imageUser: "assets/img/barked.svg", nomeUser: "barked", imagePost: "assets/img/dog.svg", altPost: "dog", imageCurtiu: "assets/img/adorable_animals.svg", nomeCurtiu: "adorable_animals", numeroCurtida: 99.159 }
    ];

return (
    <div class="posts">
        {listPost.map(post => (
            <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.imageUser} alt={post.nomeUser} />
                    barked
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={post.imagePost} alt={post.altPost} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={post.imageCurtiu} alt={post.nomeCurtiu} />
                    <div class="texto">
                        Curtido por <strong>{post.nomeCurtiu}</strong> e <strong>outras {post.numeroCurtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </div>
);
}