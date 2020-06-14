<template>
  <div class="accueil">
    <div class="sstitre">
      <h1>Partagez avec </h1>
      <div class="logo" >
        <img src="../assets/icon.svg">
        <div class="groupomania">Groupomania</div> 
      </div>
    </div>
    
    <div id="container">
        <div id="onglets">
              <div class="onglet" @click="toggleLogin"> Se connecter </div>
              <div class="onglet" @click="toggleSignup"> S'inscrire </div>
        </div> 

        <figure>
          <login v-if="toggleIn"></login>
          <signup v-if="toggleUp"></signup>
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


<style>
  
  /*/////////// sous-titre /////////////*/
  h1, .logo {
    margin: 1rem;
  }
  .logo {
    display: flex;
    justify-content: center;
    color: var(--orange);
    font-size: 2em;
    font-weight: bold;
  }
  .logo img {
    width: 50px;
  }

  /*/////////// formulaire /////////////*/
  #container {
    max-width: 320px; 
    margin: 1.5rem auto 3rem auto;
    text-align: center;
    background: center no-repeat url("../assets/icon.svg");
  }

  figure {
    position: relative;
    background-color: rgba(253, 45, 1, 0.3);
    box-shadow: 2px 2px 10px #FD2D01;
    padding: 0.8rem;
    margin: 0;
  }
  #onglets {
    display: flex;
    position: static;
    margin: 1rem auto 0 0;
  }
  .onglet {
    background-color: var(--light-orange);
    border: 0.2rem solid #641100;
    border-radius: 8%;
    width: 110px;
    color: var(--dark-orange);
    font-weight: bold;
    padding:0.6rem;
    cursor: pointer;
  } 
  .onglet:hover, .onglet:active {
    background-color: var(--orange);
    color: var(--light-pink);
    
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
    margin: 2rem auto 5rem auto;
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
