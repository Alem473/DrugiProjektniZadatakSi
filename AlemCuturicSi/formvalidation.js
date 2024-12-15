document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", (e) => {
        let hasError = false;

        clearErrors();

        if (nameInput.value.trim() === "") {
            showError(nameInput, "Molimo unesite vaše ime.");
            hasError = true;
        }

        if (emailInput.value.trim() === "") {
            showError(emailInput, "Molimo unesite vaš email.");
            hasError = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Molimo unesite važeću email adresu.");
            hasError = true;
        }

        if (messageInput.value.trim() === "") {
            showError(messageInput, "Molimo napišite vašu poruku.");
            hasError = true;
        }

       
        if (hasError) {
            e.preventDefault();
        }
    });

    function showError(input, message) {
        const errorElement = document.createElement("div");
        errorElement.className = "text-danger mt-1";
        errorElement.textContent = message;
        input.classList.add("is-invalid");
        input.parentElement.appendChild(errorElement);
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll(".text-danger");
        errorMessages.forEach((error) => error.remove());
        const inputs = document.querySelectorAll(".is-invalid");
        inputs.forEach((input) => input.classList.remove("is-invalid"));
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
