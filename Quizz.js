const questions = [
    {
question:  "Vrai ou Faux : Les légumineuses peuvent apporter autant de protéines que la viande. \n1.Vrai \n2.Faux ", 
réponse: 1
},
    {
question: "Parmi ces propositions, laquelle n'est pas une source de matières grasses/lipides ? \n1.Beurre \n2.L'huile d'olive \n3.Les pâtes \n4.L'avocat" , 
réponse: 3
},
    {
question:  "Parmi ces propositions choisissez la bonne réponse. Quel est le nom du sucre principal des fruits ? \n1.L'amidon \n2. Le fructose \n3.Le saccharose \n4. Le lactose", 
réponse: 2
},

    {
question:  "Choisissez la bonne réponse. Parmi ces fruits, lequel est le plus sucré ? \n1.La banane \n2.La pomme \n3.Le kiwi \n4.La framboise", 
réponse: 1
},

{
question: "Choisissez la bonne réponse. Les légumes sont sources de : \n1. sucre \n2. protéines \n3. matières grasses \n4. vitamines, minéreaux, fibres et eau"  , 
réponse: 4
},

{
question:  "Vrai ou Faux :  L'endive est un légume d'été. \n1.Vrai \n2.Faux ", 
réponse: 2
},

{
question: "Choisissez la bonne réponse. Quelle est la meilleure répartition d'aliment dans mon repas du midi ? \n1.100% de légumes \n2.1/4 de féculent, 1/4 de protéines, 1/2 de légumes \n3. 3/4 de fécuments et 1/4 de protéines \n4.1/2 de féculent et 1/2 de légumes"
réponse: 2
},

{
question:  "Vrai ou Faux :  Les matières grasses ne sont pas bonnes pour la santé. \n1.Vrai \n2.Faux ", 
réponse: 2
}
]; 

let goodAnswer = 0; 

for ( let i = 0, i< questions.length; i++) {
let repUser = prompt (questions [i].question); 
if (repUser === question[i].reponse) {
    alert ('Bonne réponse !');
    goodAnswer +=1;
}
else  {
    alert ('Mauvaise réponse !'); 
}
}
if (goodAnswer <=1) {
    alert (`Vous avez eu ${goodAnswer} bonne réponse sur ${questions.length}`); 
}
else {
alert (`Vous avez eu ${goodAnswer} bonnes réponses sur ${questions.length}`);   
}



