const scripts = [
    { title: "Adopt Me (Autofarm Gingerbread)", tab: "ADM", image: "images/adoptme-autofarm.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/autofarm.lua"))()` },
    { title: "Adopt Me (House Cloner)", tab: "ADM", image: "images/adoptme-housecloner.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/housecloner.lua"))()` },
    { title: "Adopt Me (Pet Spawner V1)", tab: "ADM", image: "images/adoptme-spawner.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/spawnerv1.lua"))()` },
    { title: "Murder Mystery 2 (Autofarm)", tab: "MM2", image: "images/mm2-autofarm.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/main.lua"))()` },
    { title: "Murder Mystery 2 (Item Spawner)", tab: "MM2", image: "images/mm2-spawner.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/spawner.lua"))()` },
    { title: "Murder Mystery 2 (Project Reverse)", tab: "MM2", image: "images/mm2-reverse.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/reverse.lua"))()` },
    { title: "Ronix Hub", tab: "OTHERS", image: "images/others.jpg", code: `loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/b44706178039e9b88c4d768d4d8b012f.lua"))()` },
    { title: "Thunder Z Hub", tab: "OTHERS", image: "images/others.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ThundarZ/Welcome/refs/heads/main/Main/GaG/Main.lua"))()` },
    { title: "Limit Hub", tab: "OTHERS", image: "images/others.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/FakeModz/LimitHub/refs/heads/main/LimitHub_Luarmor_E.lua"))()` },
    { title: "Speed Hub", tab: "OTHERS", image: "images/others.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua"))()` },
    { title: "Quantum Hub", tab: "OTHERS", image: "images/others.jpg", code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/flazhy/QuantumOnyx/refs/heads/main/QuantumOnyx.lua"))()` }
];

let currentTab = "ALL";
const list = document.getElementById("script-list");

let toast = document.createElement("div");
toast.className = "toast";
toast.textContent = "Script Copied!";
document.body.appendChild(toast);

let timer = null;

function render() {
    list.innerHTML = "";
    const q = document.getElementById("search").value.toLowerCase();

    scripts.forEach((s, i) => {
        if (currentTab !== "ALL" && s.tab !== currentTab) return;
        if (!s.title.toLowerCase().includes(q)) return;

        const card = document.createElement("div");
        card.className = "script-card";

        card.innerHTML = `
<div class="script-left">
<span class="script-title">${s.title}</span>
<span class="status">● WORKING</span>
<div class="script-preview">${s.code}</div>
<div class="script-image"><img src="${s.image}"></div>
</div>
<button class="copy-btn" data-i="${i}">Copy</button>
`;
        list.appendChild(card);
    });

    document.querySelectorAll(".copy-btn").forEach(b => {
        b.onclick = () => {
            navigator.clipboard.writeText(scripts[b.dataset.i].code).then(() => {
                b.textContent = "Copied";
                b.classList.add("copied");
                toast.classList.add("show");
                clearTimeout(timer);
                timer = setTimeout(() => {
                    b.textContent = "Copy";
                    b.classList.remove("copied");
                    toast.classList.remove("show");
                }, 1000);
            });
        };
    });
}

function setTab(t, e) {
    currentTab = t;
    document.querySelectorAll(".tag").forEach(x => x.classList.remove("active"));
    e.classList.add("active");
    render();
}

function searchScripts() { render() }
render();
