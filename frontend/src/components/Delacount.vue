<template>
	<div id="container">
		<figure>
			<h3>Vous souhaitez nous quitter ? Complétez à nouveau ce formulaire puis cliquez sur "confirmer".</h3>
			
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
				<button id="btn-envoyer" class="sendform" type="submit" >confirmer</button>
			</form>    
		</figure>
	</div>
</template>

<script>
export default {
	name: 'Delacount'
};
</script>

<style scoped>
	figure {
		margin-top: 85px;
	}
</style>