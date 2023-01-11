
const glasses = document.querySelector('.glasses.grid');
const nbOfGlasses = glasses.children.length;

class GlassContainer{
    constructor(capacity_ml=2000){
        this.capacity_ml = capacity_ml;
        this.percentageOfWater = document.querySelector('.percentage-water');
        this.measure_water = document.querySelector('.measure__water');
        this.amount = 0;
    }
    
    updateView(){
        const percentageOfText = this.percentageOfWater.firstChild;
        const percentage = this.amount/this.capacity_ml*100;
        this.percentageOfWater.style.height = `${percentage}%`;
        percentageOfText.textContent = `${percentage}%`;
        this.measure_water.textContent = (this.capacity_ml - this.amount) /1000 +"L";
    }

    fillWater(ml=Number(ml)){
        if(!Number(ml)) throw new Error('measure ml is not number');        
        if(this.amount + ml > this.capacity_ml) throw new Error('it will overflow the glass');
        this.amount += ml;        
        this.updateView();
    }

    removeWater(ml){
        if(!Number(ml)) throw new Error('measure ml is not number');        
        if(this.amount-ml< 0) throw new Error('Container is already empty');
        this.amount -= ml;
        this.updateView();
    }

}

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

