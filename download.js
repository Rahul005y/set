let startabtn = document.querySelector("#startBtn");
let box = document.querySelector(".bar");
let percentText = document.querySelector("#percentText");

let score = 0;
let width = 0;

startabtn.addEventListener("click", function () {

    // 🔥 Reset progress every new download
    score = 0;
    width = 0;
    box.style.width = "0%";
    percentText.textContent = "";

    // random download speed
    let random = Math.floor(Math.random() * 80) + 20;

    startabtn.disabled = true;
    startabtn.textContent = "Downloading...";

    // 🎨 Generate NEW color every tick (smooth color change)
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);

    let settime = setInterval(() => {   
        
        box.style.backgroundColor = `rgb(${a},${b},${c})`;

        // progress
        if (score < 100) {
            width++;
            score++;
            box.style.width = width + "%";
            percentText.textContent = score + "%";
        }

    }, random);

    // ⏳ end download after 9 seconds
    setTimeout(() => {
        clearInterval(settime);
         box.style.width = "";
        percentText.textContent = "0%";
        startabtn.textContent = "Download Again";
        startabtn.disabled = false;
    }, 9000);

});
