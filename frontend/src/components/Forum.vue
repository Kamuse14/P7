<template>
    <div id="forum">
        <h1>Partagez vos idées !</h1>
        <hr>
        <div id="postGroup">
            <form class="post">
                <div class="firstbox">
                    <div class="newPostGroup">
                        <div class="titre">
                            <h3>User1</h3>
                            <label for="titre"></label>
                            <input v-on:input="togglePost" v-model.lazy="formData.title" type="text" id="titre" placeholder="Titre du post">
                        </div>
                        <textarea v-on:input="togglePost" v-model.lazy="formData.txt" id="texte" placeHolder="Nouveau post"></textarea>
                    </div>
                    <hr>
                    <div class="submit">
                        <div class="mediaGroup">
                            <i class="far fa-image"></i>
                            <span> Photo</span>
                        </div>
                        <button v-on:click.prevent="envoiPost"><i class="far fa-paper-plane"></i></button>
                    </div>
                </div>
            </form>
            <div v-if="infoSubmit" class="post">
                <div class="datetime"> datetime </div>
                <div class= "box">
                    <h3> User1 </h3>
                    <p> Sujet : <em> {{formData.title}} </em> </p>
                    <img v-bind:src="media" alt="">
                    <p class="formTxt"> {{formData.txt}} </p>
                </div>
            </div>
            <div v-for="item in post" v-bind:key="item" class="post">
                <div class="datetime"> {{post.created_at}} </div>
                <div class= "box">
                    <h3> {{post.userPseudo}} </h3>
                    <p> Sujet : <em>{{post.title}}</em> </p>
                    <img v-bind:src="imageUrl" alt="">
                    <p> {{post.txt}} </p>
                    <!-- <div>
                        <div class="datetime"> {{post.comments[0].created_at}} </div>
                        <div class="comment">
                            <h3> {{post.comments[0].userPseudo}} </h3>
                            <p> {{post.comments[0].txt}} </p>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios' //pour chercher l'API

export default {
    name: 'Forum',
    data (){
        return {
            formData: {
                title: '',
                txt: ''
            },
            infoSubmit: false,
            post: {
                title: undefined,
                userPseudo: undefined,
                txt: undefined,
                imageUrl: undefined
            }
                    
        }
    },
    methods: {
        envoiPost: function(){
            this.infoSubmit = true;
        },
        togglePost: function(){
            this.infoSubmit = false;
        } 
    },
    mounted() {
     axios
     .get('http://localhost:3000') // 'http://localhost:3000/api/posts' pour trouver tous les posts
     .then(reponse => {
         console.log(reponse);
         this.post = reponse.data;
     })
    },
    // created(){
    //    axios
    //    .get('https://jsonplaceholder.typicode.com/posts')
    //    .then(reponse => {
    //        for(const blogPost of reponse.data){
    //            this.allArticles.push(blogPost);
    //        }
    //    })
    // }
};
</script>

<style scoped>
    #postGroup {
        width: 350px;
        margin: 0 auto;
    }
    hr {
        width: 95%;
    }
    .titre {
        display: flex;
    }
    .titre h3 {
        margin: auto 1rem auto 0;    
    }
    input {
        width: 70%;
    }
    button {
        width: auto;
        margin: 0;
    }
    .mediaGroup {
        border-radius: 50px;
        background-color: var(--light-pink);
        text-align: center;
        padding: 0.6rem;
        width: auto;
    }
    textarea {
        width: 95%;
    }
    .newPostGroup{
        text-align: center;
    }
    .formTxt {
        white-space: pre;
    }
    .datetime {
      font-size: 0.7em;
      text-align: right; 
      margin: auto 0.5rem 0 auto;
    }
    h3 {
        margin-top: 0;
    }
    .submit {
        display: flex;
        justify-content: space-between;
    }
    .newPost, .box, .comment, .firstbox {
        font-size: 0.9em;
        border: 0.1rem solid #2c3e50;
        border-radius: 6px;
        padding: 1rem;
        text-align: justify;
        background-color: var(--light-pink);
    }
    
    .firstbox {
        background-color: white; 
        margin: 1rem auto;
    }
    .post {
        width: 100%;
        margin: 1rem auto;
    }
    .comment {
       background-color: white; 
       border-radius: 4px;
       padding: 0.5rem;
    }
/*/////////// RESPONSIVITY /////////////*/
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  #postGroup, form {
        width: 50%;
    }
    form {
        max-width: none;
    }
}
</style>