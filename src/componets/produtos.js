function cardFoods(dados) {
  let cardFoods = ``;
  dados.forEach((dado) => {
    cardFoods += `    
        <div class="food">
        <h6 class="id">${dado.Id} </h6>
            <div class = "food-img">
                <img class = "img" src = "${dado.Imagem}" alt = "food image">
                <span>
                    <i class = "far fa-heart"></i>
                </span>
                
                <h3 class = "food-rate">Preco: ${dado.Preco}</h3>
            </div>
        
            <div class = "food-content">
                <h2 class="Titulo">${dado.Titulo}</h2>
                <p class="Descrição">${dado.Descricao}</p>
                <div class = "food-info">
                    <div>
                        <i class = "fas fa-fire"></i>
                        <p>${dado.Infocaloria}</p>
                    </div>
                    <span>${dado.Categoria}</span>
                </div>
        
                <div class = "food-price-calc">
                    <h2 class = "food-total">$ 0.00</h2>
                    <div class = "food-quantity">
                        <div class = "order-dec center">
                        <h3>-</h3>
                                            </div>
                        <div class = "order-val center">0</div>
                        <div class = "order-inc center">
                          
                           <h3>+</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
`;
  });

  return cardFoods;
}
export default cardFoods;
