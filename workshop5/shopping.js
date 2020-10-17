// shopping.js
// This script calculates an order total.

// Skripti annettu valmiina, tehty halutut muutokset

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	
	// For storing the order total:
	var total;
    
	// Get references to the form values:
	// Näihin on lisätty tietotyypistä riippuen parseInt tai ParseFloat
	// Lisäksi monesta puuttui value-kohta lopusta!
    var quantity = parseInt(document.getElementById('quantity').value);

    var price =  parseFloat(document.getElementById('price').value);
    var tax =  parseFloat(document.getElementById('tax').value);
    var discount = parseFloat(document.getElementById('discount').value);
	var shipping = parseFloat(document.getElementById('shipping').value);
	
	// Add validation here later!
	
	// Calculate the initial total:
	total = quantity * price;
	console.log("total before tax: " + total.toFixed(2)); // Lisäsin myös konsoliesityksen kahdella desimaalilla
	
	// Make the tax rate easier to use:
	tax = tax / 100;
	tax = tax + 1;
	
	// Factor in the tax:
	total = total * tax;
	console.log("total after tax: " + total.toFixed(2));
		
	// Factor in the discount:
	if (quantity > 100) {		// Yli sadalla yksiköllä alennus tuplaantuu
		discount *= 2;
	}
	total = total - discount;
	console.log("total after discount: " + total.toFixed(2));

	// Lisätään mahdolliset kuljetuskustannukset
	if (total <= 100) {
		total = total + shipping;
	}
	console.log("total after shipping: " + total.toFixed(2));

	// Format the total to two decimal places:
	total = total.toFixed(2);
	
	// Display the total:
	document.getElementById('total').value = total;
	
	// Return false to prevent submission:
	return false;
    
} // End of calculate() function.

// Poistin täältä lopusta valmiit koodit, ohjelma toimii mielestäni
// paremmin nykyisellä tavalla