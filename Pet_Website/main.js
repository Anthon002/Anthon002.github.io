let nav=document.getElementById('nav')
let menu=document.getElementById('menu')
let words=document.getElementById('words')

window.onscroll=function(){
    if (window.pageYOffset > menu.offsetTop + 100)
    {
        nav.classList.add("sticky")
    }
    else
    {
        nav.classList.remove("sticky")
    }
}
//Dropdown

