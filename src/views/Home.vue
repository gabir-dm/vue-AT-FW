<template>
    <div>
        <NavBar />
        <div class="row mt-5">
            <h1>Listagem de Livros</h1>
        </div>
        <FooterBar />
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import FooterBar from '../components/Footer.vue'

    export default {
        name: 'HomePage',
        components: {
            NavBar, FooterBar
        }
    }
</script>

<style>
    h1 {
        margin: 20px;
    }
</style>