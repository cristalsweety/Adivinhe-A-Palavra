var jogador1 = localStorage.getItem("n1");
var jogador2 = localStorage.getItem("n2");
document.getElementById("Joga1Placar").innerHTML = jogador1;
document.getElementById("Joga2Placar").innerHTML = jogador2;

document.getElementById("turnoPerg").innerHTML = "Turno de pergunta: " + jogador1;
document.getElementById("turnoResp").innerHTML = "Turno de resposta: " + jogador2;

var perguntaTurn = jogador1;
var respostaTurn = jogador2

var scoreJog1 = 0;
var scoreJog2 = 0;


var perguntaVar;

function envPerg() {
    perguntaVar = document.getElementById("enviarPergunta").value;

    perguntaVar = perguntaVar.toLowerCase();

    var charInicio = perguntaVar.charAt(1);
    console.log(charInicio);

    var tamanho = perguntaVar.length;

    var indice = tamanho / 2;

    var charMeio = perguntaVar.charAt(indice);
    console.log(charMeio);
    var charFim = perguntaVar.charAt(tamanho - 1);

    console.log(charFim);



    var _charInicio = perguntaVar.replace(charInicio, "_");
    console.log(_charInicio);

    var _charMeio = _charInicio.replace(charMeio, "_");
    console.log(_charMeio);


    var _charFim = _charMeio.replace(charFim, "_");
    console.log(_charFim);



    var mostrandoPerguntaPronta = "<h3 id='p' >" + _charFim + "</h3>" + "<br>";
    var imputBox = "<input id='caixa'>";
    var checkButton = "<button onclick='check()' class='btn btn-primary'> Checar! </button>";

    var linha = mostrandoPerguntaPronta + imputBox + checkButton;

    document.getElementById("output").innerHTML = linha;
    document.getElementById("enviarPergunta").value = "";



    if (tamanho < 04) {
        var error = "<h4 style ='color:red'> Por favor, digite uma palavra com mais de 5 dígitos.</h4>"
        document.getElementById("output").innerHTML = error
    }

}

function check() {
    var resposta = document.getElementById("caixa").value
    resposta = resposta.toLowerCase()

    if (resposta == perguntaVar) {
        if (respostaTurn == jogador1) {
            scoreJog1 = scoreJog1 + 1
            document.getElementById("pointJoga1").innerHTML = scoreJog1
        } else {
            scoreJog2 = scoreJog2 + 1
            document.getElementById("pointJoga2").innerHTML = scoreJog2

        }
    }else{
        if (perguntaTurn == jogador1) {
            scoreJog1 = scoreJog1 + 1
            document.getElementById("pointJoga1").innerHTML = scoreJog1
        } else {
            scoreJog2 = scoreJog2 + 1
            document.getElementById("pointJoga2").innerHTML = scoreJog2

} }

    if (perguntaTurn == jogador1) {
        perguntaTurn = jogador2
        document.getElementById("turnoPerg").innerHTML = "Turno de pergunta - " + perguntaTurn


    } else {
        perguntaTurn = jogador1
        document.getElementById("turnoPerg").innerHTML = "Turno de pergunta - " + perguntaTurn

    }

   
   
   
   
   
   
   
    if (respostaTurn == jogador1) {
        respostaTurn = jogador2
        document.getElementById("turnoResp").innerHTML = "Turno de resposta - " + respostaTurn


    } else {
        respostaTurn = jogador1
        document.getElementById("turnoResp").innerHTML = "Turno de resposta - " + respostaTurn

    }

document.getElementById("output").innerHTML = "Quando enviada, a pergunta será exibida aqui."








}