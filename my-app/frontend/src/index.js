import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { School } from './School.js';
import { Data } from './Data.js';

let persons = [];

// class Application extends React.Component {
//     render() {
//         return <School persons={persons} />;
//     }
// }

// ReactDOM.render(
//     <Application />,
//     document.getElementById('root')
// );

let data = new Data({
    object: 'person',
})

data.getAll().then(personList => { //почему работает getAll()
    persons.push(...personList);

    class Application extends React.Component {
        render() {
            return <School persons={persons} />;
        }
    }

    ReactDOM.render(
        <Application />,
        document.getElementById('root')
    );
});




