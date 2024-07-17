let poids = 70;  // Exemple de poids en kilogrammes
let taille = 1.75;  // Exemple de taille en mètres

const IMC = (x, y) => {
    let result = (x / (y * y));
    return result.toFixed(1); 
};

let imcResult = IMC(poids, taille);
console.log("Votre indice de masse corporelle est de " + imcResult + " kg/m²");

const getInterpretation = (result) => {
    if (result <= 18.5) {
        return "Votre IMC traduit une situation de sous-poids.";
    } else if (result > 18.5 && result <= 24.9) {
        return "Votre IMC traduit une situation de poids physiologique.";
    } else if (result >= 25 && result <= 29.9) {
        return "Votre IMC traduit une situation de surpoids.";
    } else if (result >= 30 && result <= 34.9) {
        return "Votre IMC traduit une situation d'obésité de grade 1.";
    } else if (result >= 35 && result <= 39.9) {
        return "Votre IMC traduit une situation d'obésité de grade 2.";
    } else if (result >= 40) {
        return "Votre IMC traduit une situation d'obésité de grade 3.";
    } else {
        return "Erreur de calcul.";
    }
};

console.log(getInterpretation(imcResult));