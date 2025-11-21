let otpBtn = document.querySelector("#otpBtn");
let otpBox = document.querySelector("#otp");
let timerBox = document.querySelector("#timer");

otpBtn.addEventListener("click", function () {

  let random = Math.floor(Math.random() * 9000) + 1000;

  otpBox.textContent = "OTP: " + random;

  otpBtn.disabled = true;

  let time = 30;

  let set = setInterval(() => {

    if (time > 0) {
      timerBox.textContent = "Wait " + time + " sec";
      time--;
    } else {
      clearInterval(set);
      otpBtn.disabled = false;
      otpBox.innerHTML =""
      timerBox.innerHTML = "";
   
    }

  }, 1000);

});
