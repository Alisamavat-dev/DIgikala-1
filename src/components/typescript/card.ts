let cardContainer = document.querySelector(".card");
let cardslider = async () => {
  let data = await fetch("http://localhost:3000/card");
  let res = await data.json();
  res.map((card: { image: string; title: string }[]) => {
    let A = `

<div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
    <div class="grid grid-cols-2 gap-4">
        <div class="text-center">
            <img src="${card[0].image}" alt="${card[0].title}" class="w-full h-auto rounded-lg">
            <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${card[0].title}</p>
        </div>
        <div class="text-center">
            <img src="${card[1].image}" alt="${card[1].title}" class="w-full h-auto rounded-lg">
            <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${card[1].title}</p>
        </div>
        <div class="text-center">
            <img src="${card[2].image}" alt="${card[2].title}" class="w-full h-auto rounded-lg">
            <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${card[2].title}</p>
        </div>
        <div class="text-center">
            <img src="${card[3].image}" alt="${card[3].title}" class="w-full h-auto rounded-lg">
            <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${card[3].title}</p>
        </div>
    </div>
</div>

    `;
    cardContainer?.insertAdjacentHTML("beforeend", A);
  });
};

export default cardslider;
