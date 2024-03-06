import {addition, substraction, multiplication, division} from "/math.js";

//1 TIMEOUT FUNCTIONS

setTimeout(function delayedGreeting (){ 
    console.log("Welcome message!")
}, 3000) //3000 ms equals 3 seconds

//2 PROMISES
const demoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Success!');
    resolve();
  }, 2000);
});

demoPromise.then(() => {
  console.log('Promise completed');
}).catch((error) => {
  console.error('Error ', error);
});

//3. MODULES
console.log(addition(8,8)) //outputs 16
console.log(substraction(8,8)) //outputs 0
console.log(multiplication(8,8)) //outputs 64
console.log(division(8,8)) //outputs 1

//4. ARRAYS AND OBJECTS

const people = [{firstName: 'John', lastName: 'Doe' }, { firstName: 'Alice', lastName: 'Smith'}]
function combineData(info){
    info.forEach((element) => {
        element.fullName = element.firstName + ' ' + element.lastName;
    })
}

//5. JSON METHODS
const student = {
    firstName: 'daniel',
    class: 10
}

jsonString = JSON.stringify(student)
parsedBack = JSON.parse(jsonString)
console.log(parsedBack)

//6. TRY-CATCH

function calculate() {
    while (true) {
        let num1, num2, operation, result
        while (true) {
            let input = prompt("Enter a number: ");
            num1 = parseInt(input)
            if (!isNaN(num1)) {
                break
            } else {
                alert("Error enter a valid number")
            }
        }

        while (true) {
            let input = prompt("Enter another number: ")
            num2 = parseInt(input)
            if (!isNaN(num2)) {
                break
            } else {
                alert("Error. enter a valid number")
            }
        }

        while (true) {
            operation = prompt("Select operation [+] [-] [*] [/]")
            if (['+', '-', '*', '/'].includes(operation)) {
                break
            } else {
                alert("Error. try again")
            }
        }
        try {
            switch (operation) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 === 0) {
                        throw new Error("Division by zero")
                    }
                    result = num1 / num2
                    break
            }
            alert("Result: " + result)
        } catch (e) {
            alert(e)
        }

        break
    }
}

calculate();

//7. ASYNC

async function fetchDataAPI(){
    let data = await fetch("https://jsonplaceholder.typicode.com/users/1")
    return await response.json()
}
fetchDataAPI().then((data) => data)

//8. CLASSES

class Book {
    constructor(title, author, genre, availabilityStatus){
        this.title = title
        this.author = author
        this.genre = genre
        this.availabilityStatus = availabilityStatus
    }
}

class Library {
    constructor(){
        this.books = []
        
    }
    addBooks(book){
        this.books.push(book)
    }
    removeBook(title){
        this.books = this.books.filter((book) => book.title !== title)
            
    }
    
    searchBook(title){
        if(this.books.find((book) => book.title === title)){
            return 'book found'
        }else {
            return 'book not fpund'
        }
    }

}

let book1 = new Book("Broken Glass", "A. Mabanckou ", "Fiction", true);
let book2 = new Book("A little Life", "Yanahigara", "Drama", true);
let book3 = new Book("Bad Blood", "Lorna Sage", "Memoir", true);

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.searchBook(("A little Life"));

library.removeBook("A little Life");

//9. ARRAY METHODS
let numbers = [4,7,9,10]
function doubledNumbers(numbers){
    let numbers2 = numbers.map((number) => number*2)
    return numbers2
}
console.log(doubledNumbers(numbers))


//10. FETCH

async function fetchData(url){
    let data =await fetch(url)
    return await response.json
}

fetchData().then((data) => data).catch(console.error)