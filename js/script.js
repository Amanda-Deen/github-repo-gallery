// Grey square at top with blue circle inside.
const badge = document.querySelector(".badge");
// Blue circle inside the grey square at top.
const circle = document.querySelector(".circle");
// intro section
const intro = document.querySelector(".intro");
// overview div
const overview = document.querySelector(".overview");
// repos section
const repos = document.querySelector(".repos");
// filter-repos input
const filterRepos = document.querySelector(".filter-repos");
// repo-list ul
const repoList = document.querySelector(".repo-list");
// repo-data section
const repoData = document.querySelector(".repo-data");
// button container
const button = document.querySelector(".button-container");
// view-repo button
const viewRepo = document.querySelector(".view-repo");

const userName = "Amanda-Deen"

const gitUserInfo = async function(){
    const userInfo = await fetch(`https://api.github.com/users/${userName}`);
    const data = await userInfo.json();
    displayUserInfo(data)
};

gitUserInfo();

const displayUserInfo = function(data){
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
        <figure>
        <img alt="user avatar" src=${data.avatar_url} />
        </figure>
        <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
        </div>
    `;
    overview.append(div);
};
