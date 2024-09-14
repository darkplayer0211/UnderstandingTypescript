/// Arrow function
const add = (a: number, b: number) => a + b;

/// Default parameters
const addWithDefault = (a: number, b: number = 10) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(add(2, 3));
printOutput(addWithDefault(5));

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', ev => console.log(ev));
}
