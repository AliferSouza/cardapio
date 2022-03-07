import {changeOrder, filter} from "./logica/changeOrder/changeOrder.js";



export default function Run() {
  const allFood = document.querySelectorAll(".food");


  allFood.forEach((food, index) => {
    food.addEventListener("click", (event) => {    
      if (        
        event.target.classList.contains("order-dec") ||
        event.target.parentElement.classList.contains("order-dec")
      ) {
        changeOrder(food, index, event, data, "dec", DOMMatrixReadOnly);
   
      }

      if (
        event.target.classList.contains("order-inc") ||
        event.target.parentElement.classList.contains("order-inc")
      ) {
        changeOrder(food, index, event, "inc");
      }     
    });
  }); 
}

document.querySelector(".button").addEventListener("click", function () {
  filter();
});
