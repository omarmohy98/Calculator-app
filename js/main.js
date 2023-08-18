// Change theme
let themeMode = document.querySelector(".theme-selector input");
themeMode.addEventListener("change", (eve) => {
  document.head.lastElementChild.setAttribute(
    "href",
    `css/theme_${+themeMode.value + 1}.css`
  );
});

// calc & display
let displayElement = document.querySelector(".diplay");
let buttons = document.querySelectorAll(".inputs button");
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (!ele.hasAttribute("data-function")) {
      displayElement.innerHTML += ele.innerHTML;
    } else {
      if (ele.getAttribute("data-function") === "delete") {
        displayElement.innerHTML = displayElement.innerHTML.slice(
          0,
          displayElement.innerHTML.length - 1
        );
      } else if (ele.getAttribute("data-function") === "reset") {
        displayElement.innerHTML = "";
      } else if (ele.getAttribute("data-function") === "equal") {
        let str = displayElement.innerHTML;
        let result = str.replace("x", "*");
        displayElement.innerHTML = eval(result);
      }
    }
  });
});
