<template>
    <div>
        <h1>Les articles du forum</h1>
        <hr>
        <div v-on:click="goDebut" class="btn btn-warning">Retour à l'accueil</div>


    </div>
</template>

<script>
//import axios from 'axios' //pour chercher l'API

export default {
    name: 'Forum',
    // data (){
    //     return {
    //         allArticles: []
    //     }
    // },
    // created(){
    //    axios
    //    .get('https://jsonplaceholder.typicode.com/posts')
    //    .then(reponse => {
    //        for(const blogPost of reponse.data){
    //            this.allArticles.push(blogPost);
    //        }
    //    })
    // },
    methods: {
        goDebut: function(){
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>

</style>