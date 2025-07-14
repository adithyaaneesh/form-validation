document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;

    if (!name || !email || !password1 || !password2) {
      alert("Please fill all the blanks");
      return;
    }
    if (password1 !== password2) {
      alert("password do not match");
      return;
    }
    alert("Registration Successfull");
    form.reset();
  });
});
