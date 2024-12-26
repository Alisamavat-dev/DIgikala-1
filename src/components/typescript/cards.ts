import fetchData from "../../crud/fetch";
import create from "../../crud/create";
// import update from "../../crud/update";
// let designtwo=document.querySelector(".designtwo");
let sheg=document.querySelector(".shegeft");
let contaner=document.querySelector(".product");
let productcontainer=document.querySelector(".productcontainer");
// let productsection=document.querySelector("productsection");

const product = async () => {
    let data = await fetchData("http://localhost:3000/product");
    data.forEach((product: { imageUrl: string; title: string; price: number; realPrice: number; discount: number }) => {
        let cardContainer = document.createElement("div");
        let cardImg = document.createElement("img");
        let cardTitle = document.createElement("h2");
        let cardPrice = document.createElement("div");
        let title = document.createElement("span");
        let discount = document.createElement("span");
        let realPrice = document.createElement("span");
        let price = document.createElement("span");
        let priceContainer = document.createElement("div");
        let logo = document.createElement("img");
        let priceLogo = document.createElement("div");

        logo.src = "../../../public/img/svgexport-17.svg";
        cardImg.src = product.imageUrl;
        cardImg.alt = product.title;
        cardImg.classList.add("w-full", "object-cover");

        cardTitle.textContent = product.title;
        cardTitle.classList.add("text-[12px]", "text-[#62666d]", "font-[600]", "w-[144px]", "h-[39px]", "mt-2", "flex", "justify-center", "overflow-hidden", "text-ellipsis");

        price.textContent = `${product.price} `;
        realPrice.textContent = `${product.realPrice} `;
        discount.textContent = `${product.discount}%`;
        priceLogo.append(price, logo);
        priceLogo.classList.add("flex");
        title.classList.add("font-medium");
        price.classList.add("font-bold", "ml-1", "text-[14px]");
        discount.classList.add("bg-red-600", "w-[34px]", "h-[20px]", "text-center", "py-[1px]", "px-[2px]", "text-white", "px-2", "rounded-[20px]", "text-sm", "ml-2", "font-bold");
        realPrice.classList.add("text-gray-500", "line-through", "ml-2", "text-[12px]");
        priceContainer.append(discount, priceLogo);
        priceContainer.classList.add("flex", "justify-between", "px-[10px]");
        cardPrice.append(title, priceContainer, realPrice);
        cardTitle.classList.add("px-[10px]");
        realPrice.classList.add("flex", "justify-end", "px-[23px]");
        cardContainer.append(cardImg, cardTitle, cardPrice);
        cardContainer.classList.add("rounded-md", "shadow-md", "bg-white");
        let slide = document.createElement('swiper-slide');
        slide.append(cardContainer);
        slide?.append(cardContainer);
        slide.classList.add("!w-[170px]", "h-[255px]","flex","!gap-[1px]");
        contaner?.classList.add("w-[90%]", "h-[255px]","flex","frist:rounded-[20px]");
        productcontainer?.classList.add("w-[80%]", "bg-[#dd314e]","h-[380px]", "md:h-[300px]", "flex", "items-center", "first:rounded-[20px]","flex",);
        discount.classList.add("text-[12px]");
        cardContainer.classList.add("w-[160px]", "h-[255px]");
        cardPrice.classList.add("p-[5px]");
        let design=document.createElement("div");
        let designtwo=document.createElement("div");
        let logocr=document.createElement("img");
        let logodis=document.createElement("img");
        let moredes=document.createElement("div");
        let textdes=document.createElement("a");
        let imgdes=document.createElement("img");
        logocr.src="../../../res/shegeft.svg";
        logodis.src="../../../res/logodis.svg";
        sheg?.append(design);
        logocr.classList.add("w-[88px]","h-[88px]");
        logodis.classList.add("w-[88px]","h-[88px]","pb-[10px]");
        sheg?.classList.add("h-[166px]","w-[126px]","px-[16px]","mx-[20px]","flex","flex-col","gap-[px]","justify-center");
        design.classList.add("hidden","w-[300px]","h-[100%]","md:flex","flex-col","justyify-start","pX-[36px]");
        designtwo.classList.add("md:hidden","w-[300px]","h-[100%]","flex","justyify-start","pX-[36px]");
        textdes.textContent="مشاهده همه"
        textdes.classList.add("text-[14px]");
        imgdes.src="../../../res/arrow.svg"
        imgdes.classList.add("w-[18px]","h-[18px]","align-center");
        moredes.append();
        moredes.classList.add("flex","text-white","justify-start","items-center","align-baseline","h-[126px]","w-[100px]");
        design.append(logocr,logodis,moredes);
        contaner?.append(slide);
    }); 
}
const form = document.getElementById('formd');
form?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const cardData = Object.fromEntries(formData);
    
    try {
        await create('http://localhost:3000/product', cardData);
        (event.target as HTMLFormElement).reset();
        if(contaner) contaner.innerHTML = '';
        await product();
    } catch (error) {
        console.error('Error creating card:', error);
    }
});
const deleteForm = document.getElementById('deleteForm');
deleteForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const cardId = formData.get('cardId');
    try {
        const response = await fetch(`http://localhost:3000/product/${cardId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete card');
        }
        
        (event.target as HTMLFormElement).reset();
        if(contaner) contaner.innerHTML = '';
        await product();
    } catch (error) {
        console.error('Error deleting card:', error);
    }
});

const updateForm = document.getElementById('updateForm');
updateForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const cardId = formData.get('cardId');
    const cardData = Object.fromEntries(formData);

    try {
        const response = await fetch(`http://localhost:3000/product/${cardId}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cardData),
        });
    
        if (!response.ok) {
            throw new Error('Failed to update card');
        }
    
        (event.target as HTMLFormElement).reset();
        if(contaner) contaner.innerHTML = '';
        await product();
    } catch (error) {
        console.error('Error updating card:', error);
    }
    
});




export default product; 