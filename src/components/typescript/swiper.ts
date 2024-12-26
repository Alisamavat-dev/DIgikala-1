let swiperContainer = document.querySelector(".swiper");
let swipers = async () => {
  let data = await fetch("http://localhost:3000/swiper");
  let res = await data.json();
  res.map((swiper: { image: string; title: string }) => {
    let slide = `
    <swiper-slide class="w-[40px] p-1 md:w-[60px] lg:w-[80px] flex flex-col items-center justify-center ">
        <img class=" w-full rounded-full object-cover  p-1 mb-2" src="${swiper.image}" alt="${swiper.title}"/>
        <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[8px] md:text-[10px]" title="${swiper.title}">${swiper.title}</p>
    </swiper-slide>
    `;
    swiperContainer?.insertAdjacentHTML("beforeend", slide);
  });
};

export default swipers;
