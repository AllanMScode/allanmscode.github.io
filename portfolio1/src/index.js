const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleButton)





// const navShape = document.getElementById('hamburger');
// const navId = document.getElementById('nav-id');

// function toggleButton() {
//     navId.classList.toggle('show')
// }

// navShape.addEventListener('click', toggleButton)