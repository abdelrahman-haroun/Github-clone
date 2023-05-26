let input1 = document.getElementById("first-name");
let input2 = document.getElementById("second-name");
let btn1 = document.getElementById("btn-search1");
let btn2 = document.getElementById("btn-search2");
let div0 = document.createElement("div");
div0.textContent = "Winner";
div0.style = "background-color:green; color:white; padding:10px 30px";
let div1 = document.createElement("div");
div1.textContent = "Loser";
div1.style = "background-color:red; color:white; padding:10px 30px";
div0.className = "loser";
div1.className = "loser";
let div2 = document.createElement("div");
div2.className = "loser";
div2.textContent = "Draw";
div2.style = "background-color:yellow; color:white; padding:10px 30px";
let div3 = document.createElement("div");
div3.className = "loser";
div3.textContent = "Draw";
div3.style = "background-color:yellow; color:white; padding:10px 30px";
document.getElementsByClassName("winner")[0].innerHTML = "";
let btn3 = document.createElement("button");
btn3.className = "btn--3";
btn3.textContent = "Who Winner";
document.getElementsByClassName("winner")[0].append(btn3);

// this for my user
fetch(`https://api.github.com/users/abdelrahman-haroun`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementsByClassName("Name")[0].innerHTML = `${data.login}`;

    document
      .getElementsByTagName("img")[1]
      .setAttribute("src", data.avatar_url);
    document.getElementsByClassName(
      "follower"
    )[0].textContent = `${data.followers} followers`;
    document.getElementsByClassName(
      "following"
    )[0].textContent = `${data.following} following`;
    document.getElementsByClassName(
      "repo-num"
    )[0].innerHTML = `number of repo <span class="winner1"></span>`;
    document.getElementsByClassName("winner1")[0].textContent =
      data.public_repos;
  });
//
fetch(`https://api.github.com/users/ayhamzaid`)
  .then((response) => response.json())
  .then((data) => {
    document.getElementsByClassName("Name")[1].innerHTML = `${data.login}`;

    document
      .getElementsByTagName("img")[2]
      .setAttribute("src", data.avatar_url);
    document.getElementsByClassName(
      "follower"
    )[1].textContent = `${data.followers} followers`;
    document.getElementsByClassName(
      "following"
    )[1].textContent = `${data.following} following`;
    document.getElementsByClassName(
      "repo-num"
    )[1].innerHTML = `number of repo <span class="winner1"></span>`;
    document.getElementsByClassName("winner1")[1].textContent =
      data.public_repos;
  });

// *********
btn1.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${input1.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.login) {
        alert("not found");
      } else {
        document.getElementsByClassName("Name")[0].innerHTML = `${data.login}`;
        document
          .getElementsByTagName("img")[1]
          .setAttribute("src", data.avatar_url);
        document.getElementsByClassName(
          "follower"
        )[0].textContent = `${data.followers} followers`;
        document.getElementsByClassName(
          "following"
        )[0].textContent = `${data.following} following`;
        document.getElementsByClassName(
          "repo-num"
        )[0].innerHTML = `number of repo <span class="winner1"></span>`;
        document.getElementsByClassName("winner1")[0].textContent =
          data.public_repos;
      }
    });
});

btn2.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${input2.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!data.login) {
        alert("not found");
      } else {
        document.getElementsByClassName("Name")[1].innerHTML = `${data.login}`;

        document
          .getElementsByTagName("img")[2]
          .setAttribute("src", data.avatar_url);
        document.getElementsByClassName(
          "follower"
        )[1].textContent = `${data.followers} followers`;
        document.getElementsByClassName(
          "following"
        )[1].textContent = `${data.following} following`;
        document.getElementsByClassName(
          "repo-num"
        )[1].innerHTML = `number of repo <span class="winner1"></span>`;
        document.getElementsByClassName("winner1")[1].textContent =
          data.public_repos;
      }
    });
});

btn3.addEventListener("click", () => {
  document.getElementsByClassName("aaa")[0].innerHTML = "";
  document.getElementsByClassName("aaa")[1].innerHTML = "";

  if (
    parseInt(document.getElementsByClassName("winner1")[0].textContent) >
    parseInt(document.getElementsByClassName("winner1")[1].textContent)
  ) {
    document.getElementsByClassName("aaa")[0].append(div0);
    document.getElementsByClassName("aaa")[1].append(div1);
  } else if (
    parseInt(document.getElementsByClassName("winner1")[0].textContent) ==
    parseInt(document.getElementsByClassName("winner1")[1].textContent)
  ) {
    document.getElementsByClassName("aaa")[0].append(div2);
    document.getElementsByClassName("aaa")[1].append(div3);
  } else {
    document.getElementsByClassName("aaa")[1].append(div0);
    document.getElementsByClassName("aaa")[0].append(div1);
  }
});

// *****
// this for menu to show and hide
function d(m) {
  if (m.matches) {
    document.getElementsByTagName("ul")[0].style.display = "none";
  } else {
    document.getElementsByTagName("ul")[0].style.display = "flex";
  }
}
// ****
let log = document.getElementsByClassName("log-img")[0];
log.addEventListener("click", () => {
  location.href = "../index.html";
});
// burger menu
const b = window.matchMedia("(max-width: 900px)");
function o(i) {
  if (i.matches) {
    let burgerBtn = document.getElementsByClassName("click")[0];

    let list = document.querySelectorAll(".o");

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

    elements.forEach((ele) => {
      ele.addEventListener("click", () => {
        if ((menu.style.display = "block")) {
          menu.style.display = "none";
        }
      });
    });
  }
}
b.addListener(d);
d(b);
b.addListener(o);
o(b);
