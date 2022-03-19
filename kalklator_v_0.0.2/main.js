function pobierzWartosci() {
	var valueA = document.getElementById('a').value;
	var valueB = document.getElementById('b').value;

	return [ Number(valueA) , Number(valueB) ];
}

function dodaj(a, b) {
	document.getElementById('wynik').innerHTML = pobierzWartosci()[0] + pobierzWartosci()[1];
}

function odejmij(a,b) {
	document.getElementById('wynik').innerHTML = pobierzWartosci()[0] - pobierzWartosci()[1];
}

function pomnóż(a, b) {
	document.getElementById('wynik').innerHTML = pobierzWartosci()[0] * pobierzWartosci()[1];
}

function podziel(a,b) {
	document.getElementById('wynik').innerHTML = pobierzWartosci()[0] / pobierzWartosci()[1];
}