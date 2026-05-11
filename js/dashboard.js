
console.log("dashboard loaded");

getTransactions()
    .then(data => console.log(data))
    .catch(err => console.log("ERROR:", err));

import { getTransactions } from "./api.js";

window.addEventListener("load", async () => {
    try {
        const data = await getTransactions();

        renderTransactions(data);
    } catch (err) {
        console.log("Error:", err);
    }
});

function renderTransactions(transactions) {
    const container = document.querySelector(".transactions");

    container.innerHTML = "<h3>Recent Transactions</h3>";

    transactions.forEach(tx => {
        const div = document.createElement("div");
        div.classList.add("tx");

        div.innerHTML = `
            <span>${tx.categoryName}</span>
            <span class="${tx.type === 'INCOME' ? 'income' : 'expense'}">
                ${tx.type === 'INCOME' ? '+' : '-'} $${tx.amount}
            </span>
        `;

        container.appendChild(div);
    });
}