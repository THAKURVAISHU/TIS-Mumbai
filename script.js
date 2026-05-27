const menu = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})

document.querySelectorAll(".about-stat h3").forEach(counter => {

    let num = +counter.innerText.replace(/\D/g, "");
    let count = 0;
    let step = num / 100;

    let update = setInterval(() => {
        count += step;
        if (count >= num) {
            counter.innerText = num + "+";
            clearInterval(update);
        } else {
            counter.innerText = Math.floor(count) + "+";
        }
    }, 20);

});

window.onload = function () {
    setTimeout(() => {
        document.getElementById("chatbot").style.display = "block";
    }, 1500);
};

function reply(option) {

    const body = document.getElementById("chatbotBody");

    const userMsg = document.createElement("p");
    userMsg.classList.add("bot-message");
    userMsg.style.background = "#fcc513";
    userMsg.style.color = "#112547";
    userMsg.textContent = `You selected: ${option}`;

    body.appendChild(userMsg);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {

        const botReply = document.createElement("p");
        botReply.classList.add("bot-message");
        botReply.style.background = "#1b3a6b";

        botReply.textContent =
            option === "Admissions"
                ? "🎓 Admissions for 2026–27 are now open! Click Apply Now to begin."
                : "🏫 Our campus offers smart classrooms, robotics labs, sports & modern learning facilities.";

        body.appendChild(botReply);
        body.scrollTop = body.scrollHeight;

    }, 900);
}

function closeChat() {
    document.getElementById("chatbot").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {

    const admissionBtn = document.getElementById("admissionbtn");

    if (admissionBtn) {
        admissionBtn.addEventListener("click", function () {
            reply("Admissions");
        });
    }

    const campusBtn = document.getElementById("campusBtn");

    if (campusBtn) {
        campusBtn.addEventListener("click", function () {
            reply("Campus Life");
        });
    }

});