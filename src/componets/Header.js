export default function Header(data) {
  let header = ``;
  
  data.forEach((element) => {
    header += `
   <div>
   <h1>${element.Nome}</h1>
   <h2>Monte seu Cardapio agora mesmo.</h2>  
   </div>  
   `;
  });
  return header;
}
