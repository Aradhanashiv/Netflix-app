// document.querySelector(".What").addEventListener("click" , () => {
//     document.querySelector(".content_box").style.display = "block"
// })

// console.log("hii")

const accordion = document.getElementsByClassName('contentBx');
console.log(accordion)
// document.querySelector(".label1").addEventListener("click" , () => {
//     // accordion.toggle("active")
// })
for ( i = 0 ; i < accordion.length ; i++){
    accordion[i].addEventListener("click" , function (){
        this.classList.toggle('active')
    })
};



// document.querySelector(".label1").addEventListener("click" , () => {
//     document.querySelector(".content").style.display = "block"
// })