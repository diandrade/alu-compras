limpar();

//Adicionar no carrinho

function adicionar() {
  //Recuperar produto (nome do produto, valor e quantidades)

  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade").value;

  //Calcular o preço total (quantidade X valor)

  let preco = quantidade * valorUnitario;

  //Adicionar o produto no carrinho

  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML =
    carrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade} X </span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>
</section>`;

  //atualizar o valor total

  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$${totalGeral}`;
  document.getElementById("quantidade").value = "";
}

function limpar() {
    
  //Limpa o carrinho

  totalGeral = 0;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = "";
  let carrinho = document.getElementById("lista-produtos");
  carrinho.innerHTML = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("produto").value = "";
}
