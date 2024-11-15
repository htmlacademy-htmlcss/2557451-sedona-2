const searchLink = document.querySelector('.booking-link');  
const modal = document.querySelector('.modal-container');  
const closeButton = document.querySelector('.modal-close-button');

searchLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-hidden');
});

closeButton.addEventListener('click', () => {
    modal.classList.add('modal-hidden');
});

modal.addEventListener('click', (evt) => {
    if (evt.target === modal) {
        modal.classList.add('modal-hidden');
    }
});

