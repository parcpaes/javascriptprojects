export class GlassContainer{
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