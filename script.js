const scripts = [
  // ================= ADM =================
  {
    title: "Adopt Me (Autofarm Gingerbread)",
    tab: "ADM",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/autofarm.lua"))()`
  },
  {
    title: "Adopt Me (House Cloner)",
    tab: "ADM",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/housecloner.lua"))()`
  },
  {
    title: "Adopt Me (Pet Spawner V1)",
    tab: "ADM",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/AdoptMe/refs/heads/main/spawnerv1.lua"))()`
  },
  // ================= MM2 =================
  {
    title: "Murder Mystery 2 (Autofarm)",
    tab: "MM2",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/main.lua"))()`
  },
  {
    title: "Murder Mystery 2 (Item Spawner)",
    tab: "MM2",
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/spawner.lua"))()`
  },
  {
    title: "Murder Mystery 2 (Project Reverse)",
    tab: "MM2",
      code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/KuniX99/MurderMystery2/refs/heads/main/reverse.lua"))()`
  },
 

  // ================= OTHERS =================
  {
    title: "Ronix Hub",
    tab: "OTHERS",
    code: `loadstring(game:HttpGet("https://api.luarmor.net/files/v3/loaders/b44706178039e9b88c4d768d4d8b012f.lua"))()`
  },
  {
    title: "Thunder Z Hub",
    tab: "OTHERS",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ThundarZ/Welcome/refs/heads/main/Main/GaG/Main.lua"))()`
  },
  {
    title: "Limit Hub",
    tab: "OTHERS",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/FakeModz/LimitHub/refs/heads/main/LimitHub_Luarmor_E.lua"))()`
  },
  {
    title: "Speed Hub",
    tab: "OTHERS",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua"))()`
  },
  {
    title: "Quantum Hub",
    tab: "OTHERS",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/flazhy/QuantumOnyx/refs/heads/main/QuantumOnyx.lua"))()`
  }
];

let currentTab = "ALL";
const list = document.getElementById("script-list");

/* TOAST */
/* ===============================
   TOAST (SINGLE INSTANCE)
================================ */
let toast = document.querySelector(".toast");

if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Script Copied!";
    document.body.appendChild(toast);
}

let toastTimer = null;

function showToast(text = "Script Copied!") {
    toast.textContent = text;

    toast.classList.remove("show");
    void toast.offsetWidth; // force reflow (smooth restart)

    toast.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 1400);
}

/* ===============================
   RENDER
================================ */
function render() {
    list.innerHTML = "";

    const query = document.getElementById("search")?.value.toLowerCase() || "";

    scripts.forEach((s, i) => {
        if (currentTab !== "ALL" && s.tab !== currentTab) return;
        if (!s.title.toLowerCase().includes(query)) return;

        const card = document.createElement("div");
        card.className = "script-card";
        card.style.animationDelay = `${i * 0.05}s`; // stagger reveal

        card.innerHTML = `
      <div class="script-left">
        <span class="script-title">${s.title}</span>
        <span class="status">● WORKING</span>
        <div class="script-preview">${s.code}</div>
      </div>
      <button class="copy-btn" data-index="${i}">Copy</button>
    `;

        list.appendChild(card);
    });

    bindCopyButtons();
}

/* ===============================
   COPY HANDLER (CLEAN)
================================ */
function bindCopyButtons() {
    document.querySelectorAll(".copy-btn").forEach(btn => {
        btn.onclick = () => {
            const i = btn.dataset.index;
            copyScript(i, btn);
        };
    });
}

function copyScript(i, btn) {
    navigator.clipboard.writeText(scripts[i].code).then(() => {
        btn.textContent = "Copied";
        btn.classList.add("copied");

        showToast();

        setTimeout(() => {
            btn.textContent = "Copy";
            btn.classList.remove("copied");
        }, 1100);
    });
}

/* ===============================
   TAB SWITCH
================================ */
function setTab(tab, el) {
    currentTab = tab;

    document.querySelectorAll(".tab, .tag").forEach(t =>
        t.classList.remove("active")
    );

    el.classList.add("active");

    render();
}

/* ===============================
   SEARCH (LIVE)
================================ */
function searchScripts() {
    render();
}

/* INIT */
render();

render();

