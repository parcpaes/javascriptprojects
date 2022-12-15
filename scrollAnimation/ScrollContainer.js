export class ScrollContainer{
    constructor(container){        
        this.element = container.firstElementChild;
        this.container = container;
    }

    scroll(){
        this.down();
        this.up();
    }

    down(){
        if(!this.element) this.element = this.container.firstElementChild;                
        while(this.element && this.isVisible(this.element) ){
            this.element.classList.add('show');
            this.element = this.element.nextElementSibling;
        }
    }

    up(){
        if(!this.element){
            this.element = this.container.lastElementChild;
            return;
        }
        this.element.classList.remove('show');        
        this.element = this.element.previousElementSibling
    }

    isVisible(element){
        let currentHeight = document.documentElement.clientHeight;
        let rectElem = element.getBoundingClientRect();
        return currentHeight > rectElem.bottom;
    }
}