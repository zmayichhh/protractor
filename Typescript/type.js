var ucionica = /** @class */ (function () {
    function ucionica(password) {
        this.ime = "Adi";
        return this.password = password;
    }
    ucionica.prototype.rezultat = function () {
        return this.broj;
    };
    ucionica.prototype.sabiranje = function () {
        this.broj = 50;
    };
    ucionica.prototype.naziv = function () {
        return this.ime = "Moje ime je " + this.ime;
    };
    return ucionica;
}());
var objekat = new ucionica(5555);
objekat.sabiranje();
console.log(objekat.rezultat());
console.log(objekat.naziv());
console.log(objekat.password);
