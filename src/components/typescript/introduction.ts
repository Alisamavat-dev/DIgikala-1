let introductionContainer = document.querySelector(".introduction");
let introductions = async () => {
  let data = await fetch("http://localhost:3000/introduction");
  let res = await data.json();
  res.map((introduction: { image: string; title:string}) => {
    let A = `
    <div>
      <img class="rounded-2xl" src="${introduction.image}" alt="${introduction.title}">
    <div>
    `;
    introductionContainer?.insertAdjacentHTML("beforeend", A);
  });
};

export default introductions;