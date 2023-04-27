export class LoginPage {
  fullname;
  email;
  constructor() {
    this.user = "Users";
    this.fullname, this.email;
    this.initUser();
  }

  initUser() {
    if (localStorage.getItem(this.user) == null) {
      localStorage.setItem(this.user, "[]");
    }
  }
  getUsers() {
    let users;
    users = localStorage.getItem(this.user);
    users = JSON.parse(users);
    return users;
  }

  log() {
    let btnlog = document.getElementById("loginbtn");
    if (btnlog) {
      btnlog.addEventListener("click", () => {
        let erorr = document.getElementById("erorrMsg");
        erorr.innerHTML = "";
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name == "" || email == "") {
          erorr.innerText = "erorr: something is missing !";
        } else {
          let user = {
            Fullname: name,
            Email: email,
          };
          localStorage.setItem(this.user, JSON.stringify(user));
          let boxlogin = document.getElementById("box");
          boxlogin.style.color = "#fff";
          boxlogin.style.fontSize = "25px";
          boxlogin.innerHTML =
            "<p>We're happy to see you again, </p><h1>" +
            user.Fullname +
            "</h1>";

          console.log(user);
        }
      });
    }
  }
}

let login = new LoginPage();
login.log();
