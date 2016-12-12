function Mobile(marka, cena, kolor, operator, wyswietlacz) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.operator = operator;
	this.wyswietlacz = wyswietlacz;
}

Mobile.prototype.printInfo = function() {
	console.log("Marka telefonu to: " + this.marka + ", jego kolor to: " + this.kolor + ". U Operatora " + this.operator + " ten telefon kosztuje " + this.cena + "zł. Wielkość jego ekranu to: " + this.wyswietlacz + " cala.");
}

var lumia650 = new Mobile("Microsoft", 1000, "czarny", "Plus", 6.5);
lumia650.printInfo();

var iPhone6 = new Mobile("Apple", 2250, "srebrny", "Play", 7.3);
iPhone6.printInfo();

var galaxyS6 = new Mobile("Samsung", 4524, "zielony", "T-Mobile", 3);
galaxyS6.printInfo();

var y5II = new Mobile("Huawei", 5432, "pomarańczowy", "Virgin", 4.5);
y5II.printInfo();

var blade = new Mobile("ZTE", 123, "szary", "nju", 234);
blade.printInfo();