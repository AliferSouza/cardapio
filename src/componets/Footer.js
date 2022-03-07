export default function Footer(data) {
  let footer = ``;
  data.forEach((element) => {
    footer += `
    <h5 style="text-align: center; color: #fa7921; font-size: 2rem">
    ${element.Nome}
    </h5>
   `;
  });
  return footer;
}
