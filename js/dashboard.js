import { getTransactions } from "./api.js";
import { getToken, logout } from "./auth.js";

document.addEventListener("DOMContentLoaded", initDashboard);

function initDashboard() {

    // 🧠 token kontrolü (temiz ve güvenli)
    const token = getToken();

    console.log("DASHBOARD TOKEN:", token);

    // ❗ daha sert kontrol (flicker fix)
    if (!token || token === "undefined" || token === "null" || token.trim() === "") {
        localStorage.removeItem("token");
        window.location.replace("login.html"); // replace = geri gelmesin diye
        return;
    }

    // 🚀 sadece valid token varsa devam
    loadTransactions(token);
}

async function loadTransactions(token) {
    try {
        const data = await getTransactions(token);
        render(data);
    } catch (err) {
        console.error(err);

        // ❗ backend patlarsa bile login'e atma (loop engeli)
        alert("Backend request failed");
    }
}

function render(data) {
    const container = document.getElementById("transactions");
    container.innerHTML = "";

    data.forEach(tx => {
        const div = document.createElement("div");

        div.innerHTML = `
            <span>${tx.description}</span>
            <span>${tx.amount} ₼</span>
        `;

        container.appendChild(div);
    });
}

// logout
window.logout = logout;