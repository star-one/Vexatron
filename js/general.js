// General
function updateGeneral() {
var strings = [
'Sound not started yet.',
];

var randomIndex = Math.floor(Math.random() * strings.length);

var randomString = strings[randomIndex];

var general = randomString;

  var txt=document.getElementById("query")
  txt.innerHTML=general;
  
  scroll(0,0)
}
