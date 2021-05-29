let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');

let editForm = document.querySelector('.edit-form');
let inputName = editForm.querySelector('#profile-name');
let inputCaption = editForm.querySelector('#profile-description');

let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileName = profile.querySelector('.profile__name');
let profileCaption = profile.querySelector('.profile__description');

function openPopup() {
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
  popup.classList.add('popup_opened');
  inputName.focus();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function saveForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileCaption.textContent = inputCaption.value;
  closePopup();
}


profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
editForm.addEventListener('submit', saveForm);
