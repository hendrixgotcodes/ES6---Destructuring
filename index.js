//DESTRUCTURING ARRAYS
let anArray = ["Kofi", "Ama", "Kwaku", "Efo"];

let [person1, person2, person3, person4] = anArray;
console.log(`${person1} \t ${person2} \t ${person3} \t ${person4}`);


//Variables can be given default values incase the array returns an undefined
let [p1, p2, p3, p4, p5="Mr. Nobody"] = anArray;
console.log(`${p1} \t ${p2} \t ${p3} \t ${p4} \t ${p5}`);

/*********************************************************************************************************** */

//Assigning variables with returned array from a function
function someFunction(){
    return [1,2,9,5];
}

let [num1,num2,num3,num4] = someFunction();
console.log(`${num1} \t ${num2} \t ${num3} \t ${num4}`);

/*********************************************************************************************************** */

//Parsing the rest of returned values to one variable
let [n1, n2, ...etc] = someFunction();
console.log(`${n1} \t ${n2} \t ${etc}`);

/*********************************************************************************************************** */

//Ignoring  some returned values
 [num1,num2,,num4] = someFunction();  //Notice how a space was left
console.log(`${num1} \t ${num2} \t ${num4}`);


/*********************************************************************************************************** */



//OBJECT DESTRUCTING
const book = {
    title: "Eloquent JavaScript",
    author: "Marijin Haverbeke",
    pages: 227,
    rating: "4.5/5",
    printInfo: function(){
        console.log(`title  author  pages  rating`)
    }
}

let {title, author, pages, rating, printInfo} = book;
console.log(`${title} \t ${author} \t ${pages} \t ${rating}`);

printInfo();