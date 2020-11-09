import refs from './js/refs';
import changeBgColor from './js/changeBgColor';

const CHANGE_COLORS_DELAY = 1000;
let timeoutId = null;
let isActive = false;

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isActive) {
    return;
  }
  timeoutId = setInterval(changeBgColor, CHANGE_COLORS_DELAY);
  isActive = true;
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
  clearTimeout(timeoutId);
  isActive = false;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}







