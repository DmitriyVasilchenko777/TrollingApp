const BUTTON_YES = document.getElementById("button-yes");
const BUTTON_NO = document.getElementById("button-no");

BUTTON_YES.onclick = () => {
    alert("Благодарим! Нам очень важно ваше мнение");
}

BUTTON_NO.addEventListener("click", () => {
    alert("Ты все-таки нажал на меня)))");
})