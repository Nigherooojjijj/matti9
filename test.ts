// ------------------------------------------------------------------------
// PIN BELEGUNG FÜR CALLIOPE MINI V3
// ------------------------------------------------------------------------
// RST  → C4  
// MOSI → C14  
// MISO → C15  
// SCK  → C13  
// NSS  → P3
// ------------------------------------------------------------------------

// Zur Information: Wir speichern hier die Pinbelegungen als Strings,
// damit wir sie im seriellen Monitor und optional auf dem Display ausgeben können.
const PIN_RST: string = "C4";
const PIN_MOSI: string = "C14";
const PIN_MISO: string = "C15";
const PIN_SCK: string = "C13";
const PIN_NSS: string = "P3";

// Ausgabe der Pinbelegung im seriellen Monitor:
serial.writeLine("Pin Assignment for RFID Module on Calliope Mini V3:");
serial.writeLine("RST: " + PIN_RST);
serial.writeLine("MOSI: " + PIN_MOSI);
serial.writeLine("MISO: " + PIN_MISO);
serial.writeLine("SCK: " + PIN_SCK);
serial.writeLine("NSS: " + PIN_NSS);

// Optional: Ausgabe auf dem LED-Display (eingeschränkte Darstellungsfläche)
basic.showString("RST:" + PIN_RST);

// ------------------------------------------------------------------------
// RFID-FUNKTIONEN: Initialisieren, Lesen, Schreiben und Abschalten der Antenne
// ------------------------------------------------------------------------

// Initialisiere das RFID-Modul (in deiner Erweiterung ist integriert, dass
// die richtigen Pins (RST:C4, MOSI:C14, MISO:C15, SCK:C13, NSS:P3) verwendet werden):
RFID.init();

// Lese die Karte und hole die UID
let cardUID: string = RFID.getCardUID();
if (cardUID != "") {
    serial.writeLine("Card UID: " + cardUID);
    basic.showString(cardUID);
} else {
    serial.writeLine("No card detected!");
    basic.showString("No Card");
}

// Lese zusätzliche Daten der Karte (sofern in deiner Erweiterung implementiert)
let cardData: string = RFID.readData();
serial.writeLine("Data: " + cardData);
basic.showString(cardData);

// Schreibe den String "1234" auf die Karte
RFID.writeData("1234");
serial.writeLine("Wrote data: 1234");

// Schalte die Antenne ab (z.B. zum Energiesparen)
RFID.antennaOff();
serial.writeLine("Antenna turned off.");
