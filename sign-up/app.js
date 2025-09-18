let users = JSON.parse(localStorage.getItem("users"))||[];

let form = document.querySelector("form");


form.addEventListener("submit", (event)=>{
event.preventDefault();
let input = document.querySelectorAll("input");
let obj = {
    name: input[0].value,
    phone:input[1].value,
    userName: input[2].value,
    passWord: input[3].value
}
users.push(obj);

localStorage.setItem("users", JSON.stringify(users));
form.reset()
})

///////////////////////////////////////
// ders2 davami

let inputs = document.querySelectorAll("input");

inputs.forEach(element => {
   element.addEventListener("input",()=>{
     if (element.checkValidity()) {
        element.nextElementSibling.style.color = "green";
    } else {
               element.nextElementSibling.style.color = "red";
    }
   })
});
