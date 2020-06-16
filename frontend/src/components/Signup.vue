<template>
    <form @submit="formSubmit" action="">
        <p>Pas encore membre ? Inscrivez-vous !</p>
        <div class="form-group">
            <label for="lastName">
            Pseudo<span>*</span> : 
            </label>
            <input id="pseudo" class="form-control" v-model="pseudo" type="text" placeholder="Pseudo" name="lastName" onchange="" required />
        </div>
        <div class="form-group">
            <label for="email">
                Email<span>*</span> : 
            </label>
            <input id="email" class="form-control" v-model="email" type="email" placeholder="utilisateur@domaine.fr" name="email" onchange="" required />
        </div>
        <div class="form-group">
            <label for="email">
                Mot de passe<span>*</span> : 
            </label>
            <input id="mdp" class="form-control" v-model="password" type="password" name="mdp" onchange="" required />
        </div>
        <button id="btn-envoyer" class="sendform" type="submit" >S'identifier</button>
        <p>Rejoignez-nous dans notre tout nouveau réseau social interne !</p>

    </form>
             
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Signup',
    data(){
        return {
            pseudo: '',
            email:'',
            password:''
        };
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            axios.post('http://localhost:3000/api/auth/signup', {
                pseudo: this.pseudo,
                email: this.email,
                password: this.password
            });
            console.log(this.pseudo)
        }
    }
};
</script>

<style scoped>

</style>