const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      alert("Please fill in all the fields!");
    }
  else
  {
    const newUser = {
      userEmail: email.value,
      userPassword: password.value
    };
    console.log(newUser);
    event.currentTarget.reset();
  }
};