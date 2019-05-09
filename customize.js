// var container = document.getElementById('Seg-img-cont');
// function buildImgLayer(item) {
//     var build;
//     build = document.createElement('img');
//     build.setAttribute('id', 'lay');
//     // build.src = `Images/${item}.png`;
//     build.src = `Images/imagelayortest2.png`;
//     container.appendChild(build);
// }
// buildImgLayer();

var Color = document.getElementById('colorOptions');
var colorNames = ['Black', 'Blue', 'Green', 'Red', 'White'];
var buttons = [];

buildButtons();

function buildButtons() {
    colorNames.forEach(buildButton);
    
}

function buildButton(item, index, arr) {
    // console.log(item);
    buttons[index] = document.createElement('div');
    console.log(`url("Images/Segway ${item}.png");`);
    buttons[index].style.backgroundImage = `url("Images/Segway ${item}.png");`;
    buttons[index].textContent = item;
    // buttons[index].setAttribute('class', 'btn');
    Color.appendChild(buttons[index]);
    // buttons[index].addEventListener('click', btnClicked);
}

function btnClicked(evt) {
    console.log(evt.target.innerText + " clicked");
}