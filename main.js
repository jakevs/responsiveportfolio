const name = document.querySelector("#name-input");
const email = document.querySelector("#email-input");
const message = document.querySelector("#message");
const submit = document.querySelector("#sub-button");
const msgDiv = document.querySelector("#msg");

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submit.addEventListener("click", function (e) {
  e.preventDefault();

  var user = {
    nameOne: name.value.trim(),
    emailOne: email.value.trim(),
    messageOne: message.value.trim(),
  };
  console.log(user);

  if (user.nameOne === "") {
    displayMessage("error", "Name cannot be blank");
  } else if (user.emailOne === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (user.messageOne === "") {
    displayMessage("error", "Message cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
  }

  // set new submission
  localStorage.setItem("user", JSON.stringify(user));
});
