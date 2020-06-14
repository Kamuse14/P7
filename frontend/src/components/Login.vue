<template>
    <form action="">
        <p>Vous êtes déjà inscrit, connectez-vous !</p> 
        <div class="form-group">
            <label for="lastName">
            Pseudo<span>*</span> : 
            </label>
            <input id="pseudo" class="form-control" type="text" placeholder="Pseudo" name="lastName" onchange="" required />
        </div>
        <div class="form-group">
            <label for="email">
            Mot de passe<span>*</span> : 
            </label>
            <input id="mdp" class="form-control" type="password" name="mdp" onchange="" required />
        </div>
        <button id="btn-envoyer" class="sendform" type="submit" >S'identifier</button>
        <p>Rejoignez-nous dans notre tout nouveau réseau social interne !</p>
    </form> 
</template>

<script>
export default {
    name: 'Login'
};
</script>

<style scoped>

</style>