var body = document.querySelector("body")
var mode = document.querySelector(".mode")
var ball = document.querySelector('#ball')

ball.addEventListener('click',changeTheme)

var leftside = true
function changeTheme(){
    if(leftside){
        ball.style.left = "40px"
        leftside = false
        ball.style.backgroundColor = "#111"
        mode.style.backgroundColor = "#fff"
        body.style.backgroundColor = "#111"
    }else{
        ball.style.left = "5px"
        leftside = true
        ball.style.backgroundColor = "#fff"
        mode.style.backgroundColor = "#111"
        body.style.backgroundColor = "#fff"
    }
}