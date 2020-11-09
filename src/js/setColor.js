import randomIntegerFromInterval from './randomIntegerFromInterval';
import colors from './colors.json';


export default function setColor() {
  const idxColor = randomIntegerFromInterval(0, colors.length - 1);
  return colors[idxColor];
}