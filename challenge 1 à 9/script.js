'use strict';

// CALCULE DE L'IMC DE BERNARD PREMIERE VALEUR
const hightBernard1 = "1.69";
const weightBernard1 = "78";

const imcBernard = weightBernard1 / (hightBernard1 * hightBernard1);
console.log(imcBernard);
console.log("Bernard à un IMC de " + (imcBernard.toFixed(2)));

// CALCULE DE L'IMC DE MARCEL PREMIERE VALEUR
const hightMarcel1 = "1.95";
const weightMarcel1 = "92";
const imcMarcel = weightMarcel1 / (hightMarcel1 * hightMarcel1);
console.log(imcMarcel);
console.log("Marcel à un IMC de " + (imcMarcel.toFixed(2)));

//COMPARAIOSN DES IMC VALEUR 1

let bernardHigherIMC = imcBernard > imcMarcel;
console.log("Bernard a un IMC plus grand que Marcel : " + bernardHigherIMC);

// EXERCICE 2 

if (bernardHigherIMC) {
    console.log(`Bernard a un IMC (${imcBernard.toFixed(2)}) plus élevé que Marcel (${(imcMarcel.toFixed(2))})`);
}
// EXERCICE 3

console.log("resultat bernard")

if (imcBernard <= 22) {
    console.log("Bernard est en Insuffiance ponderale");
} else if (imcBernard < 27) {
    console.log("Poids normal");
} else if ((imcBernard >= 27) || (imcBernard >= 32)) {
    console.log("Bernard est en surpoids");
}

console.log("resultat marcel")

if (imcMarcel <= 22) {
    console.log("Marcel est en Insuffiance ponderale");
} else if (imcMarcel < 27) {
    console.log("Marcel à un Poids normal");
} else if ((imcMarcel >= 27) || (imcMarcel >= 32)) {
    console.log("Surpoids");
}

//CHALLENGE 4

const Score1Dauphins = [96, 108, 89];
const Score1Koalas = [88, 91, 100];

const Score2Dauphins = [97, 112, 101];
const Score2Koalas = [109, 95, 123];

const Score3Dauphins = [97, 112, 101];
const Score3Koalas = [109, 95, 106];

//moyenne des scores

function numAverage(a) {
    var b = a.length,
        c = 0, i;
    for (i = 0; i < b; i++) {
        c += Number(a[i]);

        return c / b;
    }
}
const resultKoala1 = numAverage(Score1Koalas);
console.log(Math.round(resultKoala1))
const resultDauphins1 = numAverage(Score1Dauphins);
console.log(Math.round(resultDauphins1))

//comparer les moyennes

function TheWinner(resultDauphins1, resultKoala1) {

    if (resultKoala1 < resultDauphins1) {
        console.log("the winner is dauphins");
    } else if (resultDauphins1 === resultKoala1) {
        console.log(" it's a tie !")
    } else {
        console.log("the winner is koalas");
    };
};

TheWinner(resultDauphins1, resultKoala1);


// COMPARAISON DES RESULTATS

let sum = 0;

for (let i = 0; i < Score1Dauphins.length; i++) {
    sum += Score1Dauphins[i];
}
console.log(sum);


function scoreUp100(score) {
    if (score >= 100) {
        console.log("you win");
    } else ("you lose")
}

scoreUp100(sum)

//CHALLENGE 5


const note1 = 275
const note2 = 40
const note3 = 430

function tips(note, calcule) {

    ((note <= 50) && (note >= 300)) ? calcule = note * 0.2 : calcule = note * 0.15;
    console.log(calcule);
    return calcule;
}

const bill1 = tips(note1);

console.log(`la note était de ${note1},le pourboire ${bill1} de et la valeur totale était de ${note1 + bill1}`);

// CHALLENGE 6

//CALCULE DES MOYENNES 

const scoreSDauphins1 = [44, 23, 71];
const scoreDauphin2 = [65, 54, 49]
const scoreKoalas1 = [65, 54, 49];
const scoreKoalas2 = [23, 34, 27];
const calcAverage = arr => arr.reduce((a, b) => a + b, 0);

const averageSDauphins1 = calcAverage(scoreSDauphins1) / scoreSDauphins1.length;
const averageKoalas1 = calcAverage(scoreKoalas1) / scoreKoalas1.length;
const averageSDauphins2 = calcAverage(scoreDauphin2) / scoreDauphin2.length;
const averageKoalas2 = calcAverage(scoreKoalas2) / scoreKoalas2.length;

console.log(`la moyenne sur la premiere rencontre des dauphins est de ${averageSDauphins1} 
et celle des koalas est de ${averageKoalas1}`);

console.log(`la moyenne sur la seconde rencontre des dauphins est de ${averageSDauphins2} 
et de celle des koalas est de ${averageKoalas2}`);

//moyenne de l'ensembles des rencontre

const moyennekolas = ((averageKoalas1 + averageKoalas2) / 2)
const moyenneDauphins = ((averageSDauphins1 + averageSDauphins2) / 2)
console.log(`la moyenne sur l'ensemble des rencontres pour les Koalas est de ${moyennekolas}`);
console.log(`la moyenne sur l'ensemble des rencontres pour les dauphins est de ${moyenneDauphins}`);

console.log(`sur l'ensembles des rencontre `);

// THE WINNER



const chekWinner = function (moyenneDauphins, moyennekolas) {
    if (moyenneDauphins >= moyennekolas) {
        console.log(`les dauphins gagnent avec ${moyenneDauphins} points`);
    } else if (moyennekolas >= moyenneDauphins) {
        console.log(`les koalas gagnent avec ${moyennekolas} points`);
    } else {
        console.log(`personne ne gagne`);
    }
}
console.log(chekWinner(moyenneDauphins, moyennekolas));

