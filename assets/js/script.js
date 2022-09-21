// Tab Navigation function
var imageList = document.querySelectorAll('.image-list');
var navList = document.querySelectorAll('.nav-list');


navList.forEach(function Iterate(navLink , imageIndex) {
  navLink.addEventListener('click',function ShowImage() {
    var activeImage = document.querySelector('.active-list');
    var activeLink = document.querySelector('.nav-list-active');
    activeLink.classList.remove('nav-list-active');
    activeImage.classList.remove('active-list');  
    navLink.classList.add('nav-list-active');
    imageList[imageIndex].classList.add('active-list');
  })
})























