const btn = document.getElementById("btn");

const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn.addEventListener("click", function () {

    // Condition NOM en majuscule
    if (nom.value !== nom.value.toUpperCase()) {
        alert("Le nom doit être en MAJUSCULE !");
        return;
    }

    // Condition EMAIL
    if (!email.value.includes("@gmail.com")) {
        alert("L'email doit contenir @gmail.com !");
        return;
    }

    // Conditions PASSWORD
    let hasUppercase = /[A-Z]/.test(password.value);
    let hasLetter = /[a-zA-Z]/.test(password.value);
    let hasNumber = /[0-9]/.test(password.value);

    if (!hasUppercase || !hasLetter || !hasNumber) {
        alert("Le mot de passe doit contenir : une majuscule, des lettres et des chiffres !");
        return;
    }

    alert("Bonne inscription !");
});