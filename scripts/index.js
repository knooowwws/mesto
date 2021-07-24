const editButton = document.querySelector('.profile__btn-edit');
const closeButton = document.querySelector('.popup__close');
const saveButton = document.querySelector('.popup__submit');
const modal = document.querySelector('.popup');
const nameInput = document.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_prof');
const profileName = document.querySelector('.profile__name').textContent;
const profileWork = document.querySelector('.profile__work-place').textContent;
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

closeButton.addEventListener('click', openModal);
editButton.addEventListener('click', openModal);
saveButton.addEventListener('click', changeProfile);


function openModal() {
    modal.classList.toggle('popup_opened')
    nameInput.value =  profileName
    jobInput.value =  profileWork;
}

function changeProfile(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__work-place').textContent = jobInput.value;
}