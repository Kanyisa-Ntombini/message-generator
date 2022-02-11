function create_message() {
    return {
        _hogwarts_houses: ['Slytherin', 'Gryffindor', 'Ravenclaw', 'Hufflepuff'],
        _pets: ['cat', 'owl', 'phoenix', 'hippogriffs', 'dragon', 'toad'],
        _subjects: ['Herbology', 'Defense Against The Dark Arts', 'Charms', 'Divination', 'Transfiguration', 'Astronomy', 'Potions', 'Flying Lessons'],
        _quotes: ['“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.”– Albus Dumbledore, Harry Potter and the Deathly Hallows, Chapter 35', '“It is impossible to manufacture or imitate love”.– Horace Slughorn, Harry Potter and the Half-Blood Prince, Chapter 9', '“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”– Albus Dumbledore, Harry Potter and the Sorcerer’s Stone, Chapter 17', '“Books! And cleverness! There are more important things — friendship and bravery.– Hermione Granger, Harry Potter and the Sorcerer’s Stone, Chapter 16', '“It does not do to dwell on dreams and forget to live.” – Albus Dumbledore, Harry Potter and the Sorcerer’s Stone, Chapter 12', '“Every human life is worth the same, and worth saving.” — Kingsley Shacklebolt, Harry Potter and the Deathly Hallows, Chapter 22', '“‘The thing about growing up with Fred and George,’ said Ginny thoughtfully, ‘is that you sort of start thinking anything’s possible if you’ve got enough nerve.’” – Ginny Weasley, Harry Potter and the Order of the Phoenix, Chapter 29'],

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

            console.log(`You are in ${house}`);
            console.log(`Your pet is a ${pet}`);
            console.log(`Your favourite subject is ${subject}`);
            console.log(quote);

            return '';
        }
    }
}

let message1 = create_message();
console.log(message1.message());