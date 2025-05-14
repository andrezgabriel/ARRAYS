let listaDeCompras = [];

function menu() {
  let opcao;

  while (true) {
    opcao = prompt(
      "Escolha uma opção:\n" +
      "1 - Adicionar item\n" +
      "2 - Remover item\n" +
      "3 - Exibir lista\n" +
      "4 - Atualizar item\n" +
      "5 - Sair"
    );

    if (opcao === null || opcao === "5") {
      alert("Programa encerrado.");
      break;
    }

    switch (opcao) {
      case "1":
        adicionarItem();
        break;
      case "2":
        removerItem();
        break;
      case "3":
        exibirLista();
        break;
      case "4":
        atualizarItem();
        break;
      default:
        alert("Opção inválida.");
    }
  }
}

function adicionarItem() {
  const item = prompt("Digite o item a ser adicionado:");
  if (item && item.trim() !== "") {
    listaDeCompras.push(item.trim());
    alert(`"${item}" foi adicionado à lista.`);
  } else {
    alert("Item inválido.");
  }
}

function removerItem() {
  if (listaDeCompras.length === 0) {
    alert("A lista está vazia.");
    return;
  }

  exibirLista();
  const indice = parseInt(prompt("Digite o índice do item a ser removido:"));

  if (!isNaN(indice) && indice >= 0 && indice < listaDeCompras.length) {
    const removido = listaDeCompras.splice(indice, 1);
    alert(`"${removido[0]}" foi removido da lista.`);
  } else {
    alert("Índice inválido.");
  }
}

function exibirLista() {
  if (listaDeCompras.length === 0) {
    alert("A lista está vazia.");
    return;
  }

  let mensagem = "Lista de Compras:\n";
  for (let i = 0; i < listaDeCompras.length; i++) {
    mensagem += `${i}: ${listaDeCompras[i]}\n`;
  }

  alert(mensagem);
}

function atualizarItem() {
  if (listaDeCompras.length === 0) {
    alert("A lista está vazia.");
    return;
  }

  exibirLista();
  const indice = parseInt(prompt("Digite o índice do item a ser atualizado:"));

  if (!isNaN(indice) && indice >= 0 && indice < listaDeCompras.length) {
    const novoValor = prompt("Digite o novo valor para o item:");
    if (novoValor && novoValor.trim() !== "") {
      listaDeCompras[indice] = novoValor.trim();
      alert(`Item atualizado para "${novoValor}".`);
    } else {
      alert("Valor inválido.");
    }
  } else {
    alert("Índice inválido.");
  }
}

// Iniciar o menu
menu();
