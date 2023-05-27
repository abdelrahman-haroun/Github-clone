import { callGitHub, callGitHub1 } from "./api.js";

let input = document.getElementById("input");
let repoItems = document.getElementsByClassName("repo-items")[0];

// this for my user
callGitHub("abdelrahman-haroun").then((user) => {
  document.getElementsByClassName("Name")[0].innerHTML = `${user.login}`;
  document.getElementsByTagName("img")[0].setAttribute("src", user.avatar_url);
  document.getElementsByTagName("img")[1].setAttribute("src", user.avatar_url);
  document.getElementsByClassName(
    "follower"
  )[0].textContent = `${user.followers} followers`;
  document.getElementsByClassName(
    "following"
  )[0].textContent = `${user.following} following`;

  callGitHub1("abdelrahman-haroun").then((useR) => {
    for (let i = 0; i < 6 && i < user.public_repos; i++) {
      let div = document.createElement("div");
      div.className = "items";
      let div1 = document.createElement("div");
      div1.className = "sub-items";
      let p = document.createElement("a");
      p.setAttribute(
        "href",
        `https://github.com/${user.login}/${useR[i].name}`
      );
      p.className = "names";
      p.textContent = `${useR[i].name}`;
      let p1 = document.createElement("p");
      p1.className = "public";
      p1.textContent = `${useR[i].visibility}`;
      let p2 = document.createElement("p");
      p2.className = "code";
      let icon = document.createElement("div");
      icon.className = "icon";
      if (useR[i].language != null)
        p2.innerHTML = `
        ${useR[i].language}`;
      div1.append(p, p1);
      p2.append(icon);
      div.append(div1, p2);
      repoItems.append(div);
      if (useR[i].language == "HTML") {
        icon.style.background = "#e34c26";
      } else if (useR[i].language == "CSS") {
        icon.style.background = "#563d7c";
      } else if (useR[i].language == "JavaScript") {
        icon.style.background = "yellow";
      } else if (useR[i].language == "PHP") {
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
input.style.cursor = "pointer";
input.addEventListener("change", () => {
  callGitHub(`${input.value}`).then((user) => {
    if (!user.login) {
      alert("user not found");
    } else {
      repoItems.innerHTML = "";
      document.getElementsByClassName("Name")[0].innerHTML = `${user.login}`;
      document
        .getElementsByTagName("img")[0]
        .setAttribute("src", user.avatar_url);
      document
        .getElementsByTagName("img")[1]
        .setAttribute("src", user.avatar_url);
      document.getElementsByClassName(
        "follower"
      )[0].textContent = `${user.followers} followers`;
      document.getElementsByClassName(
        "following"
      )[0].textContent = `${user.following} following`;

      callGitHub1(`${input.value}`).then((useR) => {
        for (let i = 0; i < 6 && i < user.public_repos; i++) {
          let div = document.createElement("div");
          div.className = "items";
          let div1 = document.createElement("div");
          div1.className = "sub-items";
          let p = document.createElement("a");
          p.setAttribute(
            "href",
            `https://github.com/${user.login}/${useR[i].name}`
          );
          p.className = "names";
          p.textContent = `${useR[i].name}`;
          let p1 = document.createElement("p");
          p1.className = "public";
          p1.textContent = `${useR[i].visibility}`;
          let p2 = document.createElement("p");
          p2.className = "code";
          let icon = document.createElement("div");
          icon.className = "icon";
          if (useR[i].language != null)
            p2.innerHTML = `
          ${useR[i].language}`;
          div1.append(p, p1);
          p2.append(icon);
          div.append(div1, p2);
          repoItems.append(div);
          if (useR[i].language == "HTML") {
            icon.style.background = "#e34c26";
          } else if (useR[i].language == "CSS") {
            icon.style.background = "#563d7c";
          } else if (useR[i].language == "JavaScript") {
            icon.style.background = "yellow";
          } else if (useR[i].language == "PHP") {
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
    input.value = "";
  });
});
