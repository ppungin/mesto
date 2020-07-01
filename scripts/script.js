const content = document.querySelector('.root');
const editButton = content.querySelector('.profile__button-edit');
const popUp = content.querySelector('.popup');
const saveButton = content.querySelector('.popup__button-save');
const closeIcon = content.querySelector('.popup__close');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');
const inputName = content.querySelector('.popup__input_name');
const inputProfession = content.querySelector('.popup__input-profession');
const form = content.querySelector('.popup__form');


function togglePopUp() {
    if (popUp.classList.contains('popup_opened') === true){
        popUp.classList.toggle('popup_opened');
    } else {
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
    popUp.classList.toggle('popup_opened');
    }
}

function formSubmitHandler(event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    togglePopUp();
}

editButton.addEventListener('click', togglePopUp);
form.addEventListener('submit', formSubmitHandler);
closeIcon.addEventListener('click', togglePopUp);
