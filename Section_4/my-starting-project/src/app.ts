const hobbies = ['Sport', 'Gaming'];
const activeHobbies = ['Trekking', ...hobbies];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    firstName: 'Tri',
    age: 25,
}

/// Spread operator 
// const copiedPerson = person; --> Shallow copy
const copiedPerson = { ...person }; // --> Deep copy

console.log(copiedPerson);


/// Rest parameteres
const add = (...numbers: number[]) => {
    // Old practice
    // let result = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     result += numbers[i];
    // }
    
    // return result;
     
    return numbers.reduce( (curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const sub = (...numbers: [number, number, number]) => {
    return numbers.reduce( (curResult, curValue) => {
        return curResult - curValue;
    }, 0);
}

const addedNumbers = add(2, 3, 7, 9.5);
console.log(addedNumbers);

const subbedNumbers = sub(2, 3, 7);
console.log(subbedNumbers);

/// Array destructure
console.log(activeHobbies);
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(activeHobbies, hobby1, hobby2, remainingHobbies);

/// Object destructure
const { firstName: userName, age} = person;
console.log(userName, age, person);