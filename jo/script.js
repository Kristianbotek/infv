function vypocetPrumeru(pole) {
    let soucet = 0;
    for (let i = 0; i < pole.length; i++) {
        soucet += pole[i];
    }
    return soucet / pole.length;
}

let cisla = [1, 2, 3, 4, 5];
let prumer = vypocetPrumeru(cisla);
console.log("Průměr čísel v poli je: " + prumer);

function najdiNejvyssiNejnizsi(pole) {
    let nejvyssi = Math.max(...pole);
    let nejnizsi = Math.min(...pole);
    return { nejvyssi, nejnizsi };
}

let cisla2 = [10, 5, 8, 3, 12];
let { nejvyssi, nejnizsi } = najdiNejvyssiNejnizsi(cisla2);
console.log("Nejvyšší číslo v poli je: " + nejvyssi);
console.log("Nejnižší číslo v poli je: " + nejnizsi);

let retezec = "Hello World";
let velkaPismena = retezec.toUpperCase();
let malaPismena = retezec.toLowerCase();
console.log("Původní řetězec: " + retezec);
console.log("Velká písmena: " + velkaPismena);
console.log("Malá písmena: " + malaPismena);

let pole1 = [1, 2, 3];
let pole2 = [4, 5, 6];
let kombinovanePole = pole1.concat(pole2);
console.log("Kombinované pole: " + kombinovanePole);

let zvirata = {
    pes: 2,
    kočka: 3,
    králík: 5
};
console.log(zvirata);

let mnozina = new Set([1, 2, 3, 4, 5]);
let prvekExistuje = mnozina.has(3);
console.log("Prvek existuje v množině: " + prvekExistuje);