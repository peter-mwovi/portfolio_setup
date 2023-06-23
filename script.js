const targetDiv = document.getElementById("web-nav");
const btn = document.getElementById("toggle");
const cancel = document.getElementById("cross");
const linkMenu = document.getElementsByClassName("menu-link");
const form = document.getElementById("contact");
const email = document.getElementById("email");
const errMsgEmail = document.querySelector("small");

let emailAddress = email.value;

form.addEventListener("submit", (e) => {
  const regex = /[A-Z]/;
  if (regex.test(emailAddress)) {
    errMsgEmail.innerText = "The Email should only have lower case letters";
    e.preventDefault();
  }
});

email.addEventListener("input", (e) => {
  emailAddress = e.target.value;
  if (emailAddress === "") {
    errMsgEmail.innerText = "Email address is required";
  } else {
    errMsgEmail.innerText = "";
  }
});

console.log(emailAddress);

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    document.body.style.overflowY = "hidden";
  } else {
    targetDiv.style.display = "inline";
    document.body.style.overflowY = "hidden";
  }
};

cancel.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
    document.body.style.overflowY = "scroll";
  } else {
    targetDiv.style.display = "block";
    document.body.style.overflowY = "scroll";
  }
};

for (let link of linkMenu) {
  link.addEventListener("click", function () {
    targetDiv.style.display = "none";
    window.location.href = link.href;
    document.body.style.overflowY = "scroll";
  });
}
