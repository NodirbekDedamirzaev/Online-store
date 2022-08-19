function validate(params) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "user") {
    alert("log in succsesfully compated");
    return false;
  } else {
    alert("log in FAILED!!!");
  }
}
