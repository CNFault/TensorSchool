class Component {
    'use strict';

    constructor() {
        this.container = undefined;
    }


    render() {
        return `<div></div>`;
    }

    mount(container) {
        const newComponent = document.createElement('div');
        newComponent.innerHTML = this.render();
        this.container = newComponent.firstElementChild;

        container.insertAdjacentElement('beforeend', newComponent.firstElementChild);
        newComponent.remove();
        this.afterMount();
    }


    unmount() {
        this.beforeUnmount();
        this.removeContainer();
        this.afterUnmount();
    }

    removeContainer() {
        if (this.container) {
            this.container.remove();
            this.container = undefined;
        }
    }

    afterMount() { }
}

export default Component;
