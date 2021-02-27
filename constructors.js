function Person (name, age, pronouns){
    this.name = name;
    this.pronouns = pronouns;
    this.age = age;
    this.increaseAge=function(){
        return ++this.age;
    };
}

let person01 = new Person("Juliette", 22, "she/her");
let person02 = new Person("Abbey", 22, "she/her");
let person03 = new Person("Mike", 25, "he/him");
let person04 = new Person("Jay", 23, "they/them");
console.log(person01.increaseAge());
console.log(person02.increaseAge());