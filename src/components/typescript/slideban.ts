const slider = document.querySelector('.slider')

const sliders = async () => {
  const data = await fetch("http://localhost:3000/slides")
  const res = await data.json()
  res.forEach((item: { image: string; title: string; link: string }) => {
    const swiperSlide = document.createElement('swiper-slide')
    const img = document.createElement('img')
    img.classList.add("w-full","h-full","object-cover")
    const link = document.createElement('a')
    link.href = item.link
    img.src = item.image
    img.alt = item.title
    link.appendChild(img)
    swiperSlide.appendChild(link)
    slider?.appendChild(swiperSlide)
    slider?.classList.add("w-full","h-[380px]","rounded-[10px]")
  })
}

const slidertwo = document.querySelector('.slidertwo')
const sliderstwo = async () => {
  const data = await fetch("http://localhost:3000/slides")
  const res = await data.json()
  res.forEach((item: { image: string; title: string; link: string }) => {
    const swiperSlide = document.createElement('swiper-slide')
    const img = document.createElement('img')
    img.classList.add("w-full","h-full","object-cover","rounded-[20px]")
    const link = document.createElement('a')
    link.href = item.link
    img.src = item.image
    img.alt = item.title
    link.appendChild(img)
    swiperSlide.appendChild(link)
    slidertwo?.appendChild(swiperSlide)
    swiperSlide.classList.add("w-[100%],","p-1");
    slidertwo?.classList.add("w-full","h-[180px]","max-h-[500px]","rounded-[20px]")
  })
}

export { sliders, sliderstwo }