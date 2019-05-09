var NavHolder = document.getElementById('CustomizeNav');
var optionsholder = document.getElementById('Options');
var NavOptions = ['Colors', 'Wheels', 'Engines', 'Custom options'];
var colorNames = ['Black', 'Blue', 'Green', 'Red', 'White'];
var wheels = ['OffRoad', 'MadMax', '3'];
var Engines = ['1', '2', '3'];
var Customs = ['1', '2', '3', '4', '5', '6', '7', '8'];
var buttons = [];
var name = "Colors";

buildButtons();

function buildButtons() {
    buildNav(); //build nav
    colorNames.forEach(buildButton); //colors
    name = "wheels";
    wheels.forEach(buildButton); //wheels
    name = "engines";
    Engines.forEach(buildButton); //engines
    name = "customs";
    Customs.forEach(buildButton); //custom upgrades
}

function buildButton(item, index, arr) {
    buttons[index] = document.createElement('button');
    buttons[index].textContent = item;
    buttons[index].setAttribute('name', name);
    optionsholder.appendChild(buttons[index]);
    // buttons[index].addEventListener('click', btnClicked);
}

function buildNav() {
    Nav = document.createElement('div');
    Nav.setAttribute('class', "navbar-side");
    ul = document.createElement('ul');
    // ul.setAttribute('id', "option-nav");
    NavOptions.forEach(element => {
        var a = document.createElement('a');
        a.setAttribute('class', "nav-a");
        a.setAttribute('id', element);
        a.innerHTML = `<li class="nav-item">${element}</li>`;
        a.addEventListener('click', btnClicked);
        ul.appendChild(a);
    });
    Nav.appendChild(ul);
    NavHolder.appendChild(Nav);
}

function btnClicked(name, evt) {
    // console.log("d");
    // var c = document.getElementsByName("Colors");
    // console.log(c);
    // hideOptions();
    // document.getElementById(name).style.display = "flex";
    // NavOptions.forEach(hideOptions);
}

function hideOptions(item, index, arr) {

    // var temp = document.getElementsByName(item);
    // console.log(temp);
    // temp[index].style.display = 'hidden';
}