var NavOptions = ['Colors', 'Wheels', 'Engines', 'Customs'];
var colorNames = ['Black', 'Blue', 'Green', 'Red', 'White'];
var wheels = ['OffRoad', 'MadMax', 'Slim-Tires', 'Empty'];
var Engines = ['Diesel', 'Muscle', 'Solar', 'Empty'];
var Customs = ['Tall', 'Horn', 'Chair', 'Chain', 'Phone', 'Basket', 'Baby', 'Training', 'Empty'];
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

function buildBase() {
    var customizerHolder = document.createElement('div');
    customizerHolder.setAttribute('id', "CustomizersHolder");

    var CustomizeNav = document.createElement('div');
    CustomizeNav.setAttribute('id', "CustomizeNav");

    var Options = document.createElement('div');
    Options.setAttribute('id', "Options");

    document.getElementById('segway').appendChild(customizerHolder);
    document.getElementById('CustomizersHolder').appendChild(CustomizeNav);
    document.getElementById('CustomizersHolder').appendChild(Options);

    var imgHolder = document.createElement('div');
    imgHolder.setAttribute('id', "imgHolder");
    document.getElementById('segway').appendChild(imgHolder);

    var CustomizeHeader = document.createElement('h4');
    CustomizeHeader.innerHTML = "Customize your segway";
    document.getElementById('imgHolder').appendChild(CustomizeHeader);

    var Segimgcont = document.createElement('div');
    Segimgcont.setAttribute('id', "Seg-img-cont");
    document.getElementById('imgHolder').appendChild(Segimgcont);

    var baseimg = document.createElement('img');
    baseimg.setAttribute('id', "baseImg");
    baseimg.setAttribute('class', "lay");
    baseimg.setAttribute('src', "Images/Segway Black.png");
    document.getElementById('Seg-img-cont').appendChild(baseimg);

    var Colorimg = document.createElement('img');
    Colorimg.setAttribute('id', "ColorsImg");
    Colorimg.setAttribute('class', "lay");
    // Colorimg.setAttribute('src', "");
    document.getElementById('Seg-img-cont').appendChild(Colorimg);

    var WheelsImg = document.createElement('img');
    WheelsImg.setAttribute('id', "WheelsImg");
    WheelsImg.setAttribute('class', "lay");
    // WheelsImg.setAttribute('src', "");
    document.getElementById('Seg-img-cont').appendChild(WheelsImg);

    var CustomsImg = document.createElement('img');
    CustomsImg.setAttribute('id', "CustomsImg");
    CustomsImg.setAttribute('class', "lay");
    CustomsImg.setAttribute('src', "");
    document.getElementById('Seg-img-cont').appendChild(CustomsImg);

    var EnginesImg = document.createElement('img');
    EnginesImg.setAttribute('id', "EnginesImg");
    EnginesImg.setAttribute('class', "lay");
    // EnginesImg.setAttribute('src', "");
    document.getElementById('Seg-img-cont').appendChild(EnginesImg);

    var priceholder = document.createElement('div');
    priceholder.setAttribute('id', "priceHolder");
    document.getElementById('imgHolder').appendChild(priceholder);

    var prices = document.createElement('ul');
    prices.setAttribute('id', "prices");
    document.getElementById('priceHolder').appendChild(prices);

    var baseSegway = document.createElement('li');
    baseSegway.setAttribute('id', "baseSegway");
    baseSegway.innerHTML = "Segway: $1000";
    document.getElementById('prices').appendChild(baseSegway);
    
    var ColorsPrice = document.createElement('li');
    ColorsPrice.setAttribute('id', "ColorsPrice");
    document.getElementById('prices').appendChild(ColorsPrice);
    
    var WheelsPrice = document.createElement('li');
    WheelsPrice.setAttribute('id', "WheelsPrice");
    document.getElementById('prices').appendChild(WheelsPrice);
    
    var EnginesPrice = document.createElement('li');
    EnginesPrice.setAttribute('id', "EnginesPrice");
    document.getElementById('prices').appendChild(EnginesPrice);
    
    var CustomsPrice = document.createElement('li');
    CustomsPrice.setAttribute('id', "CustomsPrice");
    document.getElementById('prices').appendChild(CustomsPrice);
    
    var hr = document.createElement('hr');
    document.getElementById('priceHolder').appendChild(hr);

    var Discount = document.createElement('h4');
    Discount.setAttribute('id', "Discount");
    document.getElementById('priceHolder').appendChild(Discount);

    var totalmoney = document.createElement('h4');
    totalmoney.setAttribute('id', "total-money");
    document.getElementById('priceHolder').appendChild(totalmoney);

    var modal = document.createElement('button');
    modal.setAttribute('id', "openModal");
    modal.innerHTML = "Buy"
    document.getElementById('priceHolder').appendChild(modal);

}

function buildButton(item, index, arr) {
    var optionsholder = document.getElementById('Options');
    buttons[index] = document.createElement('button');
    buttons[index].textContent = item;
    buttons[index].setAttribute('name', name);
    buttons[index].setAttribute('id', item);
    optionsholder.appendChild(buttons[index]);
    buttons[index].addEventListener('click', optionClicked);
}

function buildNav() {
    var NavHolder = document.getElementById('CustomizeNav');
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

        var color = localStorage.getItem("color");
        var wheel = localStorage.getItem("wheel");
        var engine = localStorage.getItem("engine");
        var custom = localStorage.getItem("custom");
        localStorage.clear();

        document.getElementById(`ColorsImg`).src = `Images/Segway ${color}.png`;
        document.getElementById(`WheelsImg`).src = `Images/Segway ${wheel}.png`;
        document.getElementById(`EnginesImg`).src = `Images/Segway ${engine}.png`;
        document.getElementById(`CustomsImg`).src = `Images/Segway ${custom}.png`;

        document.getElementById(`ColorsPrice`).innerHTML = `${color} : $${50 * color.length}`;
        colorTotal = 50 * color.length;
        document.getElementById(`WheelsPrice`).innerHTML = `${wheel} : $${50 * wheel.length}`;
        wheelTotal = 50 * wheel.length;
        document.getElementById(`EnginesPrice`).innerHTML = `${engine} : $${50 * engine.length}`;
        EngineTotal = 50 * engine.length;
        document.getElementById(`CustomsPrice`).innerHTML = `${custom} : $${50 * custom.length}`;
        CustomTotal = 50 * custom.length;
        console.log(CustomTotal);
        // document.getElementById("Discount").innerHTML = ``;
        document.getElementById("total-money").innerHTML = `$${colorTotal + wheelTotal + EngineTotal + CustomTotal + baseCost - 300}`;
    }
}