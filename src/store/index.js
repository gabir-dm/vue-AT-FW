import { createStore } from 'vuex'

export default createStore({
        state: {
            jogos: [
                {
                    id: 1,
                    nome: "Journey",
                    genero: "Indie",
                    desenvolvedor: "Thatgamecompany",
                    plataforma: "PS3"
                },
                {
                    id: 2,
                    nome: "Elden Ring",
                    genero: "Aventura",
                    desenvolvedor: "From Software",
                    plataforma: "PS4"
                },
                {
                    id: 3,
                    nome: "Chrono Trigger",
                    genero: "RPG",
                    desenvolvedor: "Square Enix",
                    plataforma: "SNES"
                },
            ]
        },
        getters: {
            getJogos: state => state.jogos,
        },
        mutations: {
            addJogo: (state, newJogo) => state.jogos.push(newJogo),
        },
        actions: {
            commitJogo: ({ commit }, newJogo ) => commit('addJogo', newJogo),
        },
    
    }) 

