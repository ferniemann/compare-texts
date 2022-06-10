const wrapper = document.querySelector("#input-wrapper");

wrapper.addEventListener("input", checkPasswords);

function comparePasswords() {
    const password1 = wrapper.querySelector("#pw1");
    const password2 = wrapper.querySelector("#pw2");

    if (password1.value === password2.value && password1.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function checkPasswords() {
    const output = document.querySelector("#output");

    if (comparePasswords()) {
        output.innerText = "✅";
    } else {
        output.innerText = "❌";
    }
}
