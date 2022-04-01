<template>
    <NavBar/>
    <div class="mt-5">
        <h1>Adicionar Jogo</h1>
            <form @submit.prevent="addJogo" class="container">
                <div class="d-flex flex-row justify-content-center">
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input name="nome-jogo" class="form-control" type="text" placeholder="Nome do Jogo" v-model="jogo.nome"> 
                        <label for="nome-jogo">Nome</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <select name="gen-jogo" class="form-select" v-model="jogo.genero">
                            <option disabled>Selecione o gênero</option>
                            <option>Ação</option>
                            <option>Aventura</option>
                            <option>RPG</option>
                            <option>Corrida</option>
                            <option>Indie</option>
                            <option>Simulação</option>
                            <option>Esporte</option>
                        </select>
                        <label for="gen-jogo">Gênero</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input class="form-control" name="dev-jogo" type="text" placeholder="Desenvolvedor" v-model="jogo.desenvolvedor"> 
                        <label for="dev-jogo">Desenvolvedor</label>
                    </div>
                    <div class="d-flex flex-fill m-3 form-floating">
                        <input class="form-control" name="plat-jogo" type="text" placeholder="Plataforma" v-model="jogo.plataforma"> 
                        <label for="plat-jogo">Plataforma</label>
                    </div>
                </div>
                <div class="d-flex m-3 form-floating">
                    <textarea name="descr-jogo" class="form-control" style="height: 150px" placeholder="Digite uma breve descrição." v-model="jogo.descricao"></textarea>
                    <label for="desc-jogo">Descrição</label>
                </div>
                <button type="submit" class="btn btn-info m-3">Adicionar</button>
                <button class="btn btn-dark" @click="$router.push('/')">Voltar</button>
            </form>
    </div>
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