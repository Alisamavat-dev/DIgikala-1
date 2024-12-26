let headerContainer = document.querySelector(".header");
let header = async () => {
  let data = await fetch("http://localhost:3000/header");
  let res = await data.json();
  res.map(
    (head: {
      login: string;
      loadingimg: string;
      banner: string;
      input: string;
      logo: string;
    }) => {
      let heads = `

    <div class="w-full md:flex flex-col hidden  dark:text-black border-2 border-gray-300 fixed z-50 bg-white">
        <div class="w-full">
        <img class=[w-full] src="${head.banner}"
        alt="">
    </div>

        <div class="w-full px-5  flex items-center justify-between  dark:text-black">
            <div class="w-auto flex">
                <a href="#" class="flex items-center">
                    <img src="${head.logo}" width="195" height="30" alt="" />
                </a>
                <div class=" w-[400px] lg:w-[600px]  h-[44px]  rounded-lg  py-1 
                    px-2 flex-grow flex relative ">
                    <svg class="bi bi-search absolute top-[14px] right-4" xmlns="http://www.w3.org/2000/svg" width="18"
                        height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                    <input type="text" placeholder="جستجو" class="bg-gray-200 w-full bg-transparent px-11 border-2 border-gray-400 rounded-full " name="" id="">  
                </div>
            </div>

            <div class=" flex justify-end items-center gap-3 p-2">
                <a href="./sing in.html" class="border-2 border-gray flex justify-center items-center py-2 px-4 rounded-xl font-iran_Bold text-xs 
            gap-1 cursor-pointer">
            <svg class="w-3" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; fill: var(--color-icon-high-emphasis);" width="24" height="24"><defs><symbol id="registerationSignIn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z" clip-rule="evenodd"></path></symbol></defs><g><path fill-rule="evenodd" d="M16 15h-2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v2h2V7a4 4 0 00-4-4H6a4 4 0 00-4 4v10a4 4 0 004 4h6a4 4 0 004-4v-2zm6-4H9.414l2.293-2.293-1.414-1.414-4 4a1 1 0 000 1.414l4 4 1.414-1.414L9.414 13H22v-2z" clip-rule="evenodd"></path></g></svg>
                    <span>ورود</span>
                    <span>|</span>
                    <span class="text-nowrap">ثبت نام</span>
                </a>
                <span class="">
                <a href="./basket.html">
                    <span>
                        <svg style="transform: scaleX(-1);" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        fill="currentColor" class="bi bi-cart cursor-pointer" viewBox="0 0 16 16">
                            <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                    </span>
                </a>
            </div>
        </div>

        <div
            class="text-xs flex justify-between mx-auto w-full mt-7 px-5">
            <div class="flex justify-start items-center relative">
                <ul class="h-full">
                    <li id="list_categories" class="flex h-full justify-center items-center font-iran_Bold gap-1">
        <button onclick="toggleNav()" class="w-16 h-10 text-white font-bold py-2 px-4"
        >
          <img src="./res/svgexport-6.png" alt="Toggle Navigation"/>
        </button>
                        


            </li>
                </ul>
                    <span class="mx-4 text-lg text-gray">|</span>
                    <ul id="nav_items" class="flex items-center relative">
                    <div id="marker" style="background-color:#ef4056"></div>
                    <li class="flex mx-2 flex-col">
                    <div class="flex gap-1 items-center py-[7px]">
                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px; fill: var(--color-icon-low-emphasis);" width="16"  height="16" ><defs><symbol id="amazing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd"></path></symbol></defs><use xlink:href="#amazing"></use></svg>
                    <a href="">شگفت انگیزها</a>
                    </div>
                </li>

                <li class="xl:flex hidden mx-2 flex-col ">
                    <div class="flex gap-1 items-center py-[7px]">
                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px; fill: var(--color-icon-low-emphasis);" width="16"  height="16" ><defs><symbol id="discount" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 4a1 1 0 011 1v14a1 1 0 01-1 1H6a1 1 0 01-.707-.293l-4-4A1 1 0 011 15V9a1 1 0 01.293-.707l4-4A1 1 0 016 4h16zm-1 2H6.414L3 9.414v5.172L6.414 18H21V6zm-6 3.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 12a3 3 0 11-6 0 3 3 0 016 0zm-4 0a1 1 0 102 0 1 1 0 00-2 0zm12.848-3.47l-5 8-1.696-1.06 5-8 1.696 1.06z" clip-rule="evenodd"></path></symbol></defs><use xlink:href="#discount"></use></svg>
                            <a href="">تخفیف و پیشنهادها</a>
                    </div>
                </li>
                <span class="mx-4 text-lg text-gray">|</span>

                <li class="flex mx-2 flex-col ">
                    <div class="flex gap-1 items-center py-[7px]">
                        <a href="">سوالی دارید؟</a>
                    </div>
                </li>
                <li class="flex mx-2 flex-col ">
                <a href="">در دیجی کالا بفروشید!</a>
                        
                </li>
                </ul>
            </div>

            <div class="flex justify-end items-center">
                <ul class="relative">

                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pin-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z" />
                                <path fill-rule="evenodd"
                                    d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                            </svg>
                            <a href="">لطفا شهر خود را وارد کنید</a>
                        </div>
                </ul>
            </div>
        </div>
    </div>

    <div class="w-full px-4 pt-5 md:hidden flex flex-col  dark:text-black border-2 border-gray-300">
        <div class="w-full flex justify-between items-center">
            <div class="flex justify-start items-center w-1/3">
                <img class=" rounded-md" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEXkATj////9///iATf//f7kATn+//7lADf8/v/6///jAC7iATX//v3oADjkADHnADX/+//dACblACriACT/+PzjATzRAC7YACXTAB7rADbmAC3fACzaU3TmADHXAC3bACHcR2vYBTjlYXnZPWH35OvSBT/52+HVU3TQPmHxz9Tpr7vaABjnnKvXVW/fhJnYcI7WYHfOQVrNJU/RNlfbZoPbVn3rv8rvssXRJE3TD0fcb4bopbTwzd7+7vHNABXkiJ302dvwrMLbUWvfRG7hjZvbFU/PADnaeo/VO1Dej5397PP92OTdNVldKumdAAAI1UlEQVR4nO2aC1fayhbHM49kMpmQF4QgESIlooK21nppKbW2nj6u9nz/z3P3BD2lLfK4JOi9a/9WxdVq2fxn9nMmhoEgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgK2Fs9lW8siezXKmdeyvGz9cdM2e/krcvFCrPE4aozMjjCM9TFS+rabJaz++92E9ULFhtp5uohNHdf9FzVKV+ajK/G/UbkuSHng8Sq7P0J0r1BlTyo0jVWCUOVKyb6e+lx5wGNvnR8ne5g2Brr3VCLc7JWaqqicV7hWnflsR2bToc1cyybSxldCoty6YWPYsqWltmxoy1XzcsUkBf1j1zR+mUmUrVXxEagF1OyVldGXEFnspEzei8Dii/V0jOo13lU2Z47X0iC9MWl2C57Fic7ZQvvOPAouQebh2kO5PY7kvbmi2uLW161lYlGyhevQh2kLgPCiVxX7d3IFGbcC5ci1M+CxBuc3oWwmcSJVpXEINGevwQgzM35bLxJvVBfrUyYyHaFw3qzpkmNtkPfT8uM9UxoTpvAsnnzXCQ2Ie1FKLSfOOz6OJK0vnFJa4kR/XY75VnhfnMeW1b9rwVCuXX5vshY6LCbYQGPzywqB3QedtEwi5GsSgnl2tvV3vOMaQx+csWwh9Yy8uMFYFafgFmM9/I/gVJDcLwl9XlnNL9uiqnXJnMNJXT57+4ycNSguHbrMOYWcUwBe8pzNHLYjH/REuEUFTm1nWDxYYJhd52F1jhxLLIuOmJStphVjOd5C2x6aLFJXZAjiLojbdXCHvYOXalXGSFcyhSMn+Xir0qWjjmTAaE2mTR4kLRkGS/o8B/tjUDA1OzYdOFnqKxLBm8z3ReKy/d6GJnMDU6b0jX1o3aoj2UXAaTjrm98yizfkosstBT7qHkbS9icVxWo8FiJWLf6b6VoO1Rw7q9moZq+4VV8ejDEnUa14W5LfP8sjxVxGatk51dUXehf87xo1XCqnrxx1UKiRVwMj4Mve2tFYi4U2+OyeIMMw/NE7V9EgcvHeqWfpklLm2bBteJU4Y+UBi1XgbE5ktt6uAg46yEFK6Yc0BksFwiAIF/dzmKmAdlTCl9pmNu5rWm7v/gvygnO8+hylvLFcIQAKNih21o5U+g2rDkFCSuEEiKhJefZZ5iMCqzeFOFpqkP8hhzsptPFFL3wgQ6h2tTOu0KtbVCXQ/3shMiVwW9XlPo4gaXWegwfSBgGhvZht9nnp+2XnyCYT7QGpeLhHHqJKuVoVD4sVLJYHXUQ9ni4Ko0v27WnVqNbbqHouaFze8DcHdLWi7XredShXLQhXq/vZcWsE7vDnrQVY6jcaFM8bcHrQgKlW5XdbUyH/FY/VPorxUMCYZQ7dbxZ07lygoB2BTMXB36egNKaReZ6atJAxLmGgp1rworkZ/+3QodpUAADAmm+fPe4f4ti6DTP4R0r4SXjt6d5tBNr0xoBZYdyOCiU2IrPJuz5VrWaaFRWjSf7jejKDK0iIWNefFvwnDqYXIzzSEbQ1VdVSFmuIHt9jt+iYc14Ekq6gcrs02hkOuA5FAg4dv49q9uqx55ni9+nqo8DANKpe3wY7N/O26APGlLS66IvQfg944jVeJxGysu09pvGrDKa30C0OkW8UTB7wbDL2dfm90kCaOo3XY6HceJ0jBMkubk6MvnH7b+LWKts3gzYGCj7lFU6j2bYLoW+86bBrVX5tTfsYtt4fnJ2+n0y/V74Pv19fTz+EMe6AVYOJUtg3IYGPUOljqQQkYQPcYiHYubSrQsixYi4UXee8DMF/U/kDX9cg4pG/22x8pVqBMhFFeRTq42/Diz8xwIHPBDDkOIpVVy1+JQe6AtA/Xr5ZY5gaRxkUK1FZXcsqn2t8G62WA5dN2A/gdoAaCVozbNJyU1+IvYU6o7fmTmrh7Yb1jcD02vwiNoKG2qNX38RKNSfQC46HBU6d2z7o7N7P3Kvr8KtJdK8n0kmFHytcwfKkX07ztCbeiy1+riSlMopbw6rutGr9oHTgy21/MgGHVK3OlWSko/9NqzPqbSp010L89qo5eEyk3z/HZQcvtRxZ3qt9CYDT3ZmwF01zvSCA0gpXm/Lkwj3s2lLOyi2UlOiY7FjbuuTYEOVxeJactT/k7UzRQCnayfE3etcWM7hZBiSH4w2vPFLh/+0Bp9p3Xrbt45b6yQWOS25Zg+27VCZZp+ODmptDZyl0BJOpmEUOVNJnbnpf/IFCq7GUgKTbW93gHABuh3lTan+X7i7yJ/LsZThte6vCIwn5cej9wKbJtevWo5quIeZhnQpwoVJS8bdPNZYRX60aDGbZL6zDCfbg9j3QSbIu1e34HAErfR1bdqV1+aoE8/7CFEmc/O/Df4YfIqpzQIpG1LslVIwmgsbV0B8+/ddKePdy5Feb6XHIz1uZO7ZcbhFglglcZHLcf3dvww+RJM8FannU1O7yiVW4YkDCx3p++yNivz2nxrmCl0P+7Vk7Nh47enQ5btKdXoe7TiGLm40abB8CzRJ2lPl10eo/g4wguT82EDJh3ucte1XNe2llyU6anWhRlFi5MBqG2ML5Owo4rE8sz0zdBncsoJk7+mA6s4KixO2B6/i9AnE7bl6gNH2M9P04Puc/PO34HxsaZnyDTKDi+H+kZOH/kuP2KF/YZNHgxfHLYiSJ7x88mfi9C3ZDX9IJ9QsJXht5vr4Y+gCLdFQTj71hgMv9x8S0JH30OwXT1YvQ1zGUJ4adjqTs6vp+OTvPFw0n3/0sgH4+n1+SRphY4+H5zdvz237LIMVnzVaszrpGmYZUm397XfP9g/AP7+etjshkmYtr2aaW7/3NZTom+hGfMVDD9MCMdpOxrf94USMA4VT9+K5x16K9Gdqx4ngeLWPQaKv4jiUEuIcu6pn5iH56RFSU/1PkseNuo3hf+/ghEEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZD/af4DUa+K04FI0BgAAAAASUVORK5CYII=" width="32" height="32" alt="">
                <h2 class="text-slate-800 dark:text-black mx-3 text-sm font-iran_Medium text-nowrap">دانلود اپلیکیشن
                    دیجی کالا</h2>
            </div>
            <button class="bg-black rounded-md text-white text-sm font-iran_Medium py-2 px-4">نصب</button>
        </div>

        <div
            class="w-full h-auto  rounded-full mx-auto  py-1 px-2 flex-grow flex relative mt-4 mb-2 bg-gray-300 border-2 border-gray-400">
            <svg class="bi bi-search absolute top-[12px] right-4 " xmlns="http://www.w3.org/2000/svg"
                width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" placeholder="جستجو" class="w-full outline-none bg-transparent py-1 px-8
     placeholder:text-bg_dark1" name="" id="">
        </div>
    </div>

        <div
      id="nav"
      class="hidden flex-col items-center bg-opacity-10 fixed z-10 md:top-[120px] lg:top-[130px] xl:top-[150px]"
      style="
        transition: transform 0.5s ease-in-out;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        
      "
    >

                     <div style="z-index: 1000">
                            <div id="menu_bg_dark" class="w-screen h-screen bg-menu_bg_dark absolute top-8 left-0 
                            -right-5"></div>

                            <div class="mt-[5px] h-[500px] bg-white absolute top-7 
                            right-0 shadow-[0_3px_6px_0_rgba(0,0,0,0.5)] rounded-b-xl flex overflow-hidden w-auto">

                                <div dir="ltr" class="w-[180px] bg-white dark:bg-bg_dark1 dark:text-bg_dark1 h-full overflow-y-scroll">
                                    <ul id="side_menu" dir="rtl"
                                        class="w-full h-auto flex-col justify-start items-center">
                                        <li data-time="1" class="flex justify-start items-center h-full w-full text-main_digikala">
                                            <a href="" class="w-full flex justify-start items-center h-full py-4 pr-4 pl-3 
                                            gap-2">
                                            <?xml version="1.0" encoding="iso-8859-1"?>

                                            <svg fill="#000000" height="18px" width="18px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                 viewBox="0 0 27.442 27.442" xml:space="preserve">
                                            
                                                <path d="M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546
                                                    c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481
                                                    s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469
                                                    c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469z
                                                     M19.995,21.1H7.448V3.373h12.547V21.1z"></path>
                                            </svg>
                                                <span>موبایل</span>
                                            </a>
                                        </li>
                                        <li data-time="2"
                                            class="flex justify-start items-center h-full w-full bg-slate-200">
                                            <a href="" class="w-full flex justify-start items-center h-full py-4 pr-4 pl-3 
                                            gap-2">
                                            <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" style="width: 18px; height: 18px; fill: var(--color-icon-high-emphasis);" width="18"  height="18" ><defs><symbol id="electronic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v8.723l2.858 4.762A1 1 0 0122 20H2a1 1 0 01-.857-1.515L4 13.723V5zm2 8h12V6H6v7zm-.434 2l-1.8 3h16.468l-1.8-3H5.566z" clip-rule="evenodd"></path></symbol></defs><use xlink:href="#electronic"></use></svg>
                                                <span>کالای دیجیتال </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div id="main_menu" dir="ltr" class="overflow-y-scroll flex-col w-auto
                                 bg-white dark:bg-bg_dark2">

                                    <div data-time="1" dir="ltr" class=" w-auto pt-4 flex-col">
                                        <a dir="rtl" href="" class="flex  text-blue-700 py-3 pr-5 items-center gap-2">
                                            <span class="font-iran_Bold text-nowrap text-[12px]
                                              ">برندهای مختلف گوشی موبایل</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                            </svg>
                                        </a>
                                        <div dir="rtl" class="flex ">
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برندهای مختلف گوشی موبایل</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""></a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی موتورولا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی نوکیا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی موا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی هواوی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سونی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گوگل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی ال جی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اینفینیت اکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی ویوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برند های برتر</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">نوکیا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">هدفون</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایرپاد</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون بیتس</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس قیمت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو میلیون به پایین</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو تا ده میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> ده  تا سی میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سی میلیون به بالا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس عملکرد</a>
       
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گیمینگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">5Gگوشی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی دکمه ای</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی زد اب</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی مناسب عکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی میان رده</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اقتصادی و ارزان</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دانش اموزی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی پرچمدار</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دوسیمکارت</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی کوچک</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی بزرگ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">تبلت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت لنوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس حافظه</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 64 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> موبایل 128 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 256 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 512 گیگابایتی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">ساعت هوشمند</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند شایومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هووشکند هواوی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">مدل های داغ بازار</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایفون 16 پرومکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گلگسی اس 24 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی 14 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هواوی پی 60 پرو
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div data-time="2" dir="ltr" class=" w-auto pt-4 hidden">
                                        <a dir="rtl" href="" class="flex  text-blue-700 py-3 pr-5 items-center gap-2">
                                            <span class="font-iran_Bold text-nowrap text-[12px]
                                              ">برندهای مختلف گوشی
                                                موبایل</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                            </svg>
                                        </a>
                                        <div dir="rtl" class="flex ">
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">لپتاپ</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""></a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ ایسوس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ لنوو</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> لپتاپ سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ مایکروسافت</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">loq لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ROG لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">Tuf gaming لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">Victus لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> MSI Titan لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">Dell G16 لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">alianware لپتاپ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">لوازم جانبی لپتاپ </a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شارژر لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">کیف لپتاپ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">کیبورد</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">هدفون</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایرپاد</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون بیتس</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">پرینتر</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">پرینتر سه بعدی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">پرینتر رنگی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> پرینتر اچ پی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">پرینتر حرارتی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">کنسول بازی</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">پلی استیشن</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایکس باکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> نینتندو</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">اتاری</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">قطعات کامپیوتر</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">کارت گرافیک</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> سی پی یو</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">رم</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">مادربورد</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">تلویزیون</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> تلویزیون ال جی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> تلویزیون سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تلویزیون ایکس ویژن</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تلویزیون سونی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">ساعت هوشمند</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند شایومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هووشکند هواوی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">مدل های داغ بازار</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ tugaming</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">لپتاپ Asus rog</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">کارتگرافیک 4090</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تلویزیون سامسونگ
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div data-time="3" dir="ltr" class=" w-auto pt-4 hidden">
                                        <a dir="rtl" href="" class="flex  text-blue-700 py-3 pr-5 items-center gap-2">
                                            <span class="font-iran_Bold text-nowrap text-[12px]
                                              ">برندهای مختلف گوشی
                                                موبایل</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                            </svg>
                                        </a>
                                        <div dir="rtl" class="flex ">
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برندهای مختلف گوشی موبایل</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""></a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی موتورولا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی نوکیا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی موا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی هواوی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سونی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گوگل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی ال جی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اینفینیت اکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی ویوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برند های برتر</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">نوکیا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">هدفون</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایرپاد</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون بیتس</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اسا قیمت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو میلیون به پایین</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو تا ده میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> ده  تا سی میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سی میلیون به بالا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس عملکرد</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گیمینگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">5Gگوشی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی دکمه ای</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی زد اب</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی مناسب عکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی میان رده</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اقتصادی و ارزان</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دانش اموزی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی پرچمدار</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دوسیمکارت</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی کوچک</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی بزرگ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">تبلت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت لنوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس حافظه</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 64 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> موبایل 128 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 256 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 512 گیگابایتی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">ساعت هوشمند</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند شایومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هووشکند هواوی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">مدل های داغ بازار</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایفون 16 پرومکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گلگسی اس 24 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی 14 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هواوی پی 60 پرو
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div data-time="4" dir="ltr" class=" w-auto pt-4 hidden">
                                        <a dir="rtl" href="" class="flex  text-blue-700 py-3 pr-5 items-center gap-2">
                                            <span class="font-iran_Bold text-nowrap text-[12px]
                                              ">برندهای مختلف گوشی
                                                موبایل</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11"
                                                fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                            </svg>
                                        </a>
                                        <div dir="rtl" class="flex ">
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برندهای مختلف گوشی موبایل</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""></a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی موتورولا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی نوکیا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی موا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی هواوی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی سونی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گوگل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی ال جی </a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اینفینیت اکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی ویوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">برند های برتر</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">نوکیا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">هدفون</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایرپاد</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون سامسنوگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هدفون بیتس</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اسا قیمت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو میلیون به پایین</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">دو تا ده میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> ده  تا سی میلیون</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">سی میلیون به بالا</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس عملکرد</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی گیمینگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">5Gگوشی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> گوشی دکمه ای</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی زد اب</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی مناسب عکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی میان رده</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی اقتصادی و ارزان</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دانش اموزی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی پرچمدار</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی دوسیمکارت</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی کوچک</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گوشی بزرگ</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">تبلت</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت شیاومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">تبلت لنوو</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="mx-8">
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">گوشی بر اساس حافظه</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 64 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href=""> موبایل 128 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 256 گیگابایتی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">موبایل 512 گیگابایتی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">ساعت هوشمند</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند اپل</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند سامسونگ</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هوشمند شایومی</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ساعت هووشکند هواوی</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="mt-8">
                                                    <div class="flex items-center gap-3 hover:text-main_digikala">
                                                        <a href="" class="font-iran_Bold text-nowrap text-[12px] border-r-2
                                                         border-[#f00] pr-3">مدل های داغ بازار</a>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                            fill="currentColor" class="bi bi-chevron-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                        </svg>
                                                    </div>
                                                    <ul class="flex-col justify-start items-start text-[11px] font-iran_Medium
                                                     text-[#7a7a7a] mt-5 leading-8">
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">ایفون 16 پرومکس</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">گلگسی اس 24 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">شیاومی 14 الترا</a>
                                                        </li>
                                                        <li class="hover:text-main_digikala">
                                                            <a href="">هواوی پی 60 پرو
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
    

</div>




    </div>
    
`;
      headerContainer?.insertAdjacentHTML("beforeend", heads);
    }
  );
};

export default header;
