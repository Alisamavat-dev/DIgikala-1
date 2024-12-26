const aft=document.querySelector(".aft");
const after = async () => {
    const data = await fetch("") 
    const res = await data.json()
    res.forEach((res:any ) => {
      const imgaf = document.createElement('img')
      imgaf.classList.add("w-full","h-full","object-cover")
      imgaf.src = res.imgf;
      aft?.append(imgaf);
    })
  }
  export default after;
  