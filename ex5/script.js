let nomes = [];

for (let i = 0; i < 5; i++) {
  let nome = prompt("Digite um nome:");
  nomes.push(nome);
}

document.write("Nomes digitados: ");
for (let i = 0; i < nomes.length; i++) {
  document.write(nomes[i]);
  if (i !== nomes.length - 1) {
    document.write(", ");
  }
}

document.write("<br>Nomes na ordem inversa: ");
for (let i = nomes.length - 1; i >= 0; i--) {
  document.write(nomes[i]);
  if (i !== 0) {
    document.write(", ");
  }
}