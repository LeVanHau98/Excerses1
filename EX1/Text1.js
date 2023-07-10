const searchBtn = document.querySelector('.search-btn');
const container = document.querySelector('.container');


searchBtn.addEventListener('click', function() {
    console.log(this)
    this.parentElement.classList.toggle('show');
})