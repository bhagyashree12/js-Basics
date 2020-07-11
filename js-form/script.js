const submit = document.querySelector("#btn-submit");
const username = document.querySelector("#uname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".msg");
const reset=document.querySelector("#btn-reset");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (username.value === "" || email.value === "") {
        message.classList.add(".msg");
        message.innerHTML = "Please Enter All Data!";

        setTimeout(() => message.remove(),3000);

    }
    else{
        message.classList.add(".welcome-msg");
        message.innerHTML = "Welcome "+ username.value+" !!!!";

    }

});

reset.addEventListener('click',(e)=>{
    e.preventDefault();
    username.value="";
    email.value="";
    password.value="";
})
