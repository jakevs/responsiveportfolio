const name = document.querySelector("#name-input");
const email = document.querySelector("#email-input");
const message = document.querySelector("#message");
const submit = document.querySelector("#sub-button");
const msgDiv = document.querySelector("#msg");

function errorMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

submit.addEventListener("click", (e) => {
  e.preventDefault();

  var user = {
    nameOne: name.value.trim(),
    emailOne: email.value.trim(),
    messageOne: message.value.trim(),
  };
  console.log(user);

  if (user.nameOne === "") {
    errorMessage("error", "Name cannot be blank");
  } else if (user.emailOne === "") {
    errorMessage("error", "Email cannot be blank");
  } else if (user.messageOne === "") {
    errorMessage("error", "Message cannot be blank");
  } else {
    errorMessage("success", "Submitted successfully");
  }

  // set new submission
  localStorage.setItem("user", JSON.stringify(user));
});
