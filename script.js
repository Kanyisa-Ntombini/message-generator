function create_message() {
    return {
        _hogwarts_houses: ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff'],
        _pets: ['cat', 'owl', 'phoenix', 'hippogriff', 'dragon', 'toad'],
        _subjects: ['Herbology', 'Defense Against The Dark Arts', 'Charms', 'Divination', 'Transfiguration', 'Astronomy', 'Potions', 'Flying Lessons'],
        _quotes: ['"Do not pity the dead, Harry. Pity the living, and, above all those who live without love." – Albus Dumbledore', '"It is impossible to manufacture or imitate love." – Horace Slughorn', '"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends." – Albus Dumbledore', '"Books! And cleverness! There are more important things — friendship and bravery." – Hermione Granger', '"It does not do to dwell on dreams and forget to live." – Albus Dumbledore', '"Every human life is worth the same, and worth saving." — Kingsley Shacklebolt', '"If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals." – Sirius Black', '"When in doubt, go to the library." – Ron Weasley', '"We must unite inside [Hogwarts] / Or we’ll crumble from within / I have told you, I have warned you… / Let the Sorting now begin." — The Sorting Hat', '"Anything’s possible if you’ve got enough nerve." — Ginny Weasley', '"CONSTANT VIGILANCE!" — Barty Crouch, Jr'],

        //getters
        get hogwarts_houses() {
            return this._hogwarts_houses;
        },
        get pets() {
            return this._pets;
        },
        get subjects() {
            return this._subjects;
        },
        get quotes() {
            return this._quotes;
        },

        createRandomNum(arr) {
            return Math.floor(Math.random() * arr.length);
        },

        message() {
            let houseNum = this.createRandomNum(this.hogwarts_houses);
            let petNum = this.createRandomNum(this.pets);
            let subjectNum = this.createRandomNum(this.subjects);
            let quoteNum = this.createRandomNum(this.quotes);

            let house = this.hogwarts_houses[houseNum];
            let pet = this.pets[petNum];
            let subject = this.subjects[subjectNum];
            let quote = this.quotes[quoteNum];

            console.log(`Congratulations! You are in ${house} house.`);

            if (pet[0] === 'a' || pet[0] === 'e' || pet[0] === 'i' || pet[0] === 'o' || pet[0] === 'u') {
                console.log(`Your pet is an ${pet}.`);
            } else {
                console.log(`Your pet is a ${pet}`);
            }
            
            console.log(`Your favourite subject is ${subject}.`);
            console.log('A quote to live by:')
            console.log(quote);

            return '';
        }
    }
}

let message1 = create_message();
console.log(message1.message());