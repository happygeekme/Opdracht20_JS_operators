const age = 26;
const isFemale = "false";
const driverStatus = "noBob";
const yourName = "Bram";
const totalAmount = 10;

if (age >= 18) {
 console.log("Welkom!")
} else {
 console.log("Jij moet buiten blijven...")
}

if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Jij komt helaas niet in aanmerking voor korting")
}

if (yourName == "Sarah" || yourName == "Bram") {
    console.log("Jij krijgt een gratis biertje van ons!")
} else {
    console.log("Helaas je hebt niet de juiste naam voor gratis bier")
}

if (isFemale) {
    console.log("Koop hier je Ladiesnight tickets")
} else {
    console.log("Sorry, this event is not available for you")
}

if (driverStatus == "Bob") {
    console.log("Jij mag sturen")
} else {
    console.log("Hier met die autosleutels")
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt een gratis portie (vega) bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie nachos!!")
} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne!!")
} else {
    console.log("Drink nog wat meer en krijg gratis snacks of champagne")
}