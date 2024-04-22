const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")

function handleClick(event){    
    if('click', biscoito1){
        
        screen1.classList.add("hide")
        screen2.classList.remove("hide")
    }
}

btnTry.addEventListener('click', function(){
    screen1.classList.remove("hide")
    screen2.classList.add("hide")
})