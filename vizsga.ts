function osszesOszto(szam: number): number[] {
    var osztoLista: number[] = [];
  
    for (let i = 1; i <= szam; i++) {
      if (szam % i == 0) {
        osztoLista.push(i);
      }
    }
  
    return osztoLista;
  }

  function parosDarab(szamTomb: number[]): number {
    let parosSzamokSzama: number = 0;
  
    for (let i = 0; i < szamTomb.length; i++) {
      var szam = szamTomb[i];
  
      if (szam % 2 == 0) {
        parosSzamokSzama++;
      }
    }
  
    return parosSzamokSzama;
  }

  function Palindrom(fuggveny: () => string): boolean {
    
    const eredmenySzoveg: string = fuggveny();
  
    
    const tisztaSzoveg: string = eredmenySzoveg.replace(/\s/g, '');
  
    
    return tisztaSzoveg == tisztaSzoveg.split('').reverse().join('');
  }
  