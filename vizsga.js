function osszesOszto(szam) {
    var osztoLista = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztoLista.push(i);
        }
    }
    return osztoLista;
}
function parosDarab(szamTomb) {
    var parosSzamokSzama = 0;
    for (var i = 0; i < szamTomb.length; i++) {
        var szam = szamTomb[i];
        if (szam % 2 == 0) {
            parosSzamokSzama++;
        }
    }
    return parosSzamokSzama;
}
function Palindrom(fuggveny) {
    var eredmenySzoveg = fuggveny();
    var tisztaSzoveg = eredmenySzoveg.replace(/\s/g, '');
    return tisztaSzoveg == tisztaSzoveg.split('').reverse().join('');
}
