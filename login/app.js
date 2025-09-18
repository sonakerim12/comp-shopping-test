let users = JSON.parse(localStorage.getItem("users"));
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input")

form.addEventListener("submit", (element)=>{
element.preventDefault();
let findUser = users.find(user=> user.userName==inputs[0].value&&user.passWord==inputs[1].value);

if (findUser) {
    alert("girish ugurludur");
    localStorage.setItem("activeUser", inputs[0].value)
    window.location.href = "../main/index.html";
} else {
    alert("istifadeci tapilmadi")
}
})
///////////////////////////////////////////////

inputs.forEach(element => {
   element.addEventListener("input",()=>{
     if (element.checkValidity()) {
        element.nextElementSibling.style.color = "green";
    } else {
    element.nextElementSibling.style.color = "red";
    }
   })
});
