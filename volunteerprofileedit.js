let profileMenu = document.getElementById("profileMenu");

function toggleProfileMenu() {
    profileMenu.classList.toggle("open-profile-menu");
}

let profileImg = document.getElementById("profile-img");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
    profileImg.src = URL.createObjectURL(inputFile.files[0]);
}

function showModal() {
    let modal = document.querySelector(".modal");
    modal.classList.add(`modal-active`);
}

function closeModal() {
    let modal = document.querySelector(".modal");
    modal.classList.remove(`modal-active`);
}

let openModal = document.querySelectorAll(".open-modal");
for (let open of openModal) {
    open.addEventListener(`click`, showModal);
}