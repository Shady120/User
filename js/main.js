//variable Signup
var uName = document.getElementById("uName");
var uEmail = document.getElementById("uEmail");
var uPassword = document.getElementById("uPassword");
var btnSignUp = document.querySelector("#btnSignUp");
var arr = [];
//variable for p of sign up
var required = document.getElementById("required");
var emailExists = document.getElementById("emailExists");
var Success = document.getElementById("Success");

if(localStorage.getItem("ourData")){
  arr = JSON.parse(localStorage.getItem("ourData"));
}

//Sign up page
function addData() {
  if(isValid(regexname ,uName) && isValid(regexpassword , uPassword) && isValid(regexemail , uEmail)){
    var data = {
      uName: uName.value,
      uEmail: uEmail.value,
      uPassword: uPassword.value,
    };
    arr.push(data);
    localStorage.setItem("ourData", JSON.stringify(arr));
  }
}

// regex
var regexname = /^.{3,}$/;
var regexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexpassword = /^[A-Z][a-zA-Z0-9@]{4,}$/;


function isValid(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    return true;
  } else if(element.value == ""){
    element.classList.remove("is-invalid")
  }
  else{
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    return false;
  }
}
//--------------------------------------------------------------------------------------------------
function checkData() {
  if (uName.value === "" || uEmail.value === "" || uPassword.value === "") {
    required.classList.replace("d-none", "d-block");
    emailExists.classList.replace("d-block", "d-none");
    Success.classList.replace("d-block", "d-none");
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].uEmail === uEmail.value) {
        emailExists.classList.replace("d-none", "d-block");
        required.classList.replace("d-block", "d-none");
        Success.classList.replace("d-block", "d-none");
        return;
      }
    }
    addData();
    Success.classList.replace("d-none", "d-block");
    required.classList.replace("d-block", "d-none");
    emailExists.classList.replace("d-block", "d-none");
    window.location.href = "home.html";
  }
}

if (btnSignUp) {
  btnSignUp.addEventListener("click", checkData);
} else {
  console.log("btnSignUp is null");
}




 //----------------------------------------------------------------------------------------

//Login page
//variable login
var logEmail = document.getElementById("logEmail");
var logPassword = document.getElementById("logPassword");
var btnLogin = document.querySelector("#btnLogin");
//variable for p of login
var logRequired = document.getElementById("logRequired");
var logSuccess = document.getElementById("logSuccess");
var logIncorrect = document.getElementById("logIncorrect");

function logIn() {
  var LoginDataInput = {
    logEmail: logEmail.value,
    logPassword: logPassword.value,
  };
}

function checkLogin() {
  var storedData = JSON.parse(localStorage.getItem("ourData"));
  for (j = 0; j < storedData.length; j++) {
    if (
      logEmail.value.toLowerCase() === storedData[j].uEmail.toLowerCase() &&
      logPassword.value === storedData[j].uPassword
    ) {
      logSuccess.classList.replace("d-none", "d-block");
      logRequired.classList.replace("d-block", "d-none");
      logIncorrect.classList.replace("d-block", "d-none");
      window.location.href = "home.html";
      return;
    } else if (
      logEmail.value !== storedData[j].uName ||
      logPassword.value !== storedData[j].uPassword
    ) {
      logRequired.classList.replace("d-block", "d-none");
      logSuccess.classList.replace("d-block", "d-none");
      logIncorrect.classList.replace("d-none", "d-block");
      return;
    } else {
      logRequired.classList.replace("d-none", "d-block");
      logSuccess.classList.replace("d-block", "d-none");
      logIncorrect.classList.replace("d-block", "d-none");
    }
  }
}

if (btnLogin) {
  btnLogin.addEventListener("click", checkLogin);
} else {
  console.log("btnLogin is null");
}

// ----------------------

//home page
function display() {
  var storedData = JSON.parse(localStorage.getItem("ourData"));
  var userWelcome = `<div class="m-auto p-5"><h1> Welcome ${storedData[0].uName}</h1><div>`;
  uWelcome.innerHTML = userWelcome;
  console.log(userWelcome);
}
display();

//regax

