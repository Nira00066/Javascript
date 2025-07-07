function varexo1() {
  let name = "nina";
  let age = 24;

  alert("Bonjour,je m'appelle " + name + "et j'ai " + age);
}

function varexo2() {
  const ville = "Bayonne";
  ville = "PARIS";
  alert(ville);

  //    TypeError: invalid assignment to const 'ville' cela n'est pas possible de reni un const car c'est une constant
}

function condexo3() {
  let age = 21;

  if (age <= 18) {
    alert("Tu es mineur");
  }
  if (age < 65) {
    alert("Tu es majeur");
  } else {
    alert("Tu es un senior ");
  }
}

function condexo4() {
  const input = Number(prompt("Entre un nombre"));

  if (input % 2 == 0 && input % 3 == 0) {
    alert("il est divisible par 3 et 2 ");
  }
  if (input % 3 == 0) {
    alert("il est divisible par 3 ");
  } else if (input % 2 == 0) {
    alert("il est divisible par 2 ");
  }
}

function condexo5() {
  let mois = Number(prompt("met ton mois ici"));

  const saison1 = "hiver";
  const saison2 = "printemps";
  const saison3 = "été";
  const saison4 = "Printemps";

  switch (mois) {
    case 12:
    case 1:
    case 2:
      alert(saison1);
      break;

    case 3:
    case 4:
    case 5:
      alert(saison2);
      break;
    case 6:
    case 7:
    case 8:
      alert(saison3);
    case 9:
    case 10:
    case 11:
      alert(saison4);
      break;
    default:
      text = "Pour les chiffre compris entre 1 et 12 et les mois quand même";
  }
}

function boucleexo6() {
  for (let i = 0; i < 21; i++) {
    if (i % 3 == 0) {
      i++;
    }
    console.log(i);
  }
}
function boucleexo6Correction() {
  for (let i = 0; i < 21; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
  }
}
function boucleexo7() {
  let somme = 0;
  for (i = 1; i < 100; i += 2) {
    somme += 1;
  }
  console.log("c'est la versionne que j'aurais aime faire  ");
}
function boucleexo7altrnative() {
  let somme = 0;
  for (i = 1; i < 100; i++) {
    if (i % 2 != 0) {
      somme += i;
    }
    console.log(somme);
  }
  console.log("c'est la versionne que j'ai fait ");
}
function boucleexo8() {
  let puissance = 1;
  let exposant = 0;

  while (puissance <= 1000) {
    puissance = Math.pow(2, exposant);
    console.log(puissance + exposant);
    exposant++;
  }
  console.log("c'est la versionne que j'aurais aime faire  ");
}
const fruits = ["pomme", "banane", "kiwi", "fraise"];

function tabexo9() {
  fruits.forEach((element, index) => {
    console.log(index, element);
  });
}

function tabexo10() {
  const fruits = ["pomme", "banane", "kiwi", "fraise"];

  let UpperFruits = fruits.map((fruit) => fruit.toUpperCase());
  alert(UpperFruits);
}

function tabexo11() {
  const cours = [10, 15, 18, 20, 1, 11];

  let somme = 0;

  for (i = 0; i < cours.length; i++) {
    somme += cours[i];
  }
  const moyenne = somme / cours.length;

  console.log(moyenne);
}

function objetexo12() {
  const personne = {
    nom: "Jean",
    age: 35,
    ville: "Toulouse",
  };
  for (const property in personne) {
    console.log(`${property}:${personne[property]}`);
  }
}

function objetexo13() {
  const personne = [
    {
      nom: "Jean",
      age: 35,
      ville: "Toulouse",
    },
    {
      nom: "Jf",
      age: 45,
      ville: "Toulouse",
    },
    {
      nom: "Jambon",
      age: 50,
      ville: "Toulouse",
    },
    {
      nom: "Jeaneymar",
      age: 75,
      ville: "Toulouse",
    },
    {
      nom: "Jean-eude",
      age: 15,
      ville: "Toulouse",
    },
    {
      nom: "Jean-aude",
      age: 25,
      ville: "Bayonne",
    },
  ];

  //   filter
}

function funexo1() {
  function direBonjour(prenom) {
    console.log("bonjours " + prenom);
  }
  direBonjour("Alice");
}
// Retoure ligne 146 undifine

function funexo2() {
  function addiction(a, b) {
    a = 1;
    b = 4;
    console.log(a + b);
  }
  addiction();
}

function funexo3() {
  function saluer(nom) {
    return "Salut" + nom;
  }
  nom = prompt("Qui est tu ?");
  console.log(nom);
}

function funexo4() {
  function isPair(n) {
    // TODO : utiliser l’opérateur % pour vérifier si divisible par 2
    if (n % 2 === 0) {
      console.log("divisible par 2");
    } else {
      console.log("tu nest pas divisible par 2");
    }
  }
  isPair((n = Number(prompt("donne moi un chiffre"))));

  // isPair(4); // attendu : true
  // isPair(5); // attendu : false
}

const doublerArrow = (n) => n * 2;

function deepexo1() {
  const person = {
    name: "Alice",
    age: 30,
    address: {
      city: "Paris",
      zip: "75015",
    },
  };

  const perso2 = { ...person };
  perso2.address.city = "bayonne";

  console.log(person.address.city);
  console.log(perso2.address.city);


const persoProfond = JSON.parse(JSON.stringify(person));
persoProfond.address.city ='Lyon';

console.log(person.address.city);

}
