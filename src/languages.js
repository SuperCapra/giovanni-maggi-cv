// to add a Language it is enough to add the translation and the language here in the JSON vocabulary and in the languages Array :)
let vocabulary = {
    it: {
        firstStep: {
            p1: 'Ciao sono',
            p2: 'un programmatore, un ciclista e un artista',
            downloadCV: '[cv classico]',
            interactiveCV: '[cv interattivo]'
        },
        cv : 'https://drive.google.com/file/d/1K2vyvMQPG4079SJUa6dfvZMZlbZFJ5sr/view?usp=sharing',
        back: {
            back: 'back'
        }
    },
    en: {
        firstStep: {
            p1: 'Hi I am',
            p2: 'a programmer, a cyclist and an artist',
            downloadCV: '[classic cv]',
            interactiveCV: '[interactive cv]'
        },
        cv : 'https://drive.google.com/file/d/19fnw7uPyH-ItG5v1Tqxz7NhmrNUf-9wo/view?usp=sharing',
        back: {
            back: 'back'
        }
    }
}

let languages = [{
    value : 'it', 
    label: '[Italiano]'
},{
    value : 'en', 
    label: '[English]'
}]

export {vocabulary, languages}