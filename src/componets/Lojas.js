export default function Home(dados, url1) {
 
    let home = "";
    dados.forEach((item) => {
     
        home += `  
     <div>
     <a href="${`${url1 +"?"+ item.Id}`}"  target="_blank">
      <img class="logo"src="${item.Logo}">   
      <span>${item.Nome}</span>
      </div>
      </a>
      `;
    });

    return home;
}