const content = document.querySelector('.content');
const editButton = content.querySelector('.profile__edit-button');
const popUp = content.querySelector('.popup');
const saveButton = content.querySelector('.popup__button-save');
const popUpClose = content.querySelector('.popup__close');
const profileName = content.querySelector('.profile__name');
const profileProfession = content.querySelector('.profile__profession');
const inputName = content.querySelector('.input__text_type_name');
const inputProfession = content.querySelector('.input__text_type_profession');

function editProfile() {
    popUp.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputProfession.value = profileProfession.textContent;
}


function saveProfile(){
    profileName.textContent = inputName.value;
    profileProfession.textContent = inputProfession.value;
    inputName.setAttribute('placeholder', inputName.value);
    inputProfession.setAttribute('placeholder', inputProfession.value);
    popUp.classList.remove('popup_opened');
}

function closePopUp(){
    popUp.classList.remove('popup_opened');
}


editButton.addEventListener('click', editProfile);
saveButton.addEventListener('click', saveProfile);
popUpClose.addEventListener('click', closePopUp);
