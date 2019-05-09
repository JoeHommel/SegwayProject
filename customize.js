var Color = document.getElementById('colorOptions');
var colorNames = ['Black', 'Blue', 'Green', 'Red', 'White'];
var wheels = ['OffRoad', 'MadMax', '3', '4', '5'];
var Engines = ['1', '2', '3', '4', '5'];
var Customs = ['1', '2', '3', '4', '5', '6', '7', '8'];
var buttons = [];
var name = "";

buildButtons();

function buildButtons() {
    //build nav
    name = "colors";
    colorNames.forEach(buildButton); //colors
    name = "wheels";
    wheels.forEach(buildButton);//wheels
    name = "engines";
    Engines.forEach(buildButton);//engines
    name = "customs";
    Customs.forEach(buildButton);//custom upgrades
}

function buildButton(item, index, arr) {
    buttons[index] = document.createElement('button');
    buttons[index].textContent = item;
    buttons[index].setAttribute('id', name);
    Color.appendChild(buttons[index]);
    // buttons[index].addEventListener('click', btnClicked);
}

function btnClicked(evt) {
    console.log(evt.target.innerText + " clicked");
}