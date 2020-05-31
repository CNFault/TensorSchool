import Component from '../js/Component.js';
import { PersonFactory } from '../js/PersonFactory.js';





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

    describe("Тест класса Person ", function () {

        it('Тест класса Person', function () {
            // arrange
            let props = {};

            // act
            let pf = new PersonFactory({ props });

            //assert
            assert(pf instanceof PersonFactory);
        });
    });
});

mocha.run();
