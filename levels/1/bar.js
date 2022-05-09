let progressbar = document.querySelector(".circular-progress");
let valuecontainer = document.querySelector(".value-container");
const resume = result_box.querySelector(".buttons .quit");
let progressvalue = 0;
let progressendvalue = 100;
let speed = 50;


const newLocal = 20.6;
let progress = setInterval(() => {
  valuecontainer.textContent = `${progressvalue}%`;
  progressbar.style.background = `conic-gradient(
    #b8973d ${progressvalue * 3.6}deg,
    #fcf4de ${progressvalue * 3.6}deg
    )`;
  if (progressvalue == progressendvalue) {
    clearInterval(progress);
  }
}, speed);

resume.addEventListener('click', () => {
  if (progressvalue < 100) {
    progressvalue += 20;
  }
  else {
    progressvalue = 100;
  }
  valuecontainer.textContent = `${progressvalue}%`;
  progressbar.style.background = `conic-gradient(
        #b8973d ${progressvalue * 3.6}deg,
        #fcf4de ${progressvalue * 3.6}deg
        )`;
});