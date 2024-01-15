var pontos = 0;

function mudar(){
    var objeto = document.getElementById("circulo");

    var LarguraJanela = window.innerWidth;
    var AlturaJanela = window.innerHeight;

    var maxX = LarguraJanela - objeto.offsetWidth;
    var maxY = AlturaJanela - objeto.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    objeto.style.left = aleatorioX + "px";
    objeto.style.top = aleatorioY + "px";

    // Aumentar a pontuação
    pontos++;
    document.getElementById("pontos").innerText = pontos;
}