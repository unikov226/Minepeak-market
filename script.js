const usernameInput = document.getElementById("minepeak-username");
const confirmInput = document.getElementById("confirm-username");
const checkbox = document.getElementById("username-confirmation");
const button = document.getElementById("confirm-trade");
const message = document.getElementById("trade-message");

button.addEventListener("click", function () {
    const username = usernameInput.value.trim();
    const confirmedUsername = confirmInput.value.trim();

    if (!username || !confirmedUsername) {
        message.textContent = "Please enter your MinePeak username twice.";
        return;
    }

    if (username !== confirmedUsername) {
        message.textContent = "The usernames do not match.";
        return;
    }

    if (!checkbox.checked) {
        message.textContent = "Please confirm that this is your username.";
        return;
    }

    message.textContent = "Username confirmed successfully!";
});
