
import {ScrollContainer} from './ScrollContainer.js';

const container = document.getElementById('container');
const scrollContainer = new ScrollContainer(container);

window.addEventListener('scroll', ()=>{
  scrollContainer.scroll();
});
