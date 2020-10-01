// JavaScript-kurssin Workshop 4
// (c) Janne Lahdenperä 2020

// Funktio vaihtaa <h1>-tagien sisällön
function changeHeading() {
    document.getElementsByTagName('h1')[0].innerHTML = "Modified Heading!" // [0] pitää olla, koska muuten saadaan käsittelyyn taulukko
}

// Funktio muuttaa dokunentin toisen <h2>-elementin sisällön
function modifyStyle() {
    var vaihdettava = document.getElementsByTagName('h2')[1];
    vaihdettava.style.fontSize = 40;
    vaihdettava.style.fontFamily = "Times New Roman, Times, serif";
    vaihdettava.style.color = "#FF0000";            // Punainen
    vaihdettava.style.backgroundColor ="#008000";   // Vihreä
}

// Funktio lisää tekstiä ja kuvan neljännen <p>-tagin jälkeen
function appendText() {
    var uusiTeksti = document.createElement('p');   // Luodaan uusi tekstielementti ja annetaan sille sisältöä
    uusiTeksti.innerHTML = '<em>"<b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. "</em>'
    var kuva = document.createElement('IMG');       // Luodaan uusi kuva
    kuva.src = "https://qwebmaster.com/wp-content/uploads/2015/12/logo-javascript.png";
    var paikka = document.getElementsByTagName('p')[3]; // Katsotaan paikka, mihin halutaan lisätä
    paikka.appendChild(uusiTeksti);     // Lisätään teksti
    paikka.appendChild(kuva);           // Lisätään kuva
}

// Funktio piilottaa sivulla olevan taulukon, nimi muutettu alkuperäisessä html:ssä, koska siellä on myöhemmin saman niminen funktio
function hideMe() {
    document.getElementById('data').style.display = "none";
    document.getElementsByTagName('li')[3].innerHTML += "<b style='color:red;'> IT DISAPPEARS!!!</b>"; // Vastataan retoriseen kysymykseen
}

// Funktio palauttaa edellä piilotetun taulukon takaisin näkyviin
function show() {
    document.getElementById('data').style.display = "block";
}

// Funktio muuttaa 'Surprise'-luokan elementtien tekstin kokoon 20
function changeFontSize() {
    var muutettavat = document.getElementsByClassName('surprise');
    for (var i = 0; i < muutettavat.length; i++) {
        muutettavat[i].style.fontSize = 20;
    }
}

// Funktio näyttää valitun automerkin alert-laatikossa ja vaihtaa esitettävää kuvaa sen mukaan
function showChoice() {
    var choice = document.getElementById('mySelect').value;
    alert('Valintasi on ' + choice);
    if (choice == 'BMW') {
        document.getElementById('carimage').src = "https://cdn.iconscout.com/icon/free/png-256/bmw-4-202746.png";
    }
    if (choice == 'Audi') {
        document.getElementById('carimage').src = "https://cdn.iconscout.com/icon/free/png-256/audi-10-555177.png";
    }
    if (choice == 'Mercedes') {
        document.getElementById('carimage').src = "https://cdn.iconscout.com/icon/free/png-256/mercedes-202837.png";
    }
    if (choice == 'Volvo') {
        document.getElementById('carimage').src = "https://cdn.iconscout.com/icon/free/png-256/volvo-2-202926.png";
    }
}

// Funktio lisää kuvaan reunuksen
function addBorder() {
    document.getElementById('carimage').style.border = "thick solid #FF0000";
}

// Funktio poistaa kuvasta reunuksen
function removeBorder() {
    document.getElementById('carimage').style.border = "";
}

// Funktio liikuttaa kuvaa 500 pikseliä alaspäin ja 200 pikseliä oikealle
function changePosition() {
    document.getElementById('carimage').style.top = '500px';
    document.getElementById('carimage').style.left = '200px';
}

