let slideContainer = document.querySelector(".swipers");
let sliders = async () => {
  let data = await fetch("http://localhost:3000/slider");
  let res = await data.json();
  res.map((swiper: { image: string; title: string }[]) => {
    let slides = `
<swiper-slide class="w-[80px] p-1 sm:w-[100px] md:w-[150px] lg:w-[165px]">
<div class="flex flex-col items-center justify-center mb-5">
<img class="w-full p-1 mb-2 md:w-28" src="${swiper[0].image}"/>
<p class=" h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${swiper[0].title}</p>
</div>
<div class="flex flex-col items-center justify-center">
<img class="w-full p-1 mb-2 md:w-28" src="${swiper[1].image}"/>
<p class=" h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${swiper[1].title}</p>
</div>
</swiper-slide>
    `;
    slideContainer?.insertAdjacentHTML("beforeend", slides);
  });
};

export default sliders;

// interface Slide {
//   image: string;
//   title: string;
// }

// const slideContainer = document.querySelector(".swipers") as HTMLElement;

// const fetchData = async (): Promise<Slide[]> => {
//   const response = await fetch("https://ali-samavat.github.io/API/db.json");
//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }
//   return await response.json();
// };

// const renderSlides = (slidesData: { image: string; title: string }[]): void => {
//   slidesData.forEach((swiper) => {
//     const slides = `
//       <swiper-slide class="w-[80px] p-1 sm:w-[100px] md:w-[150px] lg:w-[165px]">
//         <div class="flex flex-col items-center justify-center mb-5">
//           <img class="w-full p-1 mb-2 md:w-28" src="${swiper.image}" />
//           <p class="h-[43px] text-center overflow-hidden text-ellipsis text-[12px] md:text-[15px]">${swiper.title}</p>
//         </div>
//       </swiper-slide>
//     `;
//     slideContainer?.insertAdjacentHTML("beforeend", slides);
//   });
// };

// const sliders = async (): Promise<void> => {
//   try {
//     const result = await fetchData();
//     renderSlides(result);
//   } catch (error) {
//     console.error("Failed to load slides:", error);
//   }
// };

// export default sliders;
