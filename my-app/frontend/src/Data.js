export default class Data {
    constructor(options) {
        this.options = {
            host: 'http://localhost:8080/api/',
            model: options.model, // данные к которым хотим преобразовать
            object: options.object
        }
    }

    static create (...args) {
        return new Data(...args)
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

    update(person) {
        return this.query(
            `${this.options.object}/${person.id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            }
        );
    }
}