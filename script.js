let secretnumber = Math.round((Math.random() * 9) + 1);
let inputnumber ;
let attempts = 3;

function Game(){
    inputnumber = document.querySelector("input").value
    if(attempts > 0){
    if(secretnumber === inputnumber){
        document.querySelector(".hint").innerHTML = "Вы победили!"
        document.querySelector("input").value = ""
    }  
    else if(secretnumber < inputnumber){
        document.querySelector(".hint").innerHTML = "Моё число меньше!"
        document.querySelector("input").value = ""
        Attempts()
    } 
    else if(secretnumber > inputnumber){
        document.querySelector(".hint").innerHTML = "Моё число больше!"
        document.querySelector("input").value = ""
        Attempts()
    } 
}
}

function Restart(){
    document.querySelector("input").value = ""
    attempts = 3 
    secretnumber = Math.round((Math.random() * 9) + 1);
    document.querySelector(".hint").innerHTML = ""
    document.querySelector(".attempts").innerHTML = ""
}

function Attempts(){
    attempts--;
    document.querySelector(".attempts").innerHTML = "У Вас отсталось " + attempts + " попыток"
        if(attempts === 0){
            document.querySelector(".attempts").innerHTML = "У Вас не отсталось попыток"
            document.querySelector(".hint").innerHTML = "Вы проиграли!"
        }

}
document.querySelector(".check").addEventListener("click",Game)
document.querySelector(".restart").addEventListener("click",Restart)
