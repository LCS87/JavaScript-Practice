var intervalo = 2000;

function slide1() {
    document.getElementById('banner').src = "imagem.jpg";
    setTimeout("slide2()",intervalo);
}

function slide2() {
    document.getElementById('banner').src = "imagem2.jpg";
    setTimeout("slide3()",intervalo);
}
function slide3() {
    document.getElementById('banner').src = "imagem3.jpg";
    setTimeout("slide1()",intervalo);
}