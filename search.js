
async function buscarProdutos() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const res = await fetch('produtos.json');
  const produtos = await res.json();
  const container = document.getElementById("produtos");
  container.innerHTML = "";
  produtos
    .filter(p => p.nome.toLowerCase().includes(query))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `<img src="${p.imagem}" width="100"><h3>${p.nome}</h3><p>R$ ${p.preco.toFixed(2)}</p>`;
      container.appendChild(div);
    });
}
window.onload = buscarProdutos;
