const newPerson = person ();
console.log(person().getName());


class Person1 {
    constructor(name,job,age){
        this.name = name;
        this.job = job;
        this.age = age;
        this.busy = false;

    }

    exercise () {
        console.log(`is ${this.name} running? You need to go get them!!`);
    }

    job (){
        console.log(`${this.name} is a ${this.job}.`);

    }
}
class Programmer1 extends Person1 {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = [languages];
        this.busy=true;
    }

    comTask () {
        if(this.comTask.busy) { 
            this.busy= false;
            console.log(`${this.name} is no longer busy, please assign a new task `);

        }
    }
    newTask () {{
        if(this.newTask.busy) {
            console.log(`${this.name} is NOT busy, need more tasks!!`)
        } else 
        console.log ()
    }
    learnNewLanguage(language); {
        this.language.push(this.language); {
        console.log(` ${this.name} has learned a new language, ${this.language}!!`);
    }
};
    listLanguage(); { 
        console.log(`${this.name} knows ${this.language.toString()}`)
    }
}
};
