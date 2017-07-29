class Modal {
    constructor () {
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal';
        document.body.appendChild(this.modalContainer);

        const contentContainer = document.createElement('div');
        contentContainer.className = 'container';
        this.modalContainer.appendChild(contentContainer);

        const closeButton = document.createElement('button');
        closeButton.innerHTML = '&times;';
        closeButton.className = 'close-button';
        contentContainer.appendChild(closeButton);
        closeButton.addEventListener('click', this.close.bind(this));

        this.content = document.createElement('div');
        contentContainer.appendChild(this.content);
    }

    set html (value) {
        this.content.innerHTML = value;
    }

    open () {
        this.modalContainer.classList.add('open');
    }

    close () {
        this.modalContainer.classList.remove('open');
    }
}

let i = 0,
    m = new Modal();

document.getElementById('modal-trigger').addEventListener('click', () => {
    m.html = `You've opened this modal ${++i} times!`;
    m.open();
});
