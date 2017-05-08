
var Rebase = require('re-base');
var config = {
    apiKey: "AIzaSyB_ED9T_gEFhoaCvdaPnj7CTjcTcSeaNYo",
    authDomain: "git-fire.firebaseapp.com",
    databaseURL: "https://git-fire.firebaseio.com",
    projectId: "git-fire",
    storageBucket: "git-fire.appspot.com",
    messagingSenderId: "954681694137"
  };
  var base = Rebase.createClass(config);
  export default base;
