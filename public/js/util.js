const openCard = (student) => {
    const popup = document.querySelector('.popup');
    const content = document.querySelector('.content');
    content.innerHTML = `<div><img class="minImg" src=".${student.photoUrl}" alt="Аватар" title="Аватар" 
    /></div><p> ${student.status} </p><span title="Возраст">${student.age} лет</span>`;
    popup.style.display = 'block';

    const close = document.querySelector('.close');
    close.addEventListener('click', (event) => {
        popup.style.display = 'none';
    });
}

export { openCard };