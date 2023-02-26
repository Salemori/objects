// Answer to question 1.
function InstagramPost(authorHandle, content, imageLink, numberOfViews, numberOfLikes){
    this.authorHandle = authorHandle; 
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
}

// Answer to question 2.
const igPostOne = new InstagramPost("@bolatito007", "My set-back is a set-up for my get-up", "https://www.instagram.com/p/Co7X6YPoHQH/", "7000", "10000");
const igPostTwo = new InstagramPost("@temilade4real", "A new day of bliss. Found my peace.", "https://www.instagram.com/p/Po9X8YPoHQ/", "2000", "6000");
console.log(igPostOne);
console.log(igPostTwo);

// Answer to question 3A.
function createPerson(name, age, location){
    return{
        name: name,
        age: age,
        location: location,
    }
}
const personMusa = createPerson('Musa', '19', 'Lekki, Lagos State');
console.log(personMusa);

// Answer to question 3B.
function createJambScores(eng, govt, lit, crk){
    return{
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    }
}

const musaJambScore = createJambScores(89, 97, 70, 90);
console.log(musaJambScore);

personMusa.jambScores = musaJambScore;
console.log({personMusa});

// Answer to question 4.
/* 
*The object 'house' will be cloned using the different method listed below:
* JSON parsing
* structuredClone() function
* Object.assign() function
* spread operator
* 'for in' loop 
*/
const house = new Object();
house.type = 'Bungalow';
house.floor = '1';
house.numberOfRoom = '3';
house.roofType = 'Aluminium';
house.color = 'White';

console.log({house});

//I. Cloning object Using JSON parsing.
const cloneHouseTwo = JSON.parse(JSON.stringify(house))
console.log({cloneHouseTwo});

//II. Cloning object Using the structuredClone() function.
const cloneHouseThree = structuredClone(house);
console.log({cloneHouseThree});
// cloneHouseThree.landArea ="18 x 20";
//console.log({cloneHouseThree});

//II. Cloning object calling the Object.assign() function.
const cloneHouseFour = Object.assign({}, house);
console.log({cloneHouseFour});

//IV. Cloning object Using the spread operator.
const houseFive = {...cloneHouseThree};
console.log({houseFive});

//V. Cloning object Using the 'For in' loop.
const houseSix = {};
for (let index in house){
    houseSix[index] = house[index];
}
console.log({houseSix})


