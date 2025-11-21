
let h1 = document.querySelector("h1");
let btn  = document.querySelector("#btn");



let score =0;

btn.addEventListener("click", function(){
    
let set = setInterval(function(){
score++;
h1.textContent =score;
 
},100)


setTimeout(() => {
    clearInterval(set);

    console.log("hi ")

}, 5000);
})

