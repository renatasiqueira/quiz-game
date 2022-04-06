//Elementos do HTML
const jogo = new Quiz;

const pergunta = document.getElementById("pergunta");

const op1 = document.getElementById("op1");

const op2 = document.getElementById("op2");

const op3 = document.getElementById("op3");

const info = document.getElementById("info");

const start = document.getElementById("start");

start.addEventListener('click', () => {
    printQuestions();   
});

op1.addEventListener('click', (event) => {
    let resposta = event.target.innerText;
    if (resposta === jogo.pegarPergunta().correct) {
       info.innerText = "Você acertou!"; 
    } else {
        info.innerText = "Você errou!";
    }
})

op2.addEventListener('click', (event) => {
    let resposta = event.target.innerText;
    if (resposta === jogo.pegarPergunta().correct) {
       info.innerText = "Você acertou!"; 
    } else {
        info.innerText = "Você errou!";
    }
})

op3.addEventListener('click', (event) => {
    let resposta = event.target.innerText;
    if (resposta === jogo.pegarPergunta().correct) {
       info.innerText = "Você acertou!"; 
    } else {
        info.innerText = "Você errou!";
    }
})

// MÉTODO PARA MUDAR PERGUNTA 

console.log(jogo.pegarPergunta().correct);

function printQuestions () {

    pergunta.innerText = jogo.pegarPergunta().question;
    op1.innerText = jogo.pegarPergunta().options[0];
    op2.innerText = jogo.pegarPergunta().options[1];
    op3.innerText = jogo.pegarPergunta().options[2];

}



   
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

