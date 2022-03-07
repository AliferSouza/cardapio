import API from "./api/api.js";
import cardOutros from "./componets/produtos.js";
import Header from "./componets/header.js";
import Button from "./componets/button.js";
import Context from "./context/context.js";
var [url1, url2] = location.href.split("?")
let dados = await API();


const data = []

let compararUrlEApi = dados
.filter((item) =>  (item.Id === url2))

compararUrlEApi.forEach((item)=>{
  let linksFiltrados = item.Produtos
  linksFiltrados.forEach((produtos)=>{
data.push(produtos)

  })
    
})    




const header = document.querySelector(".header");
const cardfoods = document.querySelector(".foods");
const carddrinks = document.querySelector(".drinks");
const cardoutros = document.querySelector(".outros");
const button = document.querySelector(".button");


const App = () => {

  if(url2 === undefined){ 
    alert("Por favor, selecione um perfil")
  }
  else{ 
    
  let dadoslanche = data.filter((item) => {
    return (item.Categoria === "Lanche" && (item.Quantidade > 0))
  })
  let dadosBebida =  data.filter((item) => {
    return (item.Categoria === "Bebida" && (item.Quantidade > 0))
  })
  let dadosOutros =  data.filter((item) => {
    return (item.Categoria === "Outros" && (item.Quantidade > 0))
  })

  header.innerHTML = Header(compararUrlEApi);
  cardfoods.innerHTML = cardOutros(dadoslanche);
  carddrinks.innerHTML = cardOutros(dadosBebida);
  cardoutros.innerHTML = cardOutros(dadosOutros);
  button.innerHTML = Button();
  Context(data);
  }


};

export { App };
