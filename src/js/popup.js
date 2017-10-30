import "../css/popup.css";
import hello from "./popup/example";
import initApp from "./auth/fireauth";

var config = {
  apiKey: "AIzaSyDFJBdQ7dVY3rJtEn0I3J6vZmVYVTVrXtE",
  authDomain: "pcshot-b411c.firebaseapp.com",
  databaseURL: "https://pcshot-b411c.firebaseio.com",
  projectId: "pcshot-b411c",
  storageBucket: "pcshot-b411c.appspot.com",
  messagingSenderId: "483111281699"
};
firebase.initializeApp(config);

window.onload = function() {
  initApp();
};

//hello();


