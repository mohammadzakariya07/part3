function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "operator01" && pass === "aadhaar123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText =
            "Authentication Failed. Please check credentials.";
    }
}
