// JavaScript-kurssin Workshop 5
// (c) Janne Lahdenperä 2020

"use strict";

// Funktio hakee tiedot lomakkeen kentistä ja tarkastaa niiden oikeellisuuden
// Virhetilanteessa palautetaan false ja ilmoitetaan käyttäjälle
function getData() {
    var lomake = document.forms[0];                 // Lomake omaan muuttujaan
    var emailKentta = lomake['email'].value;        // Sähköpostiosoite omaan muuttujaan
    var kommenttiKentta = lomake ['comment'].value; // Kommentti omaan muuttujaan

    // Allaoleva rivi on tehtävän ensimmäisestä osasta, jätin sen kuitenkin näkyviin
    // alert("Emailkentän arvo: " + emailKentta + "\nKommenttikentän arvo: " + kommenttiKentta);

    // Seuraavaksi tarkastetaan että email-kenttä täyttää vaaditut ehdot, virhetilanteessa
    // näytetään virheilmoitus käyttäjälle, laitetaan fokus oikeaan kenttään ja palautetaan false
    if (emailKentta.length < 6 || emailKentta.length > 14 || emailKentta.indexOf('@') === -1 ) {
        document.getElementsByClassName('emailFeedback')[0].innerHTML = "<b style='color:red;'> Virhe sähköpostiosoitteessa!</b>";
        lomake['email'].select();
        return false;
    }
    
    // Tarkastetaan, että kommenttikenttä täyttää vaatimukset, virhetilanteessa ilmoitetaan käyttäjälle
    // (poistetaan aikaisempi varoitus, koska se on jo tarkastettu) ja palautetaan false
    if (kommenttiKentta == null || kommenttiKentta == "" || kommenttiKentta.length > 50) {
        document.getElementsByClassName('emailFeedback')[0].innerHTML = "";
        document.getElementsByClassName('commentFeedback')[0].innerHTML = "<b style='color:red;'> Virhe kommentissa!</b>";
        lomake['comment'].select();
        return false;
    }
}

// Funktio laskee jäsenyyden hinnan sille annettujen arvojen perusteella
function laskeHinta() {
    var hinta = 0;              // Määritellään alkuarvot
    var alennuskerroin = 1;
    var erikoisalennus = 0;

    var tyyppi = document.forms.membershipForm.type.value;  // Luetaan jäsenyyden tyyppi ja lasketaan hinta sen perusteella
    if (tyyppi == 'basic') {
        hinta = 10.00;
    }
    if (tyyppi == 'premium') {
        hinta = 15.00;
    }
    if (tyyppi == 'gold') {
        hinta = 20.00;
    }
    if (tyyppi == 'platinum') {
        hinta = 25.00;
    }
    
    var vuodet = parseFloat(document.forms.membershipForm.years.value); // Luetaan vuosimäärä ja asetetaan mahdolliset alennukset
    if (vuodet >= 2) {                                                  
        alennuskerroin = 0.8;
    }
    if (vuodet >= 5) {
        erikoisalennus = 5;
    }

    var kustannus = hinta * vuodet * alennuskerroin - erikoisalennus;   // Lasketaan jäsenyyden kustannukset
    kustannus = kustannus.toFixed(2);                                   // Asetetaan hinnan esitys kahdella desimaalilla

    document.forms.membershipForm.cost.value = kustannus + "€";         // Näytetään hinta lomakkeen ruudussa
}

// Funktio näyttää tiedon mahdollisista alennuksista
function kerroAlennuksesta() {
    var arvo = parseInt(document.forms.membershipForm.years.value);     // Luetaan lomakkeesta vuosimäärä
    if (arvo < 2) {
        document.getElementById('alennuskentta').innerHTML = "";    // Ei alennusta =(
    }
    if (arvo >= 2 && arvo < 5) {                                    // Yli kanhden vuoden asiakkuus antaa 20% alennuksen
        document.getElementById('alennuskentta').innerHTML = "Alennuksesi 20%!";
    }
    if (arvo >= 5) {                                                // Yli viiden vuoden asiakkuus antaa lisäksi 5€ alennusta
        document.getElementById('alennuskentta').innerHTML = "Alennuksesi 20% ja 5€!<br>Kiitos pitkästä asiakkuudesta!";
    }
}

// Funktio piilottaa kontaktikentät ja asettaa nappeihin kuuntelijat,
// joilla kentät saa takaisin esiin
function hideAndShow() {
    document.getElementById('email').style.display = "none";    // Piilotetaan kentät
    document.getElementById('phone').style.display = "none";
    document.getElementById('address').style.display = "none";

    var emailCheckbox = document.getElementById('emailCheckbox');   // Lisätään ensimmäiseen nappiin kuuntelija
    emailCheckbox.addEventListener("click", function() {
        if (emailCheckbox.checked == true) {                        // Näytetään kenttä tai piilotetaan se checkboxin tilasta riippuen
            document.getElementById('email').style.display = "block";
        } else {
            document.getElementById('email').style.display = "none";
        }
    });

    var phoneCheckbox = document.getElementById('phoneCheckbox');   // Lisätään toiseen nappiin kuuntelija
    phoneCheckbox.addEventListener("click", function() {
        if (phoneCheckbox.checked == true) {
            document.getElementById('phone').style.display = "block";
        } else {
            document.getElementById('phone').style.display = "none";
        }
    });

    var snailMailCheckbox = document.getElementById('snailMailCheckbox');   // Lisätään kolmanteen nappiin kuuntelija
    snailMailCheckbox.addEventListener("click", function() {
        if (snailMailCheckbox.checked == true) {
            document.getElementById('address').style.display = "block";
        } else {
            document.getElementById('address').style.display = "none";
        }
    });


}

// Piilotetaan ylimääräiset kentät sivun latautuessa
window.onload = hideAndShow;