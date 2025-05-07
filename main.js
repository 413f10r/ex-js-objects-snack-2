//  🏆 Code Question 1
//  const hamburger = { name: "Cheese Burger", weight: 250 };
//  const secondBurger = hamburger;
//  secondBurger.name = 'Double Cheese Burger';
//  secondBurger.weight = 500;

//  console.log(secondBurger.name); // ?
// console.log(hamburger.name); // ?


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ? 

// RISULTATO PREVISTO: 2 volte double cheese burger

//     Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

//  RISULTATO :1




//  🏆 Code Question 2
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

// P.S.: Ricordati che gli Array, come gli oggetti, 
// sono dei Reference Type(Tipi di Riferimento)!



// Senza lanciare il codice, riesci a prevedere cosa 
// viene stampato in console ?
// 2 volte salad, quindi vengon modificate entrambele copie dell' oggetto.
//     Quanti oggetti sono stati creati in memoria durante
//  l'esecuzione di questo codice?
//  RISULTATO : 2; ma l  arrey di ingredients è solo una refereence, 
// quindi ne esiste 1 solo e di conseguenza viene modificato anche l arrey origine.







// 🏆 Code Question 3
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const secondBurger = structuredClone(hamburger);
// const thirdBurger = structuredClone(hamburger);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//  RISULTATO : 9 ; 1 oggetto per hambuerger, 1 per secondBurger; e 1 per thirdBurger,
//  ma aloro volt avranno due copie di oggetti annidati di MAKERR e RESTAURANT  








// 🏆 Code Question 4
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
const copyChef = { ...chef };//SPREAD (SHALLOW COPY)
console.log(copyChef)

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
const copyRestaurant = structuredClone(restaurant)// DEEP COPY 
console.log(copyRestaurant)

// Qual è il metodo migliore per clonare l’oggetto chef, e perché ?
// usare lo *** SPREAD(...) OPERATOR *** perchè permette di copiare anche la funzione, structuredClone e JSON.parse(JSON.stringify()) non lo permetterebbero

//     Qual è il metodo migliore per clonare l’oggetto restaurant, e perché ?
// usare *** structuredClone *** per creare una deep copy avendoo ggetti ANNIDATI 







// 🎯 Code Question 5(Bonus)
// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     maker: {
//         name: "Anonymous Chef",
//         restaurant: {
//             name: "Hyur's Burgers",
//             address: "Main Street, 123",
//             isOpen: true,
//         },
//         age: 29
//     }
// };

// const newRestaurant = { ...hamburger.maker.restaurant };
// newRestaurant.name = "Hyur's II";
// newRestaurant.address = "Second Street, 12";
// const secondBurger = { ...hamburger };
// secondBurger.maker.restaurant = newRestaurant;
// secondBurger.maker.name = "Chef Hyur";

// console.log(hamburger.maker.name); // ?
// console.log(secondBurger.maker.name); // ?
// console.log(hamburger.maker.restaurant.name); // ?
// console.log(secondBurger.maker.restaurant.name); // ?
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
//     Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?








// 🎯 Code Question 6(Bonus)
// const chef = {
//     name: "Chef Hyur",
//     age: 29,
//     makeBurger: (num = 1) => {
//         console.log(`Ecco ${num} hamburger per te!`);
//     },
//     restaurant: {
//         name: "Hyur's Burgers",
//         welcomeClient: () => {
//             console.log("Benvenuto!");
//         },
//         address: {
//             street: 'Main Street',
//             number: 123,
//             showAddress: () => {
//                 console.log("Main Street 123");
//             }
//         },
//         isOpen: true,
//     }
// }
// Qual è il metodo migliore per clonare l’oggetto chef, e perché ?
// 🎯 Snack(Bonus)
// Crea una funzione che permette la copia profonda(deep copy) di un oggetto, che copia anche i suoi metodi(proprietà che contengono funzioni).Usa l’oggetto di Code Question 6 come test.

// ⚠️ Serve usare una funzione ricorsiva!(fai un po’ di ricerca).
