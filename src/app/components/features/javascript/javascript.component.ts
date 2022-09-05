import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  typeofVar = typeof('stringDodi');
  randomString = 'WebTechTalk';
  stringIncludes = this.randomString.includes('Tech');
  animals = ['cat', 'dog', 'cow'];
  animals2 = ['tiger', 'cat', 'dog', 'cow'];
  alphabet = ['A', 'B', 'D', 'F'];
  alphabet2 = ['A', 'B', 'C', 'D', 'F'];
  person = {
    firstName: 'Harry',
    lastName: 'Potter',
    age: 23,
  };
  personKeys: any;
  personValues: any;
  personEntries: any;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  spreadA = [1,2,3];
  spreadB = [4,5,6];
  spreadC = [...this.spreadA, ...this.spreadB];
  request = ['Please', 'do', 'subscribe'];
  obj1 = {name: 'John', age: 23};
  obj2 = {department: 'IT'};
  obj3: any;
  restArgs!: number;
  numbers = [1,2,3,4,5];
  templateLiteral = `This "string" has two types of 'quotation marks'`;
  res: number[] = [];
  people = [
    {
      firstName: 'Harry',
      lastName: 'Potter',
      age: 23
    },
    {
      firstName: 'Ron',
      lastName: 'Weasley',
      age: 27
    },
    {
      firstName: 'Hermione',
      lastName: 'Granger',
      age: 25
    }
  ];
  evenNums: number[] = [];
  olderPeople: any;
  totalSum = 0;
  minNumber = -500;

  constructor() { }

  ngOnInit(): void {
    this.animals.unshift('tiger');
    this.animals2.shift();
    this.alphabet.splice(2, 0, 'C');
    this.alphabet2.splice(4, 1, 'E');
    this.personKeys = Object.keys(this.person);
    this.personValues = Object.values(this.person);
    this.personEntries = Object.entries(this.person);
    console.log('for of iteration of array');
    for (let letter of this.alphabet) {
      console.log(letter);
    }
    console.log('for in iteration of object keys');
    for (let keys in this.person) {
      console.log(keys);
    }
    console.log('spread array string items into one string: ', ...this.request);
    this.obj3 = {...this.obj1, ...this.obj2};
    this.restArgs = this.addRestParam(8,2,6);
    // array destructuring, assigning array values to vars
    // var [a, b, c] = this.numbers;
    // var [a, , b, c] = this.numbers;
    var [a, b, ...c] = this.numbers;
    console.log(a, b, c);
    let {name, department} = this.obj3;
    console.log('object destructuring, take firstName and department from object: ', name, department);

    // map function
    this.res = this.numbers.map(item => Math.pow(item, 2));
    console.log('squares of numbers: ', this.res);
    this.people.map((person) => {
      console.log(person.firstName + ' ' + person.lastName);
    });

    // filter function
    this.evenNums = this.numbers.filter(num => num % 2 == 0);
    console.log('Even numbers with filter: ', this.evenNums);
    this.olderPeople = this.people.filter((person) => {
      return person.age > 23;
    });
    console.log('filter people age > 23: ', this.olderPeople);
    
    // reduce function
    this.totalSum = this.numbers.reduce((total, item) => {
      total += item;
      return total;
    });
    console.log('total Sum using Reduce: ', this.totalSum);
    
    this.minNumber = this.numbers.reduce((min, val) => {
      if(val < min) {
        min = val;
      }
      return min;
    });
    console.log('min Number using Reduce: ', this.minNumber);

  }

  // arrow function
  add(a: number, b: number) {
    return a + b;
  }

  adds = (a: number, b: number) => a + b;

  // rest operator
  addRestParam(...args: any[]) {
    let total = 0;
    for (let num of args) {
      total = total + num;
    }
    return total;
  }

}