
const header=document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',this.window.scrollY >0);
});

const navtoggle=document.querySelector('nav-toggle');
const links=document.querySelector('.links');

navtoggle.addEventListener('click',function(){
    links.classList.toggle('show-links')
    
}) 
