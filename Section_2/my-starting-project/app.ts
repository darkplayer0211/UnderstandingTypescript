let userInput: unknown;
let userName: string;


userInput = 25;
userInput = 'Tri';

if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

const result = generateError('Page not found!', 404); // CRASH - BREAK THE SCRIPT FROM THIS LINE
console.log('Hi');