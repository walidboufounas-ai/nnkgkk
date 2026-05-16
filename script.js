const btn = document.getElementById("btn");

const nom = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

btn.addEventListener("click", function () {

    
    if (nom.value !== nom.value.toUpperCase()) {
        alert("Le nom doit être en MAJUSCULE !");
        return;
    }

    
    if (!email.value.includes("@gmail.com")) {
        alert("L'email doit contenir @gmail.com !");
        return;
    }

    
    let hasUppercase = /[A-Z]/.test(password.value);
    let hasLetter = /[a-zA-Z]/.test(password.value);
    let hasNumber = /[0-9]/.test(password.value);

    if (!hasUppercase || !hasLetter || !hasNumber) {
        alert("Le mot de passe doit contenir une majuscule, des lettres et des chiffres !");
        return;
    }

  
    const user = {
        name: nom.value,
        email: email.value,
        password: password.value
    };

    
    localStorage.setItem("user", JSON.stringify(user));

    console.log(user);

    alert("Bonne inscription !");
});