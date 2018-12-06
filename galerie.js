function changeImageM1(url, nom) {
    var bodyTag = document.body;
    var articleTag = bodyTag.childNodes[3];
    var p1Tag = articleTag.childNodes[3];
    var bTag = p1Tag.lastChild;
    var p2Tag = articleTag.childNodes[5];
    var imgTag = p2Tag.firstChild;
    imgTag.src = url;
    bTag.innerHTML = nom;
}

function changeImageM2(id_url, id_nom, url, nom) {
    var elem = document.getElementById('id_image');
    elem.src = url;
    var elem2 = document.getElementById('id_quoi');
    elem2.innerHTML = nom;
}

function changeImageM3(url, nom) {
    var elem = document.querySelector('#id_image');
    elem.src = url;
    var elem2 = document.querySelector('#id_quoi');
    elem2.innerHTML = nom;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCouleurDeFond() {
    $(document).ready(function () {
        $('body').css('background-image', 'none');
        $('nav a').css('color', 'black');
        $('h1 + p').css('color', 'black');
    });
    var elem = document.getElementById('b_accueil');
    elem.src = './Images/Icones/icons8-accueil-64-n.png'
    var bodyVar = document.body;
    var r = getRandomIntInclusive(0, 255);
    var v = getRandomIntInclusive(0, 255);
    var b = getRandomIntInclusive(0, 255);
    bodyVar.style.backgroundColor = 'rgb(' + r + ',' + v + ',' + b + ')';
}
