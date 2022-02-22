//For the DOM
function create_element_message(id, message) {
	const newElement = document.createElement('span');
	const newContent = document.createTextNode(message);
	newElement.appendChild(newContent);
	newElement.classList.add('message');
	const referenceElement = document.getElementById(id);
	referenceElement.append(newElement);
}

function display_message() {
	const {house, pet, subject, quote} = create_message();
	let removeElement = document.querySelectorAll('.message');
	console.log(removeElement.length);

	if (removeElement.length !== 0) {
		for (let i = 0; i < removeElement.length; i++) {
			removeElement[i].remove();
		}
	}

  create_element_message('house', house);
	create_element_message('pet', pet);
	create_element_message('subject', subject);
	create_element_message('quote', quote);
}

//Generating messages
function createRandomNum(arr) {
	return Math.floor(Math.random() * arr.length);
}

function create_message() {
	const	hogwarts_houses = ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff'];
  const pets = ['Cat', 'Owl', 'Phoenix', 'Hippogriff', 'Dragon', 'Toad'];
  const subjects = ['Herbology', 'Defense Against The Dark Arts', 'Charms', 'Divination', 'Transfiguration', 'Astronomy', 'Potions', 'Flying Lessons'];
  const quotes = ['"Do not pity the dead, Harry. Pity the living, and, above all those who live without love." – Albus Dumbledore', '"It is impossible to manufacture or imitate love." – Horace Slughorn', '"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends." – Albus Dumbledore', '"Books! And cleverness! There are more important things — friendship and bravery." – Hermione Granger', '"It does not do to dwell on dreams and forget to live." – Albus Dumbledore', '"Every human life is worth the same, and worth saving." — Kingsley Shacklebolt', '"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals." – Sirius Black', '"When in doubt, go to the library." – Ron Weasley', '"We must unite inside [Hogwarts] / Or we’ll crumble from within / I have told you, I have warned you… / Let the Sorting now begin." — The Sorting Hat', '"Anything’s possible if you’ve got enough nerve." — Ginny Weasley', '"CONSTANT VIGILANCE!" — Barty Crouch, Jr'];

	const houseNum = createRandomNum(hogwarts_houses);
	const petNum = createRandomNum(pets);
	const subjectNum = createRandomNum(subjects);
	const quoteNum = createRandomNum(quotes);

	const house = hogwarts_houses[houseNum];
	const pet = pets[petNum];
	const subject = subjects[subjectNum];
	const quote = quotes[quoteNum];

	return {
		house,
		pet,
		subject,
		quote
	}     
}