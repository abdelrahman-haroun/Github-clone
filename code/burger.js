// burger menu
const largeScreen = window.matchMedia("(max-width: 900px)");
let counter = 0;
function burgerMenu(i) {
  if (i.matches) {
    document.getElementsByTagName("ul")[0].style.display = "none";
    let burgerBtn = document.getElementsByClassName("click")[0];
    let list = document.querySelectorAll(".o:not(:last-child)");
    let lastChild = document.querySelector(".o:last-child");
    let elements = document.querySelectorAll(".container:not(.click");

    let menu = document.getElementsByTagName("ul")[0];
    if (counter == 0) {
      burgerBtn.addEventListener("click", () => {
        if (menu.style.display == "none") {
          menu.style.display = "block";
        } else {
          menu.style.display = "none";
        }
      });
      list.forEach((ele) => {
        ele.addEventListener("click", () => {
          menu.style.display = "none";
        });
      });
      lastChild.addEventListener("click", () => {
        if (location.pathname === "/Github-clone/code/comparision.html") {
          location.href = "comparision.html";
        } else {
          location.href = "./code/comparision.html";
        }
      });
      elements.forEach((ele) => {
        ele.addEventListener("click", () => {
          if (menu.style.display == "block") {
            menu.style.display = "none";
          }
        });
      });
    }
    // the counter uses because if not use the event add to btn every call
    counter = 1;
  } else {
    document.getElementsByTagName("ul")[0].style.display = "flex";
  }
}

// this is for in click in logo return to main page
let log = document.getElementsByClassName("log-img")[0];
log.style.cursor = "pointer";
log.addEventListener("click", () => {
      if (location.pathname === "/Github-clone/code/comparision.html") {
          location.href = "../index.html";
        } else {
          location.href = "index.html";
        }
 
});
//  this is for in click in comparision go to comparision page
let lastChild = document.querySelector(".o:last-child");
lastChild.style.cursor = "pointer";
lastChild.addEventListener("click", () => {
  if (location.pathname === "/Github-clone/code/comparision.html") {
    location.href = "comparision.html";
  } else {
    location.href = "./code/comparision.html";
  }
});
// this for search bar to append in next section and if return to shown in nav bar
const mediumScreen = window.matchMedia("(max-width: 500px)");
function appendSerach(z) {
  let search = document.getElementsByClassName("search-bar")[0];
  let logo = document.getElementsByClassName("log-img")[0];

  if (z.matches) {
    subHeader = document.getElementsByClassName("search-sec")[0];
    subHeader.append(search);
  } else {
    let menu = document.getElementsByTagName("ul")[0];
    document.getElementsByClassName("menu-bar")[0].append(logo, search, menu);
  }
}
// here i will call function every window will re size
appendSerach(mediumScreen);
mediumScreen.addListener(appendSerach);
//
burgerMenu(largeScreen);

largeScreen.addListener(burgerMenu);
