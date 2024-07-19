//Activity 1 : Object Creation and Access
console.log("Activity 1 : Object Creation and Access");

console.log("\nTask 1");
const book = {
    title : "The story of TATA",
    author : "Peter Casey",
    year : 2021,
}
console.log(book);

console.log("\nTask 2");
console.log(book.author);
console.log(book["title"]);



//Activity 2 : Object Methods
console.log("\nActivity 2 : Object Methods");

console.log("\nTask 3");
book.information = function () {
    //instead of book.title ->this.title is better to ref the object
    return `Book title : ${book.title}, Book author : ${book.author}`;
}
console.log(book.information());


console.log("\nTask 4");
book.updateYear = function(Updatedyear) {
    book.year=Updatedyear;
}
book.updateYear(2019)
console.log(book);



//Activity 3 : Nested Objects
console.log("\nActivity 3 : Nested Objects");

console.log("\nTask 5");
const library={
    name:"Central Library",
    books:[
        {
            title: "The Story of TATA",
            author: "Peter Casey",
            year: 2021
        },
        {
            title: "Clean Code",
            author: "Robert C. Martin",
            year: 2008
        },
        {
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            year: 2008
        }
    ]
}
console.log(library);


console.log("\nTask 6");
function generateTitles(books) {
    return books.map(book => book.title).join(', ');
}
console.log(`Library name : ${library.name}\nTitles of books : ${generateTitles(library.books)}`);



//Activity 4 : The this keyword
console.log("\nActivity 4 : The this keyword");

console.log("\nTask 7");
book.infoThis=function () {
    return `Book's Title : ${this.title}\nBook's Author : ${this.author}`
}
console.log(book.infoThis());


//Activity 5 : Object Iteration
console.log("\nActivity 5 : Object Iteration");

console.log("\nTask 8");
function printProperty(book) {
    for (const key in book) {
        if (book.hasOwnProperty(key)) {
           console.log(`${key} : ${book[key]}`);
        }
    }
}
printProperty(book);


console.log("\nTask 9");
let keys=Object.keys(book)
let values=Object.values(book)
keys.forEach((key,ind) => {
    console.log(`${key}:${values[ind]}`);
});