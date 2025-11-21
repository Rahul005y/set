let uploadBtn = document.querySelector("#uploadBtn");
let bar = document.querySelector("#bar");
let percent = document.querySelector("#percent");
let status = document.querySelector("#status");
let barBox = document.querySelector(".bar-box");
let fileInput = document.querySelector("#fileInput");

uploadBtn.addEventListener("click", function () {

   if(!fileInput.files.length){
            alert("Please select a file!");
            return;
        }

    barBox.style.display = "flex"; 
    percent.style.display = "block"; 
    status.textContent="Uploading...";

    let score = 0;

    let fill = setInterval(() => {

        if(score < 100){
            score++;
            percent.textContent = score + "%";

            // ✅ fill the bar
            bar.style.width = score + "%";
            
        } else {
            clearInterval(fill);
           status.textContent = "Upload Completed ✔";
        }

    }, 50);

});

