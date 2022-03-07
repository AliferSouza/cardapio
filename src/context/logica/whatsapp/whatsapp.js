const dadosData = []
export default function whatsapp(data, Numero, mesaEndereco) {

  const Total = document.querySelector(".button-total").textContent;
  console.log( `🗒Segue pedido:\n🍔Produtos: ${data.Dados}\n🪑Mesa/Endereço: ${mesaEndereco}\n💰Total: ${Total}\n 🗺 https://www.google.com.br/maps/@${data.lat},${data.log}4,18.75z?hl=pt-BR`);
 //  window.open(
//  `https://api.whatsapp.com/send?phone=${Numero}&text=` +
 //// `Segue pedido:\n🍔Produtos: ${data.Dados}\n🪑Mesa/Endereço: ${mesaEndereco}\n💰Total: ${Total}\n 🗺 https://www.google.com.br/maps/@${data.lat},${data.log}4,18.75z?hl=pt-BR`
   //);


}
