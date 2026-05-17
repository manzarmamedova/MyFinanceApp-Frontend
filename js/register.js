const BASE_URL = "http://localhost:8080";

const form =
    document.getElementById("registerForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const username =
        document.getElementById("username").value;

    const password =
        document.getElementById("password").value;

    try {

        const response = await fetch(
            `${BASE_URL}/auth/register`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    username,
                    password,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Register failed");
        }

        alert("Kayıt başarılı");

        window.location.href = "login.html";

    } catch (error) {

        console.error(error);

        alert("Kayıt başarısız");

    }

});