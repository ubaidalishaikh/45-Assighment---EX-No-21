
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name: string
    price: number 
}

//Create Two Objects....

const book: item = {
    name: 'Physics'
    price:500
}

const shoes: item = {
    name: "Jordan"
    price: 2500
}

console.log(`Book name ${book.name}, Book price $${book.price} `);
console.log(`Shoes name ${shoes.name}, Shoes price $${shoes.price} `);

