//Instancionando uma classe
const jogo = new Quiz;

//Capturando todos os elementos do HTML pelas id's

const quiz = document.getElementById("quiz");

const fase = document.getElementById("fase");

const pergunta = document.getElementById("pergunta");

const op1 = document.getElementById("op1");

const op2 = document.getElementById("op2");

const op3 = document.getElementById("op3");

const info = document.getElementById("info");

const start = document.getElementById("start");

const tentativas = document.getElementById("tentativas");

const screenLose = document.getElementById("screenLose");

const nextButton = document.getElementById("nextButton");


//Todo botão criado será um event listener
start.addEventListener('click', () => {
    printQuestions();   
    tentativas.innerText = jogo.scores;
});

op1.addEventListener('click', (event) => {

    //Criando uma variável que vai pegar das opções clicadas
    let resposta = event.target.innerText;
    //Condição: vai comparar a resposta com a resposta deixada no banco de dados do 'data.js'.

    if (resposta === jogo.pegarPergunta().correct) {
        //Se a resposta for correta, o que vai  acontecer será informado pelo info.innerText.
       info.innerText = "Você acertou!"; 
    } else {
        //Caso o contrário, a resposta será errada.
        info.innerText = "Você errou!";
        jogo.retirarPontos();
        tentativas.innerText = jogo.scores;
        if(jogo.lose === true) {
            quiz.classList.add("esconder");
            //o classList vai entrar na classe 'quiz' e para ativá-la pelo add com o nome por string.
            screenLose.classList.remove("esconder");
        }
    }
    console.log(jogo.scores);
})

op2.addEventListener('click', (event) => {
    let resposta = event.target.innerText;
    if (resposta === jogo.pegarPergunta().correct) {
       info.innerText = "Você acertou!"; 
    } else {
        info.innerText = "Você errou!";
        jogo.retirarPontos();
        tentativas.innerText = jogo.scores;
        if(jogo.lose === true) {
            quiz.classList.add("esconder");
            screenLose.classList.remove("esconder");
        }
    }
})

op3.addEventListener('click', (event) => { 
    let resposta = event.target.innerText;
    //pelo event listener foi acessado o target que foi tirado as informações
    if (resposta === jogo.pegarPergunta().correct) {
       info.innerText = "Você acertou!"; 
    } else {
        info.innerText = "Você errou!";
        jogo.retirarPontos();
        tentativas.innerText = jogo.scores;
        if(jogo.lose === true) {
            quiz.classList.add("esconder");
            screenLose.classList.remove("esconder");
        }
    }
});

nextButton.addEventListener('click', () => { //função anônima pq o botão não precisa acessar nenhuma informação, só precisa ser clicado
    //chamando a classe pelo 'const jogo', que é o link para o quiz.js  
    jogo.nextQuestion();  
    //a printQuestion vai pegar a pergunta e vai mostrá-la no HTML
    printQuestions();
});



//Aqui estarão todas as funções do jogo

function printQuestions () {
//Função responsável por pegar o texto da pergunta e injetar na "question" do HTML.
    fase.innerText = jogo.pegarPergunta().phase;
    pergunta.innerText = jogo.pegarPergunta().question;
    //pergunta.innerText acessar o texto do html
    op1.innerText = jogo.pegarPergunta().options[0];
    //acessar o texto da op1 pelo innerText. O 'jogo' irá acessar a gaveta 'options' através do pela classe pegarPergunta
    op2.innerText = jogo.pegarPergunta().options[1];
    op3.innerText = jogo.pegarPergunta().options[2];
    //Printar o placar de chances do jogador
    tentativas.innerText = jogo.scores;

}

/*function printNextQuestion() {

}*/

   
    /*//Local para armazenar o output do HTML
    const output = [];

    //Para contruir cada pergunta
    myQuestions.forEach((currentQuestion, questionNumber) =>{
        
        //Uma variável para a lista das opções de respostas
        const options = [];

        //Armazenar a lista das opões de resposta 
        for (letter in currentQuestion.options) {

            //Adicionar um butão por type radio no HTML
            options.push(
                `<label>
                <input type="radio"
                name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.options[letter]}
                </label>`
            );
        }

        //Adicionar a pergunta e a resposta ao output
        output.push(
            `<div class="slide">
                <div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join("")} </div.
            </div>`
        );
    });
        //Unir o output ao HTML e colocá-lo no browser
        quizContainer.innerHTML = output.join("");
        
}

function showResults() {
 */   

