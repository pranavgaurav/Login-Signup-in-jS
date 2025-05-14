let login =document.querySelector(".login");
let signup =document.querySelector(".signup");
let slider =document.querySelector(".slider");
let formSection =document.querySelector(".form-section");

login.addEventListener("click", ()=>{
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
})

signup.addEventListener("click", ()=>{
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
})
