// ARRAYS
let amigos = [];

// ELEMENTOS DO DOM
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

// INPUTS
let nomeAmigo = document.getElementById("nome-amigo");

// PROCESSAMENTO & OUTPUTS
function adicionar() {
  let nome = nomeAmigo.value;

  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }
  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  amigos.push(nome);
  listaAmigos.innerHTML += `<li>${nome}</li>`;
  nomeAmigo.value = "";
}

function embaralhar(lista) {
  return lista.sort(() => Math.random() - 0.5);
}

function sortear() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos.");
    return;
  }

let sorteados;

do {
  sorteados = embaralhar([...amigos]);
} while (amigos.some((amigo, contador) => amigo === sorteados[contador]));

  listaSorteio.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listaSorteio.innerHTML += `<li>${amigos[i]} => ${sorteados[i]}</li>`;
  }
}

function reiniciar() {
  amigos = [];
  listaAmigos.innerHTML = "";
  listaSorteio.innerHTML = "";
  nomeAmigo.value = "";
}
