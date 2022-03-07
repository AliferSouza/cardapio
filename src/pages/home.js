import Header from "../componets/Header.js";
import Lojas from "../componets/Lojas.js";

export default function Home(dados, url1) {
      let home = "";   

      home += `     
      <div style="padding-top: 1rem; margin: 10%">
      <div class="header" style="margin-top: -2rem ">FoodBox</div>
      </div>   

       <div class="container">
        ${Lojas(dados, url1)}
       </div>            
  `;
    return home;
}