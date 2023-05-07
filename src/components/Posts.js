import Post from "./Post";

let listPost = [
    { imageUser: "assets/img/meowed.svg", nomeUser: "meowed", imagePost: "assets/img/gato-telefone.svg", altPost: "gato-telefone", imageCurtiu: "assets/img/respondeai.svg", nomeCurtiu: "respondeai", numeroCurtida: 101523 },
    { imageUser: "assets/img/barked.svg", nomeUser: "barked", imagePost: "assets/img/dog.svg", altPost: "dog", imageCurtiu: "assets/img/adorable_animals.svg", nomeCurtiu: "adorable_animals", numeroCurtida: 99159 }
];

export default function Posts() {
    return (
        <div class="posts">
            
            {listPost.map(Post)}
        </div>
    );
}