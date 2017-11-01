import "../css/main.css";
import '../img/icon-128.png'
import '../img/icon-34.png'

var config = {
  apiKey: "AIzaSyDFJBdQ7dVY3rJtEn0I3J6vZmVYVTVrXtE",
  authDomain: "pcshot-b411c.firebaseapp.com",
  databaseURL: "https://pcshot-b411c.firebaseio.com",
  projectId: "pcshot-b411c",
  storageBucket: "pcshot-b411c.appspot.com",
  messagingSenderId: "483111281699"
};
firebase.initializeApp(config);

function syncClipboardToFirebase(data) {
  const dbRef = firebase.database().ref().child('text');
  dbRef.set(data);
  firebase.database().ref().child('history').push(data);
}

function sync(info) {
  // can be replaced with crossy server
  syncClipboardToFirebase(info.selectionText);
  console.log('syncing...', info);
}

chrome.contextMenus.create({
  title: 'Cross Talk',
  contexts: ['selection'],
});

chrome.contextMenus.onClicked.addListener(sync);

chrome.commands.onCommand.addListener(function (command) {
  if (command === "save") {
    chrome.tabs.executeScript( {
      code: "window.getSelection().toString();"
    }, function(selection) {
      sync({selectionText: selection[0]});
    });
  }
});