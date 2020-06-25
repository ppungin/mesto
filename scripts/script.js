const content = document.querySelector('.root');
const editButton = content.querySelector('.profile__button_edit');
const popUp = content.querySelector('.popup');
const saveButton = content.querySelector('.popup__button-save');
const closeIcon = content.querySelector('.popup__close');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');
const inputName = content.querySelector('.popup__input_name');
const inputProfession = content.querySelector('.popup__input_profession');
let form = content.querySelector('.popup__container');


function popUpOpen() {
    popUp.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}

function popUpClose(){
    popUp.classList.remove('popup_opened');
}

function formSubmitHandler(event){
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    popUpClose();
}

editButton.addEventListener('click', popUpOpen);
form.addEventListener('submit', formSubmitHandler);
closeIcon.addEventListener('click', popUpClose);
