import API from "./api/api.js";
import Router from "./route.js";
import Context from "./context/context.js";

let dados = await API();


const data = []
var [url1, url2] = location.href.split("?")

let compararUrlEApi = dados
.filter((item) =>  (item.Id === url2))

compararUrlEApi.forEach((item)=>{
  let linksFiltrados = item.Produtos
  linksFiltrados.forEach((produtos)=>{
  data.push(produtos)
  })    
})    




const App = () => {
  Router(data, dados, compararUrlEApi, url1, url2);
  Context();
}

export { App };
