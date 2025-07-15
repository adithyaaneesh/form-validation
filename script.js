document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password || !confirmPassword) {
      document.getElementsByTagName('form') = "Please fill all the blanks"
      return;
    }
    if (name.length>10){
      document.getElementById('user').innerHTML = "invalid name"
      return;
    }
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$f/;
    if (regex.test(email)) {
      document.getElementById('mail').innerHTML = "invalid mail address"
      return;
    }
    if (password !== confirmPassword) {
      document.getElementById('demo').innerHTML = "Password do not match"
      return;
    }

    alert("Registration Successfull");
    form.reset();
  });
});
