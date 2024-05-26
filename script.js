const bar= document.getElementById('bar');
const nav= document.getElementById('navbar');
if(bar){
    bar.addEventListener('Click', () =>{
        nav.classList.add('active')
    })
}
