let ReadingsContainer = document.querySelector(".Reading");
let Readings = async () => {
  let data = await fetch("http://localhost:3000/Reading");
  let res = await data.json();
  res.map((Reading: { image: string; title:string}) => {
    let A = `
          <div class="bg-white rounded-lg shadow-lg p-3">
            <img class="rounded-lg" src="${Reading.image}" alt="${Reading.title}" />
            <p class="text-gray-700 p-4 text-[12px] md:text-[13px]">${Reading.title}</p>
          </div>
    `;
    ReadingsContainer?.insertAdjacentHTML("beforeend", A);
  });
};


export default Readings;