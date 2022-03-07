import Home from "./pages/home.js";
import Caradapio from "./pages/Cardapios.js";

const root = document.querySelector(".root");



export default function Router(data, dados, compararUrlEApi, url1, url2) {
    
    if(url2 === undefined){    
      root.innerHTML = '';
      root.innerHTML = Home(dados, url1);
    }
    else{      
      root.innerHTML = '';
      root.innerHTML = Caradapio(data, compararUrlEApi);
     }
  }