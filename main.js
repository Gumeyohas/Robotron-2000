const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
        
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    console.log(pecas[peca]);
    
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}



let indexImagemAtual = 1;

let imagens = [
    'img/robotron.png',
    'img/Robotron 2000 - Amarelo/Robotron 2000 - Amarelo.png',
    'img/Robotron 2000 - Azul/Robotron 2000 - Azul.png',
    'img/Robotron 2000 - Branco/Robotron 2000 - Branco.png',
    'img/Robotron 2000 - Preto/Robotron 2000 - Preto.png',
    'img/Robotron 2000 - Rosa/Robotron 2000 - Rosa.png',
    'img/Robotron 2000 - Vermelho/Robotron 2000 - Vermelho.png'
];

function alteraImagem(){
    if(indexImagemAtual == imagens.length){
        indexImagemAtual = 0;
    }else{
        document.querySelector('.robo').src = imagens[indexImagemAtual];
        indexImagemAtual++; 
    }
}

let robo = document.querySelector("[data-robo]");

robo.addEventListener("click", () => {
    alteraImagem();
})



/*const imagens = {
    "./img/Robotron 2000 - Amarelo": {
        "asas": "Robotron 2000 - Amarelo - Asas.png",
        "blindagem": "Robotron 2000 - Amarelo - Blindagem.png",
        "braco": "Robotron 2000 - Amarelo - Braço.png",
        "fogueteCotovelo": "Robotron 2000 - Amarelo - Foguete Cotovelo.png",
        "foguete": "Robotron 2000 - Amarelo - Foguete.png",
        "nucleo": "Robotron 2000 - Amarelo - Núcleo.png",
        "pernas": "Robotron 2000 - Amarelo - Perna.png",
        "raio": "Robotron 2000 - Amarelo - Raio.png"
    }
}*/

