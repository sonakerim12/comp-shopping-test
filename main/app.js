
let activeUser = localStorage.getItem("activeUser");
let exitButton = document.querySelector(".btn-danger");
let loginBtn = document.querySelector(".btn-success")

if (activeUser) {
    exitButton.style.display = "inline-block";
    loginBtn.innerText = "Kompüter alış-verişinə başla";
     document.querySelector("#next-location").href= "../addProduct/index.html"
     let h1 = document.querySelector("h1").innerText = `Istifadəçi adı: ${localStorage.getItem("activeUser")}`;
} else {
       exitButton.style.display = "none"; 
        loginBtn.innerText = "Hesaba daxil ol";
        document.querySelector("#next-location").href= "../sign-up/index.html";
           let h1 = document.querySelector("h1").innerText = `Istifadəçi adı:`;
};

exitButton.addEventListener("click", ()=>{
    localStorage.removeItem("activeUser");
    // sehifeni yenileyir
    window.location.reload()
})