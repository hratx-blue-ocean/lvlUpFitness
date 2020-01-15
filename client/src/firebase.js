const app = require("firebase");
const config = require("../src/components/loginScreen/config.js");

class Firebase {
  constructor() {
    app.initializeApp(config.default);
    this.auth = app.auth();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.auth.signOut();
  }

  register(name, email, password) {
    const reg = new Promise((resolve, reject) => {
      resolve(this.auth.createUserWithEmailAndPassword(email, password));
    });
    reg.catch(error => {
      console.log("Code: ", error.code, "/n", "Message", error.message);
    });
  }
  statusChange() {
    this.auth.onAuthStateChanged(function(user) {
      if (user) {
        return user;
      } else {
        console.error("register error");
      }
    });
  }
}

export default new Firebase();
