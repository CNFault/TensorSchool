class School {
    constructor(mountElement) {
        this.mountElement = mountElement;
        this.persons = [];
        this.pf = new PersonFactory;
    }
    enroll(type, ...args) {
        const person = this.pf.create(type, ...args);
        this.persons.push(person);
    }
    dismiss(person) {
        const index = this.persons.indexOf(person);
        this.persons.splice(index, 1);
    }
    search(name) {
        return this.persons.filter(person => person.name === name);
    }
    mount() {
        this.persons.forEach((person) => {
            person.mount(this.mountElement);
        });
    }
}