const loginForm = document.getElementById("loginForm");
const loginUser = document.getElementById("login");
const loginPass = document.getElementById("password");

//ARREGLO DONDE SE VAN A GUARDAR LAS INSTANCIAS DE USUARIO
let users = [];
class User {
  constructor(mail, pass, admin = false) {
    this.mail = mail;
    this.pass = pass;
    this.admin = admin;
  }
}
//CREAMOS AUTOMATICAMENTE EL USUARIO ADMIN
users.push(new User("admin@admin.com", "admin", true));

//OBTENER USUARIOS DE LOCAL STORAGE


let usersStorage = localStorage.getItem("users");
usersStorage = JSON.parse(usersStorage);
if (usersStorage === null) {
  localStorage.setItem("users", JSON.stringify(users));
}
//VALIDAMOS USUARIO
const login = (mail, pass) => {
  //PRIMERO BUSCAMOS SI EXISTE EL USUARIO EN EL ARRAY
  let userExists = usersStorage.filter(function (user) {
    return user.mail === mail;
  });
  //SI EXISTE, VALIDAMOS QUE COINCIDA LA CONTRASENA CON LA DEL ARRAY
  if (userExists.length > 0) {
    console.log(userExists[0]);
    if (userExists[0].mail === mail && userExists[0].pass === pass) {
      return true;
    } else {
      return false;
    }
  }
  //SI NO EXISTE DEVOLVEMOS UNA ALERTA
  else {
    console.log("fail");
  }
};

if (window.location.pathname === "/login.html") {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (login(loginUser.value, loginPass.value)) {
      if (loginUser.value === "admin@admin.com") {
        window.location.href = "/admin.html";
      } else {
        window.location.href = "/index.html";
      }
    } else {
      alert("error");
    }
  });
}

//REGISTRAR USUARIO
const signupForm = document.getElementById("signupForm");
const signupEmail = document.getElementById("userEmail");
const signupPassword = document.getElementById("userPassword");
const confirmSignupPassword = document.getElementById("confirmUserPassword");
const errorEmail = document.getElementById("errorEmail");
const secLevel = document.getElementById("securityLevel");
const confirm = document.getElementById("confirm");
console.log(secLevel.children[0]);
//AGREGAR USER A LA LISTA DE USERS
const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  } else return false;
};
const validatePass = (pass, confirm) => {
  if (pass.value === confirm.value) {
    return true;
  } else return false;
};

const secPass = (pass) => {
  const upper = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
  const num = "0123456789";
  const sim = "!@#$%^&*()-_=+;:'/?.>,<`{}[]";
  for (let i = 0; i < pass.value.length; i++) {
    if (upper.indexOf(pass.value.charAt(i), 0) != -1) {
      secLevel.children[0].style.backgroundColor = "green";
    }
  }
  for (let i = 0; i < pass.value.length; i++) {
    if (num.indexOf(pass.value.charAt(i), 0) != -1) {
      secLevel.children[1].style.backgroundColor = "green";
      secLevel.children[2].style.backgroundColor = "green";
    }
  }
  for (let i = 0; i < pass.value.length; i++) {
    if (sim.indexOf(pass.value.charAt(i), 0) != -1) {
      secLevel.children[3].style.backgroundColor = "green";
    }
  }
  if (pass.value.length === 0) {
    secLevel.children[0].style.backgroundColor = "#f6f6f6";
    secLevel.children[1].style.backgroundColor = "#f6f6f6";
    secLevel.children[2].style.backgroundColor = "#f6f6f6";
    secLevel.children[3].style.backgroundColor = "#f6f6f6";
  }
};
signupPassword.oninput = () => {
  secPass(signupPassword);
};

const addUser = (email, pass) => {
  users.push(new User(email, pass));
};

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail(signupEmail)) {
    if (validatePass(signupPassword, confirmSignupPassword)) {
      addUser(signupEmail.value, signupPassword.value);
      localStorage.setItem("users", JSON.stringify(users));
      errorEmail.style.display = "none";
      confirm.style.display = "none";
      window.location.href = "../login.html";
    } else {
      confirm.style.display = "block";
      confirm.textContent = "The passwords most be equal";
    }
  } else {
    errorEmail.style.display = "block";
    errorEmail.textContent = "No valid email";
  }
});
