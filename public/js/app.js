import { School } from './personLib.js';
import { PersonFactory } from './PersonFactory.js';

const school = new School(document.querySelector('.element'));

class Data {
    constructor(options) {
        this.options = {
            host: 'http://localhost:8080/api/',
            model: options.model, // данные к которым хотим преобразовать
            object: options.object
        }
    }

    query(query, options, params) {
        let url = new URL(this.options.host);
        url.pathname += query;
        for (let k in params) {
            url.searchParams.set(k, params[k]);
        }

        return fetch(url, options).then(
            response => response.json()
        );
    }


    read(id) {
        return this.query(
            `${this.options.object}/${id}`,
            {
                method: 'GET'
            }
        );
    }

    getAll() {
        return this.query(
            `${this.options.object}`,
            {
                method: 'GET'
            }
        );
    }

    create() {

    }

    delete() {

    }

    update() {

    }
}

let data = new Data({
    object: 'person',
})

data.getAll().then(personList => {
    personList.forEach((data) => {
        school.enroll(data.type, data);
    });

    school.mount(document.querySelector('#app'));
});


