//Este arquivo é onde vou criar a classe e acessar as minhas perguntas 
//Montar o quiz 


console.log(perguntas)
class Quiz {

    constructor() {
        this.scores = 0;
        this.questions = [...perguntas];
        this.perguntaAtual = 0;

        this.result = "";

    }

    start() {
    console.log('estou na função start');
      
    }

    pegarPergunta() {
     return this.questions[this.perguntaAtual];
    }

    resultado(){
      return this.result[this.correct];
    }
















}