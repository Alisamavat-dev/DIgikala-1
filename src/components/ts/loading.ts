function toggleNav(): void {
  const nav = document.getElementById("nav") as HTMLElement;
  const buttonImage = document.querySelector("button img") as HTMLImageElement;
  const header = document.querySelector("header") as HTMLElement;

  if (nav.style.display === "block") {
    setTimeout(() => {
      nav.style.display = "none";
    });
    buttonImage.src = "./res/svgexport-6.png";
  } else {
    nav.style.display = "block";
    setTimeout(() => {
      nav.style.transform = "translateY(0)";
    });
    buttonImage.src = "./res/svgexport-15.png";
  }

  header.style.background = "white";
}


document.addEventListener("DOMContentLoaded", () => {
  const navToggleButton = document.getElementById("navToggleButton") as HTMLElement;
  if (navToggleButton) {
    navToggleButton.addEventListener("click", toggleNav);
  }
});
