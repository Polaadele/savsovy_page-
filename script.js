const noBtn = document.getElementById("noBtn");

const messages = [
    "انسي 😒",
    "لا 😏",
    "اووف بقى 😂",
    "مفيش منه ده 😎",
    "جربي تاني 🤭",
    "مستحيل 😌",
    "لا لا لا 😅",
    "اسااي يعني😅",
    "ملكيش حل انتي 😍",
    "خد تعالى هنا 😂",
    "هيهيه😂",


];

const emojis = [
    "❤️",
    "🥰",
    "😂",
    "💖",
    "😍",
    "💕"
];
const card = document.getElementById("card")
let resetTimer;

noBtn.addEventListener("mouseover", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
    clearTimeout(resetTimer);

resetTimer = setTimeout(() => {
    noBtn.style.position = "relative";
    noBtn.style.left = "0";
    noBtn.style.top = "0";
}, 3000);

    createFloatingMessage(
        messages[Math.floor(Math.random()*messages.length)],
        x,
        y
    );

    createFloatingMessage(
        emojis[Math.floor(Math.random()*emojis.length)],
        x + 50,
        y - 20
    );

});

function createFloatingMessage(text,x,y){

    const el = document.createElement("div");

    el.className = "floating";
    el.innerText = text;

    el.style.left = x + "px";
    el.style.top = y + "px";

    document.body.appendChild(el);

    setTimeout(()=>{
        el.remove();
    },1500);
}
// للكمبيوتر
noBtn.addEventListener("mouseenter", moveButton);

// للموبايل
noBtn.addEventListener("touchstart", moveButton);
function goNext(){
    window.location.href = "success.html";
}
