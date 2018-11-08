var blockModal = document.getElementById("modal");
console.log(blockModal);
var btnLink = document.getElementById("btn-link");
console.log(btnLink);
btnLink.addEventListener('click', function () {
    blockModal.style.display = "block";
})