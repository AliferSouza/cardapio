import whatsapp from "../whatsapp/whatsapp.js";

export default function Localizacao(Dados, compararUrlEApi) {
  navigator.geolocation.getCurrentPosition(sucesso, erro, {
    enableHighAccuracy: true,
    timeout: 100000000,
  });

  function sucesso(position) {
    const latLog = []
    const Numero = []
    var mesaEndereco = prompt("Digite N° da MESA ou seu Endereço: ");
    latLog.push(position.coords.latitude);
    latLog.push(position.coords.longitude);
     const data = {
      lat: latLog[0],
      log: latLog[1],
      Dados: Dados,  
    } 
    compararUrlEApi.forEach((item)=>{
      Numero.push(item.Whatsapp)
    })

  whatsapp(data, Numero, mesaEndereco);
  }


}
function erro(position) {
  return position;
}
