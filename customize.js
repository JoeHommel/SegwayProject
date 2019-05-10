var NavHolder = document.getElementById('CustomizeNav');
var optionsholder = document.getElementById('Options');
var NavOptions = ['Colors', 'Wheels', 'Engines', 'Customs'];
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
    name = "Wheels";
    wheels.forEach(buildButton); //wheels
    name = "Engines";
    Engines.forEach(buildButton); //engines
    name = "Customs";
    Customs.forEach(buildButton); //custom upgrades
}

function buildButton(item, index, arr) {
    buttons[index] = document.createElement('button');
    buttons[index].textContent = item;
    buttons[index].setAttribute('name', name);
    buttons[index].setAttribute('id', name);
    optionsholder.appendChild(buttons[index]);
    buttons[index].addEventListener('click', btnClicked);
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
        a.addEventListener('click', navClicked);
        ul.appendChild(a);
    });
    Nav.appendChild(ul);
    NavHolder.appendChild(Nav);
}

function btnClicked(evt) {;
    var b = document.getElementsByName(this.id);
}

function navClicked(name, evt) {
    hideOptions();
    var Unhide = document.getElementsByName(this.id);
    Unhide.forEach(e => {
        // console.log(e);
        e.style.display = "flex";
    });
}

function hideOptions() {
    NavOptions.forEach(element => {
        var d = document.getElementsByName(element);
        d.forEach(f => {
            // console.log(f);
            f.style.display = "none";
        });
    });
}