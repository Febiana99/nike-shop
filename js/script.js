
const navbarNav=document.querySelector ('.navbar-nav')
document.querySelector('#gift').onclick=()=>{
    navbarNav.classList.toggle('active')
};
const gift=document.querySelector('#gift');
document.addEventListener('click', function(e)){
    if(!gift.contains(e.target)&& !navbarNav.contains(e.target))
        navbarNav.classList.remove('active');
}