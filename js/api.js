const BASE_URL = "http://localhost:8080";

export async function loginRequest(username, password) {
    return fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    }).then(res => res.json());
}

export async function getTransactions(token) {
    const res = await fetch(`${BASE_URL}/transactions/get`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) throw new Error("Transaction fetch failed");

    return res.json();
}