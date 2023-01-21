let areaEncriptar = document.getElementById("areaEncriptar");

const btnEncriptar = document.querySelector(".btn__encriptar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

const elements = document.querySelectorAll(".elements");

const btnCopiar = document.querySelector(".boton__aside");
const txtcopiado = document.querySelector(".txtcopiado");

let textEncriptado = document.querySelector(".tex_encriptado");


// ações dos elementos
const ocultarElementos = () => {
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  btnCopiar.classList.remove("ocultar");
  textEncriptado.classList.remove("ocultar");
};

// código para criptografar
const encriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

// código para descriptografar
const desenCriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

//prova
const comprobarVacios = () => {
  if (areaEncriptar.value == "") {
    alert("Insira algum texto");
    location.reload();
  }
};

// teste de letras minúsculas
areaEncriptar.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Escreva seu texto em letras munúsculas");
    location.reload();
  }
});

// teste1
btnEncriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  encriptar();
});

// teste2
btnDesencriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  desenCriptar();
});

// copiando
btnCopiar.addEventListener("click", () => {
  textEncriptado.select();
  textEncriptado.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textEncriptado.value);


  txtcopiado.classList.remove("ocultar");
  setTimeout(() => {
    txtcopiado.classList.add("ocultar");
  }, 1000);
});