//Elementos do HTML

function buildQuiz() {
    //Local para armazenar o output do HTML
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
    
}