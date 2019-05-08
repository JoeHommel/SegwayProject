var container = document.getElementById('Seg-img-cont');

function buildImgLayer(item) {
    var build;
    build = document.createElement('img');
    build.setAttribute('id', 'lay');
    // build.src = `Images/${item}.png`;
    build.src = `Images/imagelayortest2.png`;
    container.appendChild(build);
}

// buildImgLayer();