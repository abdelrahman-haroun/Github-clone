async function callGitHub(user) {
  let response = await fetch(`https://api.github.com/users/${user}`);

  return response.json();
}

async function callGitHub1(user) {
  let res = await fetch(`https://api.github.com/users/${user}/repos`);

  return res.json();
}

export { callGitHub, callGitHub1 };
