import "../css/popup.css";
import hello from "./popup/example";
import initApp from "./auth/fireauth";

const config = {
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(config);

window.onload = function() {
  initApp();
};

//hello();


