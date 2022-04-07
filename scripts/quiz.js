//Este arquivo é onde vou criar a classe e acessar as minhas perguntas 
//Montar o quiz 


console.log(perguntas)
class Quiz {

    constructor() {
        this.scores = 15;
        this.questions = [...perguntas];
        this.perguntaAtual = 0;
        this.lose = false;
        //false pq ele começou o jogo, então o jogador não perdeu.
  

    }

    start() {
    console.log('estou na função start');
      
    }

    pegarPergunta() {
      //método de pegar o objeto e tranformá-lo em pergunta atual
     return this.questions[this.perguntaAtual];
    }

   nextQuestion() {
     this.perguntaAtual++
   }

   retirarPontos(){
     this.scores = this.scores - 5;
     //para alterar a pontuação com outro valor será: this.scores--;
     if(this.scores <= 0) {
       //se o scores for menor/igual a zero, vai alterar a condição do lose, de false para true;
       this.lose = true;
     }

   }
















}