let lista = [1, 46, 84, 35, 15, 68, 81, 67, 64, 18];

function verificaNumero() {
  let numeroUsuario = parseInt(prompt("Digite um número:"));
  if (lista.includes(numeroUsuario)) {
    alert(`O número ${numeroUsuario} está na lista.`);
  } else {
    alert(`O número ${numeroUsuario} não está na lista.`);
  }
}

verificaNumero();