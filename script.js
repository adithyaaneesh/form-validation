document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!name || !email || !password ) {
      document.getElementById("errorText").innerHTML = "Please fill all the blanks*"
      document.getElementById("errorText").style.color = "red";
      return;
    }

    if (name.length>10){
      document.getElementById('user').innerHTML = "invalid name"
      return;
    }

    // let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$f/;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (regex.test(email)) {
      document.getElementById('mail').innerHTML = "invalid mail address"
      return;
    }

    if (password !== confirmPassword) {
      document.getElementById('demo').innerHTML = "Password do not match"
      return;
    }
    if (password.length<6){
      document.getElementById('demo').innerHTML = "Password must be more than 6 character"
      return;
    }

    alert("Registration Successfull");
    form.reset();
  });
});
