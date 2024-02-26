/*
As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

let digitado = document.querySelector(".mensagem");

function criptografar() {

  if (/^[a-z0-9+\ ]+$/.test(digitado.value)) {
    let cifra = digitado.value.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');

    document.querySelector(".apresentacao__retorno").value = cifra;
    document.querySelector(".apresentacao__retorno").style.display = 'flex';
    digitado.value = '';
    if (document.querySelector(".apresentacao__centraliza")) {
       document.querySelector(".apresentacao__centraliza").remove();
       document.querySelector(".apresentacao button").removeAttribute('style');
    }
  }
}

function descriptografar() {
  if (/^[a-z0-9+\ ]+$/.test(digitado.value)) {
    let decifra = digitado.value.replaceAll('enter', 'e')
                        .replaceAll('imes', 'i')
                        .replaceAll('ai', 'a')
                        .replaceAll('ober', 'o')
                        .replaceAll('ufat', 'u');
    document.querySelector(".apresentacao__retorno").value = decifra;
    digitado.value = '';
  }
}

function copiar() {
  let textoApresentado = document.querySelector(".apresentacao__retorno");
   textoApresentado.select();
   document.execCommand('copy');
   document.querySelector(".apresentacao__retorno").value = ''
}
