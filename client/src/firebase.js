import { getSessionCookie,setSessionCookie } from "./components/Cookies.js";

const app = require("firebase");
const config = require("../src/components/loginScreen/config.js");

class Firebase {
  constructor() {
    app.initializeApp(config.default);
    this.auth = app.auth();
    this.someId = "";
    // this.db = app.firestore();
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
    })
    .catch(error => {
      console.log("Code: ", error.code, "/n", "Message", error.message);
    });
  }
  statusChange() {
    this.auth.onAuthStateChanged(function(user) {
      if (user) {
        return user
      } else {
        console.log("register error");
      }
    });
  }
}

export default new Firebase();
