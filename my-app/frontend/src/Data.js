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

export { Data };
