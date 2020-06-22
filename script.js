let content = document.querySelector('.content');
let editButton = content.querySelector('.profile__edit-button');
let popUp = content.querySelector('.popup');
let saveButton = content.querySelector('.button-save');
let popUpClose = content.querySelector('.close_icon');
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');
let inputName = content.querySelector('.input__text_type_name');
let inputProfession = content.querySelector('.input__text_type_profession');

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
