let display = document.querySelector('#display');
let resultDisplay = document.querySelector('.result');
let latestButtonDisplay = document.querySelector('.latestClickedButton');
let buttons = Array.from(document.querySelectorAll('.button'));

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		latestButtonDisplay.innerText = `You selected: ${e.target.innerText}`;
		switch (e.target.innerText) {
			case 'C':
				display.innerText = ' ';
				resultDisplay.innerText = 'Result:';
				break;
			case '←':
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
				}
				break;
			case '=':
				try {
					display.innerText = eval(display.innerText)
					resultDisplay.innerText = `Result: ${display.innerText}`;
				} catch {
					display.innerText = 'Error!';
					resultDisplay.innerText = 'Result: Error!';
				}
				break;
			default:
				display.innerText += e.target.innerText
		}
	});
});