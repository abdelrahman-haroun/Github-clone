let input = document.getElementById("input");
let btn = document.getElementById("btn");
let repoItems = document.getElementsByClassName("repo-items")[0];

// this for my user
fetch(`https://api.github.com/users/abdelrahman-haroun`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementsByClassName("Name")[0].innerHTML = `${data.login}`;
    document
      .getElementsByTagName("img")[0]
      .setAttribute("src", data.avatar_url);
    document
      .getElementsByTagName("img")[1]
      .setAttribute("src", data.avatar_url);
    document.getElementsByClassName(
      "follower"
    )[0].textContent = `${data.followers} followers`;
    document.getElementsByClassName(
      "following"
    )[0].textContent = `${data.following} following`;

    fetch(`${data.repos_url}`)
      .then((response) => response.json())
      .then((data1) => {
        for (let i = 0; i < 6 && i < data.public_repos; i++) {
          let div = document.createElement("div");
          div.className = "items";
          let div1 = document.createElement("div");
          div1.className = "sub-items";
          let p = document.createElement("p");
          p.className = "names";
          p.textContent = `${data1[i].name}`;
          let p1 = document.createElement("p");
          p1.className = "public";
          p1.textContent = `${data1[i].visibility}`;
          let p2 = document.createElement("p");
          p2.className = "code";
          let icon = document.createElement("div");
          icon.className = "icon";
          if (data1[i].language != null)
            p2.innerHTML = `
              ${data1[i].language}`;
          div1.append(p, p1);
          p2.append(icon);
          div.append(div1, p2);
          repoItems.append(div);
          if (data1[i].language == "HTML") {
            icon.style.background = "#e34c26";
          } else if (data1[i].language == "CSS") {
            icon.style.background = "#563d7c";
          } else if (data1[i].language == "JavaScript") {
            icon.style.background = "yellow";
          } else if (data1[i].language == "PHP") {
            icon.style.background = "#4f5d95";
          } else {
            icon.style.display = "none";
          }
        }
        document.getElementsByTagName("img")[0].style.visibility = "";
        document.getElementsByTagName("main")[0].style.display = "flex";
        document.getElementsByTagName("hr")[0].style.display = "block";
        document.getElementsByTagName("hr")[1].style.display = "block";
      });
  });

//

input.addEventListener("change", () => {
  repoItems.innerHTML = "";
  fetch(`https://api.github.com/users/${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.login) {
        alert("not found");
      } else {
        document.getElementsByClassName("Name")[0].innerHTML = `${data.login}`;
        document
          .getElementsByTagName("img")[0]
          .setAttribute("src", data.avatar_url);
        document
          .getElementsByTagName("img")[1]
          .setAttribute("src", data.avatar_url);
        document.getElementsByClassName(
          "follower"
        )[0].textContent = `${data.followers} followers`;
        document.getElementsByClassName(
          "following"
        )[0].textContent = `${data.following} following`;

        fetch(`${data.repos_url}`)
          .then((response) => response.json())
          .then((data1) => {
            for (let i = 0; i < 6 && i < data.public_repos; i++) {
              let div = document.createElement("div");
              div.className = "items";
              let div1 = document.createElement("div");
              div1.className = "sub-items";
              let p = document.createElement("p");
              p.className = "names";
              p.textContent = `${data1[i].name}`;
              let p1 = document.createElement("p");
              p1.className = "public";
              p1.textContent = `${data1[i].visibility}`;
              let p2 = document.createElement("p");
              p2.className = "code";
              let icon = document.createElement("div");
              icon.className = "icon";
              if (data1[i].language != null)
                p2.innerHTML = `
              ${data1[i].language}`;
              div1.append(p, p1);
              p2.append(icon);
              div.append(div1, p2);
              repoItems.append(div);
              if (data1[i].language == "HTML") {
                icon.style.background = "#e34c26";
              } else if (data1[i].language == "CSS") {
                icon.style.background = "#563d7c";
              } else if (data1[i].language == "JavaScript") {
                icon.style.background = "yellow";
              } else if (data1[i].language == "PHP") {
                icon.style.background = "#4f5d95";
              } else {
                icon.style.display = "none";
              }
            }

            document.getElementsByTagName("img")[0].style.visibility = "";
            document.getElementsByTagName("main")[0].style.display = "flex";
            document.getElementsByTagName("hr")[0].style.display = "block";
            document.getElementsByTagName("hr")[1].style.display = "block";
          });

        input.value = "";
      }
    });
});
// this for search bar to append in next section and if return to shown in nav bar

function s(z) {
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
// *****
// this for menu to show and hide

// ****
let lastChild = document.querySelector(".o:last-child");
lastChild.addEventListener("click", () => {
  location.href = "./code/comparision.html";
});
// burger menu
const b = window.matchMedia("(max-width: 900px)");
function o(i) {
  if (i.matches) {
    let burgerBtn = document.getElementsByClassName("click")[0];
    let list = document.querySelectorAll(".o:not(:last-child)");
    let lastChild = document.querySelector(".o:last-child");
    let elements = document.querySelectorAll(".container:not(.click");
    let menu = document.getElementsByTagName("ul")[0];
    burgerBtn.addEventListener("click", () => {
      if (menu.style.display == "none") menu.style.display = "block";
      else {
        menu.style.display = "none";
      }
    });
    list.forEach((ele) => {
      ele.addEventListener("click", () => {
        menu.style.display = "none";
      });
    });
    lastChild.addEventListener("click", () => {
      location.href = "./code/comparision.html";
    });
    elements.forEach((ele) => {
      ele.addEventListener("click", () => {
        if ((menu.style.display = "block")) {
          menu.style.display = "none";
        }
      });
    });
  }
}

function d(m) {
  if (m.matches) {
    document.getElementsByTagName("ul")[0].style.display = "none";
  } else {
    document.getElementsByTagName("ul")[0].style.display = "flex";
  }
}

const z = window.matchMedia("(max-width: 500px)");

z.addListener(s);
s(z);
b.addListener(d);
d(b);

b.addListener(b);
o(b);
