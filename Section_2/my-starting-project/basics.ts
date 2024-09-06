function add(num1: number, num2: number, showFlag: boolean, resultPhrase: string) {
	const result = num1 + num2;

	if(showFlag) {
		console.log(resultPhrase + result);
	}
	else {
		return num1 + num2;
	}
}

let  number1: number;
number1 = 5;

const number2 = 8;

const isPrint = true;

let showPhrase = 'Result is: ';

add(number1, number2, isPrint, showPhrase);
