let btn = document.querySelector(".btn");
let input = document.getElementById("inp");
let err = document.querySelector(".error");
let err_msg = document.querySelector("#err-msg")

btn.addEventListener("click", () => {
    console.log("button was clicked");
    if (input.value.includes("@") && input.value != "") {
        console.log("valid email address");
    } else {
        func();
        };
    }
);

function error () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            err.classList.remove("hide");
            err_msg.classList.remove("hide");
            resolve("invalid email")
        }, 500);
    })
}

function reset () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            err.classList.add("hide");
            err_msg.classList.add("hide");
            console.log("Enter correct email address")
        }, 2000);
    })
}


async function func () {
    console.log("Invalid email try again")
    await error();
    console.log("reseting...")
    await reset();
}
