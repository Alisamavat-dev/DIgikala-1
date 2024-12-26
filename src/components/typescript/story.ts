let storyContainer = document.querySelector(".story");
let stories = async () => {
  let data = await fetch("http://localhost:3000/story");
  let res = await data.json();
  res.map((story: { image: string; title: string }) => {
    let slide = `
    <swiper-slide class="w-[70px] p-1 md:w-[80px] lg:w-[100px] flex flex-col mt-5 items-center justify-center">
        <img class="w-full rounded-full object-cover border-2 border-pink-700 p-1 mb-2" src="${story.image}" alt="${story.title}"/>
        <p class=" h-[43px] text-center overflow-hidden text-ellipsis text-[10px]" title="${story.title}">${story.title}</p>
    </swiper-slide>
    `;
    storyContainer?.insertAdjacentHTML("beforeend", slide);
  });
};

export default stories;
