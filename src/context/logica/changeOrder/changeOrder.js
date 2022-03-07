import totalValorButton from "../totalIntens/totalIntens.js";
import WhatsApp from "../whatsapp/whatsapp.js";
import Localizacao from "../localizacao/localizacao.js";
import API from "../../../api/api.js";
let dados = await API();

const data = []
dados.forEach((item) => {
  let linksFiltrados = item.Produtos
  linksFiltrados.forEach((produtos) => {
    data.push(produtos)
  })
})

let totalDados = [];




function changeOrder(food, index, event, changeType) {

  let foodQuan = parseInt(food.querySelector(".order-val").textContent);
  let foodPrice = parseFloat(
    food.querySelector(".food-rate").textContent.replace(/[^\d.-]/g, "")
  );

  if (changeType === "dec" && foodQuan > 0) foodQuan--;
  if (changeType === "inc") foodQuan++;

  food.querySelector(".order-val").textContent = foodQuan;
  food.querySelector(".food-total").textContent = `${(
    foodQuan * foodPrice
  ).toFixed(2)}`;

  totalValorButton();

  const DadoDoDomComparadoComApi = data.find((dado) => parseInt(dado.Id) === index);
 
  totalDados.push(DadoDoDomComparadoComApi);

  // localStorage.setItem("pegarValores", JSON.stringify(totalDados));
}

function filter(index, local) {
  
  let Dados = [];
  const groups = totalDados.reduce((acc, current) => {
    if (!acc[current.Id]) {
      acc[current.Id] = { ...current };
      return acc;
    }
    acc[current.Id].Preco = acc[current.Id].Preco + current.Preco;
    return acc;
  }, {});

  const groupsArray = Object.values(groups);


  groupsArray.forEach((group) => {
    Dados.push(group.Titulo + ' Preço: ' + group.Preco);
  });

  Localizacao(Dados)
}

export { changeOrder, filter };
