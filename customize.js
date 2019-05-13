var NavHolder = document.getElementById('CustomizeNav');
var optionsholder = document.getElementById('Options');
var NavOptions = ['Colors', 'Wheels', 'Engines', 'Customs'];
var colorNames = ['Black', 'Blue', 'Green', 'Red', 'White'];
var wheels = ['OffRoad', 'MadMax', 'Slim-Tires'];
var Engines = ['Diesel', 'Muscle', 'Solar'];
var Customs = ['1', '2', '3', '4', '5', '6', '7', '8'];
var buttons = [];
var name = "Colors";

var colorTotal = 0;
var wheelTotal = 0;
var EngineTotal = 0;
var CustomTotal = 0;
var baseCost = 1000;

// buildButtons();

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
    buttons[index].setAttribute('id', item);
    optionsholder.appendChild(buttons[index]);
    buttons[index].addEventListener('click', optionClicked);
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

function optionClicked(evt) {
    // console.log(this.name);
    if (this.name == 'Colors') {
        colorTotal = 50 * this.id.length;
    } else if (this.name == 'Wheels') {
        wheelTotal = 50 * this.id.length;
    } else if (this.name == 'Engines') {
        EngineTotal = 50 * this.id.length;
    } else if (this.name == 'Customs') {
        CustomTotal = 50 * this.id.length;
    }
    // Total = Total + (50 * this.id.length);
    document.getElementById(`${this.name}Img`).src = `Images/Segway ${this.id}.png`;
    document.getElementById(`${this.name}Price`).innerHTML = `${this.id} : $${50 * this.id.length}`;
    // console.log(colorTotal + wheelTotal + EngineTotal + CustomTotal);
    document.getElementById("Discount").innerHTML = ``;
    document.getElementById("total-money").innerHTML = `$${colorTotal + wheelTotal + EngineTotal + CustomTotal + baseCost}`;
}

function navClicked(evt) {
    hideOptions();
    var Unhide = document.getElementsByName(this.id);
    Unhide.forEach(e => {
        e.style.display = "flex";
    });
}

function hideOptions() {
    NavOptions.forEach(options => {
        var allOptions = document.getElementsByName(options);
        allOptions.forEach(f => {
            f.style.display = "none";
        });
    });
}

function setBuild(color, wheel, engine, custom) {
    localStorage.setItem("color", color);
    localStorage.setItem("wheel", wheel);
    localStorage.setItem("engine", engine);
    localStorage.setItem("custom", custom);
    window.location.assign("customize.html");
}

function getBuild() {
    if (color = localStorage.getItem("color") != null) {
        document.getElementById("baseSegway").innerHTML = ``;
        document.getElementById("Discount").innerHTML = `Discount : - $${300}`;

        document.getElementById("total-money").innerHTML = `$${colorTotal + wheelTotal + EngineTotal + CustomTotal + baseCost - 300}`;
        var color = localStorage.getItem("color");
        var wheel = localStorage.getItem("wheel");
        var engine = localStorage.getItem("engine");
        var custom = localStorage.getItem("custom");
        localStorage.clear();

        document.getElementById(`ColorsImg`).src = `Images/Segway ${color}.png`;
        document.getElementById(`WheelsImg`).src = `Images/Segway ${wheel}.png`;
        document.getElementById(`EnginesImg`).src = `Images/Segway ${engine}.png`;
        document.getElementById(`CustomsImg`).src = `Images/Segway ${custom}.png`;
    }
}