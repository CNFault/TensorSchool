import { PersonFactory } from './PersonFactory.js';
import Component from './Component.js';

export class School extends Component {
    constructor(mountElement) {
        super();
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

    render() {
        return `<div>
                    <div id="wraper">
                        <header>
                            <div class="title">
                                <img class="logo" title="Логотип компании Тензор" src="img/logo.jpg" alt="Логотип компании Тензор" />
                                <span title="Школа программирования Тензор">Tensor School</span>
                                <p title="Это страница школы Тензор">
                                    Это страница школы Тензор в городе Уфа. Тут вы можете познакомиться с нашими учениками и посмотреть
                                    темы занятий.</p>
                            </div>
                        </header>
                    </div>
                    <div class="element"></div>
                </div>`
    }

    mount(container) {
        super.mount(container);
        const mountPoint = this.container.querySelector('.element');
        this.persons.forEach(person => person.mount(mountPoint));
    }
}