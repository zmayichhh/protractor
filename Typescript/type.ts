
class ucionica {

    broj: number;
    ime: string = "Adi";
    password:number;

    constructor(password:number) {

        this.password = password;
    }

  rezultat() {
        return this.broj;
  }


  sabiranje() {
    this.broj = 50;
  }


  naziv() {
    return this.ime = "Moje ime je " + this.ime;
  }

}

let objekat = new ucionica(5555);
objekat.sabiranje();
console.log(objekat.rezultat());
console.log(objekat.naziv());
console.log(objekat.password);













