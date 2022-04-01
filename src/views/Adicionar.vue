<template>
    <NavBar/>
    <h1>Adicionar Jogo</h1>
        <form @submit.prevent="addJogo" class="container">
            <div class="d-flex flex-row justify-content-center">
                <div class="d-flex flex-column m-3">
                    <label>Nome</label>
                    <input name="nome-jogo" type="text" v-model="jogo.nome"> 
                </div>
                <div class="d-flex flex-column m-3">
                <label>Gênero</label>
                    <select v-model="jogo.genero">
                        <option>Ação</option>
                        <option>Aventura</option>
                        <option>RPG</option>
                        <option>Corrida</option>
                        <option>Indie</option>
                        <option>Simulação</option>
                        <option>Esporte</option>
                    </select>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <div class="d-flex flex-column m-3">
                    <label>Desenvolvedor</label>
                    <input name="dev-jogo" type="text" v-model="jogo.desenvolvedor"> 
                </div>
                <div class="d-flex flex-column m-3">
                    <label>Plataforma</label>
                    <input name="plat-jogo" type="text" v-model="jogo.plataforma"> 
                </div>
            </div>
            <div class="d-flex flex-column mb-3">
                <label>Descrição</label>
                <textarea name="descr-jogo" rows="4" cols="50" placeholder="Digite uma breve descrição." v-model="jogo.descricao"></textarea>
            </div>
            <button type="submit" class="btn btn-info me-3">Adicionar</button>
            <button class="btn btn-dark" @click="$router.push('/')">Voltar</button>
        </form>
    <FooterBar/>
</template>

<script>
 import NavBar from '../components/NavBar.vue'
 import FooterBar from '../components/Footer.vue'
 
 export default {
     name: 'AdicionarJogo',
     components: {
            NavBar, FooterBar
        },
    data(){
        return {
            jogo: {
                nome: "",
                genero: "",
                desenvolvedor: "",
                plataforma: "",
                descricao: "",
                data: ""
            }
        }
    },
    methods: {
        addJogo() {
            this.$store.dispatch("commitJogo", {
                    nome: this.jogo.nome, 
                    genero: this.jogo.genero,
                    desenvolvedor: this.jogo.desenvolvedor,
                    plataforma: this.jogo.plataforma,
                    descricao: this.jogo.descricao,
                    data: new Date().toLocaleDateString()})
            this.$router.push('/')
            window.alert("Jogo adicionado!")
        }
    }
}
</script>

<style>
</style>