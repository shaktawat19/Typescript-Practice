"use strict";
class Coder {
    constructor(name, music, lang, age) {
        this.name = name;
        this.lang = lang;
        this.music = music;
        this.age = age;
    }
}
// By default the visibility modifier is 'public', still we can explicitly write n it will also reduce our code as done below:
class Coder2 {
    constructor(name, music, age, lang = "Typescript" // given a default value it. Moreover, default should shld always be at last.
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.lang = lang;
        this.music = music;
        this.age = age;
    }
    getAge() {
        return `my age is ${this.age}`;
    }
}
const Harsh = new Coder2("Harsh", "Rock", 25);
console.log(Harsh.getAge());
class WebDev extends Coder2 {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `i write in ${this.lang} too`; // we can access the protected lang here bcz WebDev is subclass of Coder2
    }
}
const obj = new WebDev('Mac', 'Harsh', 25, 'Lofi');
console.log(obj.getLang());
console.log(obj.age);
console.log(obj.lang);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const obj1 = new Guitarist('Harsh', 'guitar');
console.log(obj1.play('strums'));
///////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Harshh = new Peeps('Harsh');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
///////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(elem => typeof elem === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ["dfg", 'fg', "Er"];
console.log(MyBands.data);
