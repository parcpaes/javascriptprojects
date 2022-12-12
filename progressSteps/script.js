import {ProgressBar} from "./progressbar.js";

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const circle = document.querySelector('.active');
const progressBar = new ProgressBar(circle);

next.addEventListener('click', () => {
  progressBar.nextStep();
});

prev.addEventListener('click', () => {
  progressBar.previousStep();
});
