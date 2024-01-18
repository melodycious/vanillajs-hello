window.onload = () => {
  document.querySelector("#buttonExcuse").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello carlo from the console");
};
let generateExcuse = () => {
  let who = [
    "Mi hamster",
    "Mi tía Luisa",
    "El pájaro del vecino",
    "Mi jefe",
    "Mi hermano"
  ];
  let action = [
    "ha perdido",
    "ha robado",
    "ha roto",
    "ha quemado",
    "ha escondido",
    "ha tirado"
  ];
  let what = [
    "mi proyecto",
    "mi ordenador",
    "mi móvil",
    "mis llaves",
    "mi cartera"
  ];
  let when = [
    "justo ahora",
    "ahora mismo",
    "en este momento",
    "cuando estaba de camino",
    "antes de salir"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
