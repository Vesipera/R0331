// JavaScript-kurssin Workshop 7
// (c) Janne Lahdenperä 2020

// Funktio hakee dokumentista quote- ja author-tagien sisällön
// ja tulostaa ne taulukkoon ruudulle
function parseData() {
    var quotes = document.getElementsByTagName('quote');    // Haetaan lainaukset
    var authors = document.getElementsByTagName('author');  // Haetaan niiden sanojat
    var quotePlace = document.getElementById('quoteAlue');  // Asetetaan taulukon alue
    var tbl  = document.createElement('table');         // Luodaan taulukkoelementti
    tbl.style.border = '1px solid black';           // Annetaan elementille reunat

    for (var i = 0; i < 2; i++) {   // Silmukka taulukon täyttämiseen
        var tr = tbl.insertRow();   // Luodaan taulukolle rivi
        var td = tr.insertCell();   // Ensimmäinen sarake
        td.appendChild(document.createTextNode(quotes[i].innerHTML));  // Sarakkeen sisältö
        td.style.border = '1px solid black';    // Sarakkeelle reunat
        td = tr.insertCell();       // Toinen sarake
        td.appendChild(document.createTextNode(authors[i].innerHTML)); // Sarakkeelle sisältö
        td.style.border = '1px solid black';    // Sarakkeelle reunat
    }
    quotePlace.appendChild(tbl);    // Asetetaan taulukko näkyviin
}

// Funktio hakee qod.xml-tiedoston verkosta ja tulostaa
// sen sisällön sivulle
function fetchXML() {
    var xmlhttp = new XMLHttpRequest(); // Luodaan XML-kutsu
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true); // Asetetaan kutsun attribuutit
    xmlhttp.send(); // Lähetetään kutsu
    xmlhttp.onreadystatechange = function() {   // Odotetaan vastausta
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Saadaan vastaus
            document.getElementById('quotes').innerHTML = xmlhttp.responseText; // Tulostetaan saatu tieto ruudulle
        }
    }
}

// Funktio hakee qod.xml-tiedoston verkosta, parsii siitä
// lainauksen ja sen sanojan ja tulostaa tiedot taulukkoon
function fetchAndParseXML() {
    var xmlhttp = new XMLHttpRequest(); // Luodaan XML-kutsu
    xmlhttp.open("GET", "http://quotes.rest/qod.xml", true); // Asetetaan kutsun attribuutit
    xmlhttp.send(); // Lähetetään kutsu
    xmlhttp.onreadystatechange = function() {   // Odotetaan vastausta
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Saadaan vastaus
            var xmlDoc = xmlhttp.responseXML; // Haetaan xml-data
            var quotes = xmlDoc.getElementsByTagName('quote');  // Haetaan datasta lainaus
            var quote = quotes[0].innerHTML;    // Laitetaan lainaus omaan muuttujaansa
            var authors = xmlDoc.getElementsByTagName('author'); // Haetaan datasta sanoja
            var author = authors[0].innerHTML; // Laitetaan lainauksen sanoja omaan muuttujaan
            buildTable(quote, author); // Luodaan taulukko tietojen pohjalta
        }
    }
}

// Funktio luo taulukon sille annettujen muuttujien pohjalta
function buildTable(quote, author) {
    var quotePlace = document.getElementById('tabledata'); // Taulukon paikka
    quotePlace.innerHTML = "";  // Tyhjennetään taulukon paikka
    var tbl  = document.createElement('table');         // Luodaan taulukkoelementti
    tbl.style.border = '1px solid black';           // Annetaan elementille reunat
    tbl.style.width = '400px';      // Annetaan taulukolle leveys

    var header = tbl.createTHead(); // Luodaan taulukolle header
    var row = header.insertRow();   // Luodaan headerille rivi
    var cell = row.insertCell();    // Headerin ensimmäinen sarake
    cell.innerHTML = "<b>Quote</b>";    // Sarakkeen sisältö
    cell.style.border = '1px solid black';  // Sarakkeen tyyli
    cell = row.insertCell();        // Headerin toinen sarake
    cell.innerHTML = "<b>Author</b>";   // Sarakkeen sisältö
    cell.style.border = '1px solid black';  // Sarakkeen tyyli
    
    var tr = tbl.insertRow();   // Luodaan taulukolle rivi
    var td = tr.insertCell();   // Ensimmäinen sarake
    td.appendChild(document.createTextNode(quote));  // Sarakkeen sisältö
    td.style.border = '1px solid black';    // Sarakkeelle reunat
    td = tr.insertCell();       // Toinen sarake
    td.appendChild(document.createTextNode(author)); // Sarakkeelle sisältö
    td.style.border = '1px solid black';    // Sarakkeelle reunat
    quotePlace.appendChild(tbl);    // Asetetaan taulukko näkyviin
}

// Funktio antaa virheilmoituksen nappia painaessa!
function yahooNews() {
    alert('Ei toimi! Käytä Iltalehteä!');
}

// Funktio hakee iltalehden uutissyötteen ja asettaa sen ruudulle näkyviin listana,
// ikävä kyllä kaikki yritykseni xml-tiedon hakemiseen kaatuivat
// "CORS header ‘Access-Control-Allow-Origin’ missing" -virheeseen =(
function iltalehti() {
    alert('Sori, tämäkään ei toimi...');
    var newsPlace = document.getElementById('newsfeed');  // Asetetaan uutissyötteen paikka
    var xmlhttp = new XMLHttpRequest(); // Luodaan XML-kutsu
    xmlhttp.open("GET", "https://www.iltalehti.fi/rss/uutiset.xml", true); // Asetetaan kutsun attribuutit
    xmlhttp.send(); // Lähetetään kutsu
    xmlhttp.onreadystatechange = function() {   // Odotetaan vastausta
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { // Saadaan vastaus
            var xmlDoc = xmlhttp.responseXML; // Haetaan xml-data
            var titles = xmlDoc.getElementsByTagName('title'); // Talletetaan otsikot taulukkoon

            var titleList = document.createElement('ul');  // Luodaan otsikoille lista
            for (var i = 0; i < titles.length; i++) {   // Käydään otsikkotaulukko läpi
                var titleItem = document.createElement('li');   // Luodaan listaelementti
                titleItem.innerHTML = titles[i].innerHTML;  // Annetaan elementille sisältö
                titleList.appendChild(titleItem);   // Laitetaan elementti listaan
            }
            newsPlace.appendChild(titleList);   // Asetetaan lista sivulle
        }
    }
}