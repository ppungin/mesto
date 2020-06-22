let content = document.querySelector('.content');
let profile = content.querySelector('profile');
let editButton = content.querySelector('edit_button');
let popUp = content.querySelector('.pop-up');
let saveButton = content.querySelector('.button-save');

function editProfile() {
    popUp.classList.add('pop-up_active');
}


function saveProfile(){
    popUp.classList.remove('pop-up_active');
}


editButton.addEventListener('click', editProfile);
saveButton.addEventListener('click'), saveProfile); 
