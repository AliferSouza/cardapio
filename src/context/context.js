import {changeOrder, filter} from "./logica/changeOrder/changeOrder.js";



export default function Run() {
  const allFood = document.querySelectorAll(".food");

  document.querySelector(".button").addEventListener("click", function () {
    filter();
  });

  allFood.forEach((food, index) => {
    food.addEventListener("click", (event) => {    
      if (        
        event.target.classList.contains("order-dec") ||
        event.target.parentElement.classList.contains("order-dec")
      ) {
        changeOrder(food, index, event, "dec");
   
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


