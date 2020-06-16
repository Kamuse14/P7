<template>
	<div>
		<div class="logo" >
			<img src="../assets/icon.svg">
			<div class="groupomania">Groupomania</div>
		</div>
		<div id="container">
			<figure>
				<h3>Vous souhaitez nous quitter ? Complétez ce formulaire puis cliquez sur "confirmer".</h3>
				
				<form @submit="formSubmit" action="">
					<div class="form-group">
						<label for="lastName">Pseudo<span>*</span> : 
						</label>
						<input id="pseudo" class="form-control" v-model="pseudo" type="text" placeholder="Pseudo" name="lastName" onchange="" required />
					</div>
					<div class="form-group">
						<label for="email">
							Mot de passe<span>*</span> : 
						</label>
						<input id="mdp" class="form-control" v-model="password" type="password" name="mdp" onchange="" required />
					</div>
					<button id="btn-envoyer" class="sendform" type="submit" >confirmer</button>
				</form>    
			</figure>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Delacount',
	data(){
        return {
            pseudo: '',
            password:''
        };
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            axios.delete('http://localhost:3000/api/auth/delacount', {
                
            });
        }
    }
};
</script>

<style scoped>
	figure {
		height: 40vh;
		vertical-align: middle;
	}
	.logo {
		display: flex;
		flex-direction: column;
	}
	.logo img {
		margin: 1rem auto 0 auto;
		width: 60px;
	}
	.logo div {
		margin-bottom: 2rem;
	}
</style>