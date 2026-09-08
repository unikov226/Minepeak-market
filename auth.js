const SUPABASE_URL = "https://uxxcmrewhohvhetfjlle.supabase.co/rest/v1/";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_44ZK_yp2muDR6QqpErQKJg_etMtYTUW";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

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

// LOGIN TAB

loginTab.addEventListener("click", function () {

```
signupMode = false;

loginTab.classList.add("active");
signupTab.classList.remove("active");

button.textContent = "Login";

message.textContent = "";
```

});

// SIGN UP TAB

signupTab.addEventListener("click", function () {

```
signupMode = true;

signupTab.classList.add("active");
loginTab.classList.remove("active");

button.textContent = "Create Account";

message.textContent = "";
```

});

// LOGIN / SIGN UP

form.addEventListener("submit", async function (event) {

```
event.preventDefault();

const email = document
    .getElementById("email")
    .value
    .trim();

const password = document
    .getElementById("password")
    .value;

message.textContent = "Please wait...";

button.disabled = true;


// SIGN UP

if (signupMode) {

    const { data, error } = await supabase.auth.signUp({
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


// LOGIN

const { data, error } =
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
```

});
