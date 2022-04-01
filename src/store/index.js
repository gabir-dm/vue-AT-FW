import { createStore } from 'vuex'

export default createStore({
        state: {
            jogos: [
                {
                    nome: "Journey",
                    genero: "Indie",
                    desenvolvedor: "Thatgamecompany",
                    plataforma: "PS3",
                    descricao: "Explore o mundo misterioso ancestral de Journey e suas ruínas de areia.",
                    data: "29/03/2022"
                },
                {
                    nome: "Elden Ring",
                    genero: "Aventura",
                    desenvolvedor: "From Software",
                    plataforma: "PS4",
                    descricao: "Seja guiado pelo poder do Anel Prístino e se torne um Lorde das Terras Intermédias.",
                    data: "31/03/2022"
                },
                {
                    nome: "Chrono Trigger",
                    genero: "RPG",
                    desenvolvedor: "Square Enix",
                    plataforma: "SNES",
                    descricao: "Viaje até o passado esquecido, o futuro distante e o fim dos tempos.",
                    data: "01/04/2022"
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

