const btnElm1 = document.querySelector(".color-btn--1");
const btnElm2 = document.querySelector(".color-btn--2");
const copyBtnElm = document.querySelector(".click-to--copy");
const copyTextElm = document.querySelector(".css-property");
const directionIcons = document.querySelectorAll(".direction-icons span i");

let colorLeft = "#e66465";
let colorRight = "#9198e5";
let direction = "right";
const hexColorGenerator = () => {
  const codeCharString = "0123456789abcdef";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    hexCode += codeCharString[randomIndex];
  }
  return hexCode;
};

const handleLeftBtn = (e) => {
  colorLeft = hexColorGenerator();
  e.target.textContent = colorLeft;
  copyTextElm.textContent = `background-image: linear-gradient(to ${direction}, ${colorLeft}, ${colorRight});`;
  document.body.style.backgroundImage = `linear-gradient(to ${direction}, ${colorLeft}, ${colorRight})`;
};
const handleRightBtn = (e) => {
  colorRight = hexColorGenerator();
  e.target.textContent = colorRight;
  copyTextElm.textContent = `background-image: linear-gradient(to ${direction}, ${colorLeft}, ${colorRight});`;
  document.body.style.backgroundImage = `linear-gradient(to ${direction}, ${colorLeft}, ${colorRight})`;
};

const handleDirectionIcons = (e) => {
  direction = e.target.dataset.direction;
  copyTextElm.textContent = `background-image: linear-gradient(to ${e.target.dataset.direction}, ${colorLeft}, ${colorRight});`;
  document.body.style.backgroundImage = `linear-gradient(to ${e.target.dataset.direction}, ${colorLeft}, ${colorRight})`;
};
btnElm1.addEventListener("click", handleLeftBtn);
btnElm2.addEventListener("click", handleRightBtn);
directionIcons.forEach((icon) => {
  icon.addEventListener("click", handleDirectionIcons);
});
copyBtnElm.addEventListener("click", () =>
  navigator.clipboard.writeText(copyTextElm.innerText)
);
