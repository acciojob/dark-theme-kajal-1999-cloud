//your code here
let button = document.getElementById("swap");
let main = document.querySelector(".day");
button.addEventListener('click', swapTheme);
function swapTheme(){
	main.className =(main.className == "night"?"day":"night");
	button.className = (button.className == "button_night"? "day": "button_night")
}




