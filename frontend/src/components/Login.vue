<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    
    <figure>
      <div id="onglets">
        <div class="onglet"> Se connecter </div>
        <div class="onglet"> S'inscrire </div>
      </div>
      <form action="">
        <div class="form-group">
          <label for="lastName">
            Pseudo<span class="required">*</span> : 
          </label>
          <input id="pseudo" class="form-control" type="text" placeholder="Pseudo" name="lastName" onchange="" required />
        </div>
        <div class="form-group">
          <label for="email">
            Email<span class="required">*</span> : 
          </label>
          <input id="email" class="form-control" type="email" placeholder="utilisateur@domaine.fr" name="email" onchange="" required />
        </div>
        <div class="form-group">
          <label for="email">
            Mot de passe<span class="required">*</span> : 
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
</template>

<script>
  export default {
    name: 'Login',
    props: {
      msg: String,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  /*/////////// formulaire /////////////*/
  figure {
    background-color: rgba(253, 45, 1, 0.3);
    box-shadow: 2px 2px 10px #FD2D01;
    padding: 0.5rem;
  }
  #onglets {
    display: flex;
    justify-content: space-around;
  }
  .onglet {
    background-color: rgba(253, 45, 1, 0.5);
    width: 40%;
    border: 0.2rem solid white;
    padding:0.6rem;
    cursor: pointer;
  } 
  .onglet:hover {
    background-color: rgba(255, 198, 185, 0.5);
    border-bottom: none;
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
  figure {
    width: 80%;
    margin: 5rem auto;
  }
  form {
    max-width: 450px;
    margin: 2rem auto;
  }
}

</style>
