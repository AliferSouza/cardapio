
export default function totalIntens() {
  let total = [];
  const itens = document.querySelectorAll(".food-total");
  itens.forEach(function (item) {
    total.push(parseFloat(item.textContent));
  });

  const totalintens = total.reduce(function (total, item) {
    return (total += item || 0);
  }, 0);

  const totalintenss = totalintens.toFixed(2);

  document.querySelector(".button-total").textContent = totalintenss;
}
