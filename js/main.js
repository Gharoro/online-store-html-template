/** Toggle Menu in mobile screen */
let menuItems = document.getElementById("menu-links");
menuItems.style.maxHeight = "0px";
const menu_toggle = () => {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
};

/** Product Image Gallery */
const productImg = document.getElementById("product-img");
const smallImg = document.getElementsByClassName("small-img");
for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = () => {
    productImg.src = smallImg[i].src;
  };
}

/** Toggle forms  **/
const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");
const indicator = document.getElementById("indicator");

const register = () => {
  regForm.style.transform = "translateX(0px)";
  loginForm.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
};

const login = () => {
  regForm.style.transform = "translateX(300px)";
  loginForm.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
};

/*** Add to cart */
document.getElementById("add-to-cart").addEventListener("click", () => {
  alert("Added To Cart");
});
