export default function whatsapp(data, mesaEndereco) {
  const dadosdata = []
  const Total = document.querySelector(".button-total").textContent;

  window.open(
    "https://api.whatsapp.com/send?phone=5531993253883&text=" +
    `Produtos: ${data.dados}\n Mesa/Endereço: ${mesaEndereco}\n Total: ${Total}`
  );


}
