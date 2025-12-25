const scripts = [
  {
    title: "Adopt Me (Autofarm Gingerbread)",
    tab: "ADM",
    image: "images/adoptme-autofarm.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/autofarm.lua"))()`
  },
  {
    title: "Adopt Me (House Cloner)",
    tab: "ADM",
    image: "images/adoptme-housecloner.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/housecloner.lua"))()`
  },
  {
    title: "Murder Mystery 2 (Autofarm)",
    tab: "MM2",
    image: "images/mm2-autofarm.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/main.lua"))()`
  }
];

let currentTab = "ALL";
const list = document.getElementById("script-list");

function render(){
  list.innerHTML="";
  const q = document.getElementById("search").value.toLowerCase();
  let delay = 0;

  scripts.forEach((s,i)=>{
    if(currentTab!=="ALL" && s.tab!==currentTab) return;
    if(!s.title.toLowerCase().includes(q)) return;

    const card=document.createElement("div");
    card.className="script-card";
    card.innerHTML=`
      <div class="script-title">${s.title}</div>
      <div class="status">● WORKING</div>
      <div class="script-preview">${s.code}</div>
      <div class="script-image"><img src="${s.image}"></div>
      <button class="copy-btn">Copy Script</button>
    `;

    list.appendChild(card);
    setTimeout(()=>card.classList.add("show"),delay+=80);

    card.querySelector(".copy-btn").onclick=()=>{
      navigator.clipboard.writeText(s.code);
      card.querySelector(".copy-btn").textContent="Copied";
      card.querySelector(".copy-btn").classList.add("copied");
      setTimeout(()=>{
        card.querySelector(".copy-btn").textContent="Copy Script";
        card.querySelector(".copy-btn").classList.remove("copied");
      },1000);
    };
  });
}

function setTab(t,e){
  currentTab=t;
  document.querySelectorAll(".tag").forEach(x=>x.classList.remove("active"));
  e.classList.add("active");
  render();
}

function searchScripts(){render()}
render();
