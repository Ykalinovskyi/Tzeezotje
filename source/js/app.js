const modalContainer = document.querySelector('.modal-container')
const modalSendBtn = document.querySelector('.modal--form-button')

//AJAX
let xhttp = new XMLHttpRequest();

xhttp.onReadyStateChange = function() {
    if(this.readyState == 4 && this.status == 200) {
        sendFormData(his.responseText)
    }
}

xhttp.open('POST', "../index.php", true)
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

function sendFormData(data) {
    console.log('POST')
    console.log(data)
}

const heroBtn = document.querySelector('.hero--button').addEventListener('click', function (e) {
    e.preventDefault();
    modalContainer.classList.remove('modal-container-close');
    modalFunction();
})

function modalFunction() {
    const mdc = document.querySelector('.modal-container')
    const modalCloseBtn = document.querySelector('.modal--close-button');
    document.addEventListener('click', function(e) {
        if(e.target == mdc || e.target == modalCloseBtn) {
            modalContainer.classList.add('modal-container-close');
            document.removeEventListener('click');
        }
    })
}

modalSendBtn.addEventListener('click', function() {
    xhttp.send()
});



//Burger menu
const burger = document.querySelector('.burger');
const navList = document.querySelector('.navigation--list')


window.onresize = checkedMenu;

burger.addEventListener('click', () => {
    navList.classList.toggle('open')
    
    if(navList.classList.contains('open')) {
        burger.classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
    }else {
        burger.classList.remove('show');
        document.querySelector('body').style.overflow = '';
    }
 });

 navList.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == navList) {
        navList.classList.remove('open')
        burger.classList.remove('show');
        document.querySelector('body').style.overflow = '';
    }
 })

function checkedMenu() {
    let clientWidth = document.documentElement.clientWidth;
    if(clientWidth >= 768 && navList.classList.contains('open') ) {
        navList.classList.remove('open');    
        burger.classList.remove('show');
        document.querySelector('body').style.overflow = '';
    }
};