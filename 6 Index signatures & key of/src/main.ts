class Coder {
  name: string;
  music: string;
  age: number;
  lang: string;

  constructor(name: string, music: string, lang: string, age: number) {
    this.name = name;
    this.lang = lang;
    this.music = music;
    this.age = age;
  }
}

// By default the visibility modifier is 'public', still we can explicitly write n it will also reduce our code as done below:
class Coder2 {
  secondLang!: string; // It means we know what we are doing n we r nt goin to intialize it anyway.

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript" // given a default value it. Moreover, default should shld always be at last.
  ) {
    this.name = name;
    this.lang = lang;
    this.music = music;
    this.age = age;
  }

  public getAge() {
    return `my age is ${this.age}`;
  }
}
const Harsh = new Coder2("Harsh", "Rock", 25);
console.log(Harsh.getAge());


class WebDev extends Coder2 {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `i write in ${this.lang} too`; // we can access the protected lang here bcz WebDev is subclass of Coder2
  }
}
const obj = new WebDev('Mac', 'Harsh', 25, 'Lofi');
console.log(obj.getLang());
console.log(obj.age);
console.log(obj.lang);

/////////////////////////////////////////////////////

interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}
class Guitarist implements Musician {
  name: string;
  instrument: string

  constructor(name: string, instrument: string){
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}` ;
  }
}
const obj1 = new Guitarist('Harsh', 'guitar');
console.log(obj1.play('strums'));

///////////////////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
const Harshh = new Peeps('Harsh');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);

///////////////////////////////////////
class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  } 

  public set data(value: string[]) {
    if(Array.isArray(value) && value.every(elem => typeof elem === 'string')){
      this.dataState = value;
      return;
    } else
        throw new Error('Param is not an array of strings');
  }
}
const MyBands = new Bands();
MyBands.data = ["dfg", 'fg', "Er"];
console.log(MyBands.data);
