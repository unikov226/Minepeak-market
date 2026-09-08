const SUPABASE_URL = "https://uxxcmrewhohvhetfjlle.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_44ZK_yp2muDR6QqpErQKJg_etMtYTUW";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const loginTab = document.getElementById("login-tab");
const signupTab = document.getElementById("signup-tab");
const authButton = document.getElementById("auth-button");
const authMessage = document.getElementById("auth-message");

let signupMode = false;

loginTab.addEventListener("click", function () {
    signupMode = false;

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    authButton.textContent = "Login";
    authMessage.textContent = "";
});

signupTab.addEventListener("click", function () {
    signupMode = true;

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    authButton.textContent = "Create Account";
    authMessage.textContent = "";
});
});
