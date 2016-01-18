var typeInput = document.getElementById('t-type');
var intInput = 11, enjInput = 11;
var lenInput = document.getElementById('t-length');
var noteInput = document.getElementById('t-notes');
var injInput = document.getElementById('t-injuries');
var goalInput = document.getElementById('t-goals');
document.querySelector('form.train-form input[type=button]').addEventListener('click', function(e) {
function getRadioValue(groupName, groupVal) {
  var valRet = 0;
  var radios = document.getElementsByName(groupName);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      groupVal = i;
      break;
    }
  }
  return groupVal;
}
intInput = (getRadioValue("t-i", intInput)+1);
enjInput = (getRadioValue("t-e", enjInput)+1);

document.write("Type: "+typeInput.value+"<br>");
document.write("Intensity: "+intInput+"<br>");
document.write("Enjoyment: "+enjInput+"<br>");
document.write("Length: "+lenInput.value+"<br>");
document.write("Notes: "+noteInput.value+"<br>");
document.write("Injuries: "+injInput.value+"<br>");
document.write("Goals: "+goalInput.value+"")});
