import Component from '../js/Component.js';
import { PersonFactory } from '../js/PersonFactory.js';
import { Person } from '../js/Person.js';
import { Teacher } from '../js/Teacher.js';
import { Student } from '../js/Student.js';






describe("Тест", function () {
    'use strict';

    describe("Тест базового компонента", function () {

        it('Component', function () {
            // arrange
            let options = {};

            // act
            const comp = new Component(options);

            //assert
            assert(comp instanceof Component);
        });

        it('Рендер возвращает пустой блок "div"', function () {
            // arrange
            const comp = new Component({});

            // act
            let render = comp.render();

            //assert
            assert.equal(render, '<div></div>');
        });

        it('removeContainer возвращает Undefined', function () {
            // arrange
            const comp = new Component({});

            // act
            let removeContainer = comp.removeContainer();

            //assert
            assert.equal(removeContainer, undefined);
        });
    });

    describe("Тест класса PersonFactory ", function () {

        it('Тест класса PersonFactory', function () {
            // arrange
            let props = {};

            // act
            let pf = new PersonFactory({ props });
            const student = pf.create('Студент');
            const teacher = pf.create('Преподаватель');
            const person = pf.create('');



            //assert
            assert(pf instanceof PersonFactory);
            assert(student instanceof Student);
            assert(teacher instanceof Teacher);
            assert(person instanceof Person);
        });
    });
});

mocha.run();
