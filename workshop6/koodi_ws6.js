// JavaScript-kurssin Workshop 6
// (c) Janne Lahdenperä 2020

// Funktio hakee sivun kentistä niiden tiedot muuttujiin ja tallentaa
// muuttujat sekä local- että sessionStorageen
function getData() {
    var destination = document.getElementById('destination').value; // Haetaan kenttien tiedot
    var arrivalDate = document.getElementById('arrival').value;     // Kahdesta ensimmäisestä haetaan niihin kirjoitettu teksti
    var internet = document.getElementById('CheckboxGroup1_0').checked; // Valintaruuduista haetaan tieto onko niissä ruksia
    var airCon = document.getElementById('CheckboxGroup1_1').checked;
    var minibar = document.getElementById('CheckboxGroup1_2').checked;
    var carRent = document.getElementById('CheckboxGroup1_3').checked;
    var sauna = document.getElementById('CheckboxGroup1_4').checked;
    
    // Tallennetaan luetut tiedot localStorageen
    localStorage.setItem('savedDestination', destination);
    localStorage.setItem('savedArrivalDate', arrivalDate);
    localStorage.setItem('savedInternet',  internet);
    localStorage.setItem('savedAirCon', airCon);
    localStorage.setItem('savedMinibar', minibar);
    localStorage.setItem('savedCarRent', carRent);
    localStorage.setItem('savedSauna', sauna);

    // Tallennetaan luetut tiedot sesionStorageen
    sessionStorage.setItem('savedDestination', destination);
    sessionStorage.setItem('savedArrivalDate', arrivalDate);
    sessionStorage.setItem('savedInternet',  internet);
    sessionStorage.setItem('savedAirCon', airCon);
    sessionStorage.setItem('savedMinibar', minibar);
    sessionStorage.setItem('savedCarRent', carRent);
    sessionStorage.setItem('savedSauna', sauna);
}

// Funktio lukee tiedot sekä local- että sessionStoragesta, tämän jälkeen
// tiedot tulostetaan niille varattuihin tiloihin
function loadData() {
    if (localStorage.getItem('savedDestination') === null) {
        return; // Jos localstorage on tyhjä, poistutaan funktiosta
    }

    // Luetaan tiedot muuttujiin
    var destination = localStorage.getItem('savedDestination');
    var arrivalDate = localStorage.getItem('savedArrivalDate');
    var internet = localStorage.getItem('savedInternet');
    var airCon = localStorage.getItem('savedAirCon');
    var minibar = localStorage.getItem('savedMinibar');
    var carRent = localStorage.getItem('savedCarRent');
    var sauna = localStorage.getItem('savedSauna');

    // Luodaan tulostettava teksti
    var loadedData = 'Destination: ' + destination + ', Arrival Date: ' 
    + arrivalDate + ', Internet: ' + internet + ', Air Conditioning: '
    + airCon + ', Minibar: ' + minibar + ', Car rent: ' + carRent
    + ', Sauna: ' + sauna;

    // Asetetaan teksti oikeaan kenttään
    document.getElementById('sessiondata').innerHTML = loadedData;

    if (sessionStorage.getItem('savedDestination') === null) {
        return; // Jos sessionStorage on tyhjä, poistutaan funktiosta
    }

    // Luetaan tiedot muuttujiin
    destination = sessionStorage.getItem('savedDestination');
    arrivalDate = sessionStorage.getItem('savedArrivalDate');
    internet = sessionStorage.getItem('savedInternet');
    airCon = sessionStorage.getItem('savedAirCon');
    minibar = sessionStorage.getItem('savedMinibar');
    carRent = sessionStorage.getItem('savedCarRent');
    sauna = sessionStorage.getItem('savedSauna');

    // Luodaan tulostettava teksti
    var loadedData = 'Destination: ' + destination + ', Arrival Date: ' 
    + arrivalDate + ', Internet: ' + internet + ', Air Conditioning: ' 
    + airCon + ', Minibar: ' + minibar + ', Car rent: ' + carRent 
    + ', Sauna: ' + sauna;

    // Asetetaan teksti oikeaan kenttään
    document.getElementById('sessionStorageData').innerHTML = loadedData;
}
