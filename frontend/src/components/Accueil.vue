<template>
  <div class="accueil">
    <h1>Partagez avec Tweetomania!</h1>
    <div id="container">
        <div id="onglets">
              <div class="onglet" @click="toggleLogin"> Se connecter </div>
              <div class="onglet" @click="toggleSignup"> S'inscrire </div>
        </div> 

        <figure>
          <login v-if="toggleIn"></login>
          <signup v-if="toggleUp"></signup>

          <form action="">
            <div class="form-group">
              <label for="lastName">
                Pseudo<span>*</span> : 
              </label>
              <input id="pseudo" class="form-control" type="text" placeholder="Pseudo" name="lastName" onchange="" required />
            </div>
            <div class="form-group">
              <label for="email">
                Email<span>*</span> : 
              </label>
              <input id="email" class="form-control" type="email" placeholder="utilisateur@domaine.fr" name="email" onchange="" required />
            </div>
            <div class="form-group">
              <label for="email">
                Mot de passe<span>*</span> : 
              </label>
              <input id="mdp" class="form-control" type="password" name="mdp" onchange="" required />
            </div>
            <button id="btn-envoyer" class="sendform" type="submit" >S'identifier</button>
          </form>    
        
          <p>
            Rejoignez-nous dans notre tout nouveau réseau social interne !
          </p>
        </figure>
    </div>
  </div>
</template>

<script>
  import Login from './Login'
  import Signup from './Signup'

  export default {
    name: 'Accueil',
    data(){
      return {
        toggleIn: true,
        toggleUp: false
      }
    },
    methods: {
      toggleLogin: function(){
        this.toggleIn = true;
        this.toggleUp = false
      },
      toggleSignup: function(){
        this.toggleIn = false;
        this.toggleUp = true
      }
    },
    components: {
      'login': Login,
      'signup': Signup
    }    
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
  /*/////////// formulaire /////////////*/
  h1 {
    margin: 1rem;
  }
  #container {
    max-width: 320px; 
    margin: 2.5rem auto;
    text-align: center;
    background: center no-repeat url("../assets/icon.svg");
  }

  figure {
    position: relative;
    background-color: rgba(253, 45, 1, 0.3);
    box-shadow: 2px 2px 10px #FD2D01;
    padding: 0.5rem;
    margin: 0;
  }
  #onglets {
    display: flex;
    position: static;
    margin: 1rem auto 0 0;
  }
  .onglet {
    background-color: rgba(255, 198, 185, 0.5);
    border: 0.2rem solid #641100;
    border-radius: 8%;
    width: 100px;
    color: var(--dark-orange);
    padding:0.6rem;
    cursor: pointer;
  } 
  .onglet:hover, .onglet:active {
    background-color: rgba(253, 45, 1, 0.3);
    
  }

  form {
    margin-top: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  label {
    display: flex;
    font-weight: 700;
    margin-top: 0.5rem;
  }
  button {
    cursor: pointer;
    background-color: #FD2D01;
    box-shadow: 1px 1px 4px #641100;
    border: none;
    border-radius: 50px;
    width: 200px;
    font-size: 1.1em;
    color: white;
    padding: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  button:hover {
    background-color: rgba(253, 45, 1, 0.7);
  }
/*/////////// RESPONSIVITY /////////////*/
/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {
  #container {
    max-width: 800px; 
    margin: 5rem auto;
  }

  #onglets, figure {
    width: 60%;
    margin: 0 auto;
  }
  
  form {
    max-width: 450px;
    margin: 2rem auto;
  }
}

</style>