// Funktio siirtää kuvaa vuorotellen 150 pikseliä oikealle ja 150 pikseliä vasemmalle.
// Ajattelin ensin tehdä sellaisen, joka liikuttaisi kuvaa pikkuhiljaa ruudun reunasta toiseen, mutta
// se olisi vaatinut säätöä alkuperäiseen html:ään (jota pyrin tässä tehtävässä välttämään), joten jätin
// sen tekemättä.
function doMove() {
    var kuva = document.getElementById('carimage');
    var position = parseInt(kuva.style.left.replace('px',''),10);   // Haetaan kuvan x-koordinaatti ja parsitaan se kokonaisluvuksi
    if (position < 100) {           
        position += 150;                    // Liikutetaan kuvaa oikealle tai vasemmalle sen x-koordinaatista riippuen
    } else {
        position -= 150;
    }

    kuva.style.left = position + 'px';
}

// Funktio feidaa kuvan hitaasti pois näkyvistä, elementti jää silti näkyviin sivulle
function fadeOut() {
    var kuva = document.getElementById('carimage');
    var opacityAlussa = kuva.style.opacity;
    kuva.style.opacity = opacityAlussa - 0.05;
}

// Funktio piilottaa kuva-elementin sivulta
function hide() {
    document.getElementById('carimage').style.display = "none";
}

// Funktio luo taulukkoon uuden rivin tekstikentissä annetuilla arvoilla
function insertRows() {
    var name = document.getElementById('textfield').value;      // Haetaan arvot tekstikentistä
    var position = document.getElementById('textfield2').value;
    var salary = document.getElementById('textfield3').value;
    var taulukko = document.getElementById('data');
    var rivi = taulukko.insertRow(-1);      // Luodaan uusi rivi taulukon loppuun
    var solu1 = rivi.insertCell(0);     // Luodaan rivin solut
    var solu2 = rivi.insertCell(1);
    var solu3 = rivi.insertCell(2);
    solu1.innerHTML = name;             // Asetetaan arvot luotuihin soluihin
    solu2.innerHTML = position;
    solu3.innerHTML = salary;
}

// Tämä olikin aika mielenkiintoinen tehtävä, en ole varma oliko alkuperäisenä ideana vain vaihtaa
// vain <li>-tagien sisältö, vai tagit kokonaan uusiin. Sisällön vaihtaminen on aika triviaali homma,
// joten tässä on vaihdettu tagit uusiin.
function changeTags() {
    var vanhat = document.getElementsByTagName('li');   // Haetaan <li>-tagit taulukkoon
    var uudet = [];                                     // Luodaan taulukko uusille arvoille
    for (var i = 0; i < vanhat.length; i++) {           
        var uusi = document.createElement('strong');    // Luodaan <strong>-elementti ja sen sisältö
        uusi.style.color = "#FF0000";
        uusi.innerHTML = "Replaced";
        uudet.push(uusi);                               // Lisätään luotu elementti uusiin arvoihin
    }

    for (var i = vanhat.length - 1; i >= 0; i--) {      // <li>-tagit käydään läpi lopusta alkuun, koodi ei toimi toisin päin!
        vanhat[i].parentNode.replaceChild(uudet[i], vanhat[i]); // Vaihdetaan vanha sisältö uuteen
    }
}

// Funktio toimii kuten edellinen, sillä erotuksella että se vaihtaa ainoastaan ne
// <li>-tagit, joista löytyy merkkijono 'Select'
function changeSelectedTags() {
    var vanhat = document.getElementsByTagName('li');
    var uudet = [];
    for (var i = 0; i < vanhat.length; i++) {
        var uusi = document.createElement('strong');
        uusi.style.color = "#FF0000";
        uusi.innerHTML = "Replaced";
        uudet.push(uusi);
    }

    for (var i = 0; i < vanhat.length; i++) {       // Tässä tagit käydään läpi alusta loppuun
        if (vanhat[i].innerHTML.indexOf('Select') !== -1) {         // Löytyykö 'Select'
            vanhat[i].parentNode.replaceChild(uudet[i], vanhat[i]);
        }
    }
}