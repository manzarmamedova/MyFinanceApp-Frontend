const BASE_URL = "http://localhost:8080";

export async function getTransactions() {
    const token = localStorage.getItem("token");

    const res = await fetch(BASE_URL + "/transactions/get", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    if (!res.ok) {
        throw new Error("Unauthorized or failed request");
    }

    return res.json();
}