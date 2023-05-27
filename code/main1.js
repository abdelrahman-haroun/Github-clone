import { callGitHub } from "./api.js";

// here i am retrieve all element need to render in js (DOM)
let input1 = document.getElementById("first-name");
let input2 = document.getElementById("second-name");
let btn1 = document.getElementById("btn-search1");
let btn2 = document.getElementById("btn-search2");
// here create some element i want to use him
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
callGitHub("abdelrahman-haroun").then((user) => {
  document.getElementsByClassName("Name")[0].innerHTML = `${user.login}`;

  document.getElementsByTagName("img")[1].setAttribute("src", user.avatar_url);
  document.getElementsByClassName(
    "follower"
  )[0].textContent = `${user.followers} `;
  document.getElementsByClassName(
    "following"
  )[0].textContent = `${user.following} following`;
  document.getElementsByClassName(
    "repo-num"
  )[0].innerHTML = `number of repo <span class="winner1"></span>`;
  document.getElementsByClassName("winner1")[0].textContent = user.public_repos;
});

//
callGitHub("ayhamzaid").then((user) => {
  document.getElementsByClassName("Name")[1].innerHTML = `${user.login}`;

  document.getElementsByTagName("img")[2].setAttribute("src", user.avatar_url);
  document.getElementsByClassName(
    "follower"
  )[1].textContent = `${user.followers} `;
  document.getElementsByClassName(
    "following"
  )[1].textContent = `${user.following} following`;
  document.getElementsByClassName(
    "repo-num"
  )[1].innerHTML = `number of repo <span class="winner1"></span>`;
  document.getElementsByClassName("winner1")[1].textContent = user.public_repos;
});

// *********
// this for first search user
btn1.style.cursor = "pointer";
btn1.addEventListener("click", () => {
  callGitHub(`${input1.value}`).then((user) => {
    if (!user.login) {
      alert("user not found");
    } else {
      document.getElementsByClassName("Name")[0].innerHTML = `${user.login}`;

      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", user.avatar_url);
      document.getElementsByClassName(
        "follower"
      )[0].textContent = `${user.followers} `;
      document.getElementsByClassName(
        "following"
      )[0].textContent = `${user.following} following`;
      document.getElementsByClassName(
        "repo-num"
      )[0].innerHTML = `number of repo <span class="winner1"></span>`;
      document.getElementsByClassName("winner1")[0].textContent =
        user.public_repos;
    }
  });
  input1.value = "";
  document.getElementsByClassName("aaa")[0].innerHTML = "";
  document.getElementsByClassName("aaa")[1].innerHTML = "";
});

// this for second search user
btn2.style.cursor = "pointer";
btn2.addEventListener("click", () => {
  callGitHub(`${input2.value}`).then((user) => {
    if (!user.login) {
      alert("user not found");
    } else {
      document.getElementsByClassName("Name")[1].innerHTML = `${user.login}`;

      document
        .getElementsByTagName("img")[2]
        .setAttribute("src", user.avatar_url);
      document.getElementsByClassName(
        "follower"
      )[1].textContent = `${user.followers} `;
      document.getElementsByClassName(
        "following"
      )[1].textContent = `${user.following} following`;
      document.getElementsByClassName(
        "repo-num"
      )[1].innerHTML = `number of repo <span class="winner1"></span>`;
      document.getElementsByClassName("winner1")[1].textContent =
        user.public_repos;
    }
  });
  input2.value = "";
  document.getElementsByClassName("aaa")[0].innerHTML = "";
  document.getElementsByClassName("aaa")[1].innerHTML = "";
});
// this for who have the number highest repo
btn3.style.cursor = "pointer";
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
    parseInt(document.getElementsByClassName("winner1")[0].textContent) <
    parseInt(document.getElementsByClassName("winner1")[1].textContent)
  ) {
    document.getElementsByClassName("aaa")[1].append(div0);
    document.getElementsByClassName("aaa")[0].append(div1);
  } else if (
    parseInt(document.getElementsByClassName("follower")[0].textContent) >
    parseInt(document.getElementsByClassName("follower")[1].textContent)
  ) {
    document.getElementsByClassName("aaa")[0].append(div0);
    document.getElementsByClassName("aaa")[1].append(div1);
  } else if (
    parseInt(document.getElementsByClassName("follower")[0].textContent) <
    parseInt(document.getElementsByClassName("follower")[1].textContent)
  ) {
    document.getElementsByClassName("aaa")[1].append(div0);
    document.getElementsByClassName("aaa")[0].append(div1);
  } else {
    document.getElementsByClassName("aaa")[0].append(div2);
    document.getElementsByClassName("aaa")[1].append(div3);
  }
});
