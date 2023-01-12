import {GlassContainer} from './GlassContainer.js'
const glasses = document.querySelector('.glasses.grid');
const glass2L = new GlassContainer(2000);

glasses.addEventListener('click',(event)=>{
    const target = event.target;
    const div = target.closest('.glass');
    if(!div) return;
    const classWater = div.classList;
    let [ml,] = div.firstElementChild.textContent.split(/\s+/);
    ml = Number(ml);
    if(!classWater.contains('filled-water')){
        glass2L.fillWater(ml);
        classWater.add('filled-water');
    }else{
        glass2L.removeWater(ml);
        classWater.remove('filled-water');
    }
});