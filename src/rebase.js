
var Rebase = require('re-base');
var config = {
  apiKey: "AIzaSyDsb-qOGQMBKTTAaR_qHMJlvgoQgSli70g",
  authDomain: "friendlychat-7c70c.firebaseapp.com",
  databaseURL: "https://friendlychat-7c70c.firebaseio.com",
  projectId: "friendlychat-7c70c",
  storageBucket: "friendlychat-7c70c.appspot.com",
  messagingSenderId: "397611863059"
};

  var base = Rebase.createClass(config);
  export default base;
