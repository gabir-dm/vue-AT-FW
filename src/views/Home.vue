<template>
    <div class="d-flex flex-column h-100">
        <NavBar />
        <main class="flex-shrink-0">
            <div class="row mt-5">
                <h1>Jogos Disponíveis</h1>

            </div>
        </main>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

    export default {
        name: 'HomePage',
        components: {
            NavBar
        }
    }
</script>

<style>
</style>