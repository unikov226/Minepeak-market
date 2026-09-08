const SUPABASE_URL = "https://uxxcmrewhohvhetfjlle.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_44ZK_yp2muDR6QqpErQKJg_etMtYTUW";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const form = document.getElementById("auth-form");
const button = document.getElementById("auth-button");
const message = document.getElementById("auth-message");

const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");

let signupMode = false;

// ================================
// LOGIN TAB
// ================================

loginTab.addEventListener("click", function (event) {

event.preventDefault();

signupMode = false;

loginTab.classList.add("active");
signupTab.classList.remove("active");

button.textContent = "Login";

message.textContent = "";

});

// ================================
// SIGN UP TAB
// ================================

signupTab.addEventListener("click", function (event) {

event.preventDefault();

signupMode = true;

signupTab.classList.add("active");
loginTab.classList.remove("active");

button.textContent = "Create Account";

message.textContent = "";

});

// ================================
// FORM SUBMISSION
// ================================

form.addEventListener("submit", async function (event) {

event.preventDefault();

const email = document
    .getElementById("email")
    .value
    .trim();

const password = document
    .getElementById("password")
    .value;

if (!email || !password) {
    message.textContent = "Please enter your email and password.";
    return;
}

button.disabled = true;
message.textContent = "Please wait...";


// ================================
// SIGN UP
// ================================

if (signupMode) {

    const { error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    button.disabled = false;

    if (error) {

        message.textContent = error.message;

        return;
    }

    message.textContent =
        "Account created! Check your email to verify your account.";

    return;
}


// ================================
// LOGIN
// ================================

const { error } =
    await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

button.disabled = false;

if (error) {

    message.textContent = error.message;

    return;
}

message.textContent =
    "Login successful!";

setTimeout(function () {

    window.location.href = "index.html";

}, 1000);

});
