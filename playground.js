    class Person {
        constructor(name = 'Anonymous', age = 0) {
            this.name = name;
            this.age = age;
        }
        getGreeting() {
            return `Hi! I am ${this.name}.`;
        }
        getPersonDescription() {
            return `${this.name} is ${this.age} year(s) old.`
        }
    }

    class Programmer extends Person {
        constructor(name, age, preferredLanguage = 'assembly') {
            super(name, age);
            this.preferredLanguage = preferredLanguage;
        }
        getGreeting() {
            return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developer.`;
        }
    }

    let me = new Person('Mike',45);
    console.log(me.getPersonDescription());

    let newGuy = new Programmer('Ryan',27,'Python');
    console.log(newGuy.getGreeting());