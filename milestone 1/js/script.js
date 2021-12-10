// CONSEGNA
// Milestone 1
// [x] Replica della grafica con la possibilità di avere messaggi scritti 
// dall’utente (verdi) e dall’interlocutore (bianco) assegnando due 
// classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva 
// v-for, visualizzare nome e immagine di ogni contatto

// SVILUPPO
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            active: 0,
            slides: [
               
            ]
        },
        methods: {
            
        }
    }
);