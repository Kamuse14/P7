<template>
    <div>
        <h1> Mentions Légales</h1>
        <hr>
        
        <main id="disclaimer">
            <section id="about">
                <h2> Qui sommes-nous ?</h2>
                <p>Groupomania est un groupe spécialisé dans la grande distribution. </p>
            </section>
            <section id="editor">
                <h2> Editeur du site </h2>  
                <p>Société : CONNECT-E</p>
                <p>Basée à Caen</p>
            </section>

            <section id="publication">
                <h2>Responsable de publication</h2>
                <p> Stéphanie</p>
            </section>

            <section id="host">
                <h2> Hébergeur du site</h2>
                <p>Site hébergeur : GitHub Pages</p>
                <p>Basé à San Francisco</p>
            </section>
        </main>
    </div>
</template>

<script>

export default {
    name: 'About',
    methods: {
        goDebut: function(){
            this.$router.push('/')
        }
    }
};
</script>

<style scoped>
    h2 {
        margin-top: 2.5rem;
    }
    #disclaimer {
        margin-bottom: 5rem;
    }
</style>