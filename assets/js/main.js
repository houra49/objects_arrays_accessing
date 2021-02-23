//////////////////////////////////////////1-1
// let europäischeUnion = {
//     Belgien: ('BE'),
//     Griechenland: ('EL'),
//     Litauen: ('LT'),
//     Portugal: ('PT'),
//     Bulgarien: ('BG'),
//     Spanien: ('ES'),
//     Luxemburg: ('LU'),
//     Rumänien: ('RO'),
//     Tschechien: ('CZ'),
//     Frankreich: ('FR'),
//     Ungarn: ('HU'),
//     Slowenien: ('SI'),
//     Dänemark: ('DK'),
//     Kroatien: ('HR'),
//     Malta: ('MT'),
//     Slowakei: ('SK'),
//     Deutschland: ('DE'),
//     Italien: ('IT'),
//     Niederlände: ('NL'),
//     Finnland: ('FI'),
//     Estland: ('EE'),
//     Zypern: ('CY'),
//     Österreich: ('AT'),
//     Schweden: ('SE'),
//     Irland: ('IE'),
//     Lettland: ('LV'),
//     Polen: ('PL'),
//     VereinigtesKönigreich: ('UK')
// }
// console.log(europäischeUnion.Belgien)
// europäischeUnion.BeneluxUnion = 'BL'
// console.log(europäischeUnion.BeneluxUnion)
// console.log(europäischeUnion)
// delete europäischeUnion.BeneluxUnion
// console.log(europäischeUnion)
//////////////////////////////////////////1-2
// let person = {
//     name: 'Houra',
//     alter: '34',
//     sagNameAlter() {
//         alert()
//         console.log(person.name + ':' + person.alter)
//     }
// }
// person.sagNameAlter()
//////////////////////////////////////////1-4
// var unsereHaustiere = [
//     {
//         tiertyp: "Katze",

//         names: [
//             "Gipsy",
//             "Nala",
//             "Dinky"
//         ]
//     },
//     {
//         tiertyp: "Hunde",
//         names: [
//             "Knöpfchen",
//             "Pinselchen",
//             "Droopy"
//         ]
//     }
// ];
// console.log(unsereHaustiere[0].names)
// console.log(unsereHaustiere[0].names[1])
// console.log(unsereHaustiere[1].names[2])
// console.log(unsereHaustiere[1].names)
//////////////////////////////////////////1-5
// var unserLager = {
//     schreibtisch: {
//         schublade: "Hefter"
//     },
//     schrank: {
//         "Obere Schublade": {
//             Ordner1: "eine Datei",
//             Ordner2: "Geheimnisse"
//         },
//         "Untere Schublade": "Cola"
//     }
// };

// console.log(unserLager.schrank["Obere Schublade"].Ordner2);
// console.log(unserLager.schrank["Untere Schublade"]);
// console.log(unserLager.schreibtisch.schublade);
//////////////////////////////////////////1-6
var myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true
    },
    {
        kunstler: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
console.log(myMusic[0].kunstler)
console.log("von" + " " + myMusic[1].kunstler + [":"] + myMusic[1].formate[3])
console.log("von" + " " + myMusic[1].kunstler + [":"] + myMusic[1].gold)
console.log(myMusic[2].release_jahr + " " + "und" + " " + myMusic[3].release_jahr)
console.log("von" + " " + myMusic[3].kunstler + [":"] + myMusic[3].formate[2])
console.log("von" + " " + myMusic[3].kunstler + " " + "das Wort" + [":"] + myMusic[3].title.slice(17, 21))
console.log("von" + " " + myMusic[2].kunstler + " " + "das Wort" + [":"] + myMusic[2].title.slice(13))
console.log("von" + " " + myMusic[1].kunstler + " " + "das Wort" + [":"] + myMusic[1].kunstler.slice(5))