function countUsingWhile() {
	let input1 = document.getElementById('task1').value;
	if (input1 <= 0) {
		let msg = document.getElementById('message');
		msg.innerHTML = 'Value not Valid'
	}
	else {
		while (input1 !== 0) {
			alert(input1);
			input1--;
		}
	}
}

function countUsingDoWhile() {
	let number = document.getElementById('task2').value;
	if (number <= 0) {
		let displayText = document.getElementById('info');
		displayText.innerHTML = 'The number is not valid.';
	}
	else {
		let indexStart = 1;
		let displayText = document.getElementById('info');
		displayText.innerHTML = `${number} is valid`;
		do {
		alert(indexStart);
		indexStart++;
	}   
		while (indexStart <= number);
		
	}
}

// Section for For Loops

function countUsingForLoops() {
	let userInput = document.getElementById('task3').value;
	let response = document.getElementById('response');

	if (userInput <= 0) {
		response.innerHTML = "Invalid Number";
	}
	else {
		for (let i=0; i  <= userInput; i++) {
			response.innerHTML = "Nice Number";
			alert(i);
		}
	}

}

function accessElementsInString() {
	let user = document.getElementById('userName').value;
	let textDisplay = document.getElementById('name-length');
	if (user !=='') {
		textDisplay.innerHTML = `The string is ${user.length} characters long.`;
		for (let i=0;  i < user.length; i++) {
			console.log(user[i]);
		}
	}
	else {
		alert("Invalid value")
	}
}

