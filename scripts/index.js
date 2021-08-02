// CONST
// modalProfile
const editButton = document.querySelector('.profile__btn-edit');
const closeButtonProfile = document.querySelector('.popup__close_profile');
const saveProfileButton = document.querySelector('.popup__submit_profile');
const modalProfile = document.querySelector('.popup_profile');
const nameInput = document.querySelector('.form__input_name');
const jobInput = document.querySelector('.form__input_profile');
const profileName = document.querySelector('.profile__name').textContent;
const profileWork = document.querySelector('.profile__work-place').textContent;
// sixCards
const cardsList = document.querySelector('.cards');
const cardTemplate = document.querySelector('.card').content;
const initialCards = [
    {
        name: 'Bali',
        link: 'https://images.unsplash.com/photo-1599459657946-43a884745e2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8JUQwJUIxJUQwJUIwJUQwJUJCJUQwJUI4fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
    },
    {
        name: 'Pattaya',
        link: 'https://images.unsplash.com/photo-1599851245208-c1e43c053710?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0dGF5YXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
    },
    {
        name: 'Астрахань',
        link: 'https://images.unsplash.com/photo-1598005532665-fe6b80edba55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1866&q=80'
    },
    {
        name: 'Dagestan',
        link: 'https://images.unsplash.com/photo-1617911478288-ac9559802681?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFnZXN0YW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
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
const trashCard = document.querySelector('.cards__trash')
// modalMesto
const modalMesto = document.querySelector('.popup_mesto');
const addButton = document.querySelector('.profile__btn-add');
const closeButtonMesto = document.querySelector('.popup__close_mesto');
const saveMestoButton = document.querySelector('.popup__submit_mesto');


// FUNCTIONS
closeButtonProfile.addEventListener('click', openCloseModalProfile);
editButton.addEventListener('click', openCloseModalProfile);
saveProfileButton.addEventListener('click', changeProfile);

// trashCard.addEventListener('click', deleteCard);

addButton.addEventListener('click', openCloseModalMesto);
closeButtonMesto.addEventListener('click', openCloseModalMesto);
saveMestoButton.addEventListener('click', addCard)
saveMestoButton.addEventListener('click', openCloseModalMesto)

function openCloseModalProfile() {
    nameInput.value =  profileName;
    jobInput.value =  profileWork;
    modalProfile.classList.toggle('popup_opened')
}
function changeProfile(evt) {
    evt.preventDefault();
    document.querySelector('.profile__name').textContent = nameInput.value;
    document.querySelector('.profile__work-place').textContent = jobInput.value;
}


function openCloseModalMesto() {
    modalMesto.classList.toggle('popup_opened');
}

function openModalPhoto (i) {
    i.classList.toggle('popup_opened');

}

function addCard (evt) {
    evt.preventDefault();
    let placeName = modalMesto.querySelector('.form__input_location').value;
    let placeUrl = modalMesto.querySelector('.form__input_url').value;
    const card = cardTemplate.cloneNode(true);

    card.querySelector('.cards__img').src = placeUrl;
    card.querySelector('.cards__name').textContent = placeName;
    card.querySelector('.cards__btn').addEventListener('click', (evt) => {
        evt.target.classList.toggle('cards__btn_like');
        console.log(evt.target)
    })
    card.querySelector('.cards__trash').addEventListener('click', (evt) => {
        evt.target.closest('.cards__item').remove();
    })

    cardsList.prepend(card);
}



function sixCards () {
    initialCards.forEach( item => {
        const card = cardTemplate.cloneNode(true);
        card.querySelector('.cards__img').src = item.link;
        card.querySelector('.cards__name').textContent = item.name;
        card.querySelector('.cards__btn').addEventListener('click', (evt) => {
            evt.target.classList.toggle('cards__btn_like');
            console.log(evt.target)
        })

        card.querySelector('.cards__trash').addEventListener('click', (evt) => {
            evt.target.closest('.cards__item').remove();
        })

        cardsList.append(card);
    })
}
sixCards();
