    let startBtn = document.querySelector("#startBtn");
    let bar = document.querySelector("#bar");
    let percentText = document.querySelector("#percentText");
    let status = document.querySelector("#status");

    let score = 0;
    let width = 0;

    startBtn.addEventListener("click", function () {

        startBtn.disabled = true;  
        status.textContent = "Processing Payment...";

        let speed = Math.floor(Math.random() * 80) + 20;

        let run = setInterval(() => {

            if(score < 100){
                width++;
                score++;

                bar.style.width = width + "%";
                percentText.textContent = score + "%";

            } else {
                clearInterval(run);
                status.textContent = "Payment Successful ✔";
            }

        }, speed);
    });