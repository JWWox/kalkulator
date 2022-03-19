var save = "";
var saveI = "";
var flaga = false;
var typOperacji;
const wyswietlacz = document.getElementById('ekran');


function pobierzWartosci() {

}

function wyswietl(liczba) {
    wyswietlacz.innerHTML = liczba;
}

function main(x) {
    if (flaga) {
        saveI = saveI + x;
        wyswietl(saveI);
    }
    else {
        save = save + x;
        wyswietl(save);
    }
    
}

function ustaw(typ) {
    typOperacji = typ;
    flaga = true;
    wyswietl(""); 
}

function dodaj(x, y) {
    return x + y;
}

function odejmij(x, y) {
    return x - y;
}

function pomnoz(x, y) {
    return x * y;
}

function podziel(x, y) {
    return x / y;
}

function dajWynik() {
   const liczba = Number(save);
   const liczbaI = Number(saveI);
   if (typOperacji == 0) {
    wyswietl(dodaj(liczba, liczbaI));
   }
   else if (typOperacji == 1) {
       wyswietl(odejmij(liczba, liczbaI));
   }
   else if (typOperacji == 2) {
       wyswietl(pomnoz(liczba, liczbaI));
   }
   else {
       wyswietl(podziel(liczba, liczbaI));
   }
}

function wyczysc() {
    save = "";
    saveI = "";
    flaga = false;
    typOperacji = undefined;
    wyswietl("");
}