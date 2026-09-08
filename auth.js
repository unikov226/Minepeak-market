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

loginTab.addEventListener("click", () => {
    signupMode = false;
    button.textContent = "Login";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    message.textContent = "";
});

signupTab.addEventListener("click", () => {
    signupMode = true;
    button.textContent = "Create Account";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    message.textContent = "";
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.textContent = "Please wait...";

    if (signupMode) {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.textContent =
            "Account created! Check your email to verify your account.";

    } else {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.textContent = "Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }
});
