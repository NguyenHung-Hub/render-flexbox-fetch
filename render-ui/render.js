window.onload = (event) => {
    const root = document.querySelector(".root");

    const loginContainer = document.createElement("form");
    loginContainer.classList.add("login-container");

    const inputContainer = document.createElement("div");
    inputContainer.classList.add("input-container");

    const emailInput = inputContainer.cloneNode(true);
    emailInput.innerHTML = `<input class="input" type="email">
    <label for="">Email</label>`;

    const passInput = inputContainer.cloneNode(true);
    passInput.innerHTML = `<input class="input" type="password">
    <label for="">Password</label>`;

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit-btn");
    submitBtn.innerText = `Login`;

    loginContainer.appendChild(emailInput);
    loginContainer.appendChild(passInput);
    loginContainer.appendChild(submitBtn);

    root.appendChild(loginContainer);

    const inputs = document.querySelectorAll(".input");

    function animation() {
        // console.log(inputs);
        inputs.forEach((input) => {
            input.addEventListener("focus", () => {
                console.log(input.parentNode);
                clearAnimation();

                input.parentNode.querySelector("label").classList.toggle("focus");
            });
        });
    }

    function clearAnimation() {
        inputs.forEach((input) => {
            input.classList.remove("focus");
            // input.addEventListener("blur", () => {
            //     input.parentNode.querySelector("label").classList.toggle("focus");
            // });
        });
    }

    animation();
};