<template>
    <div class="d-flex flex-column h-100">
        <NavBar />
        <main class="flex-shrink-0">
            <div class="row mt-5">
                <h1 class="mb-5">Jogos Disponíveis</h1>
                <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Desenvolvedor</th>
                            <th>Plataforma</th>
                            <th>Descrição</th>
                            <th>Adição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(jogo, i) in getJogos" :key="i">
                            <td>{{ jogo.nome }}</td>
                            <td>{{ jogo.genero }}</td>
                            <td>{{ jogo.desenvolvedor }}</td>
                            <td>{{ jogo.plataforma }}</td>
                            <td>{{ jogo.descricao }}</td>
                            <td>{{ jogo.data }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
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
        },
        computed: {
            getJogos() {
                return this.$store.getters.getJogos
            }
        }
    }
</script>

<style>
</style>