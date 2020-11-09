import refs from './refs';
import setColor from './setColor';


export default function changeBgColor() {
  refs.body.style.cssText = `background-color: ${setColor()}`;
}