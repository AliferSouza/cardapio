import whatsapp from "../whatsapp/whatsapp.js";

export default function Localizacao(dados) {
  navigator.geolocation.getCurrentPosition(sucesso, erro, {
    enableHighAccuracy: true,
    timeout: 100000000,
  });


  function sucesso(position) {
    const latLog = []
    var mesaEndereco = prompt("Digite N° da MESA ou seu Endereço: ");
    latLog.push(position.coords.latitude);
    latLog.push(position.coords.longitude);


    const data = {
      lat: latLog[0],
      log: latLog[1],
      dados: dados,
    }
 
    whatsapp(data, mesaEndereco);
  }


}
function erro(position) {
  return position;
}
