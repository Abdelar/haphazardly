const button = document.getElementById('generate');

button.addEventListener('click', generateRandomNumber);

generateRandomNumber();

async function generateRandomNumber() {
	try {
		const p = document.getElementById('answer');
		p.style.opacity = 0.5;
		const min = +document.getElementById('min').value;
		const max = +document.getElementById('max').value;
		const result = await fetch(
			'https://www.random.org/integers/?num=1&min=' +
				min +
				'&max=' +
				max +
				'&col=1&base=10&format=plain&rnd=new'
		);
		const randomNumber = await result.json();
		p.innerText = randomNumber;
		p.style.opacity = 1;
	} catch (error) {
		console.log(error);
	}
}
