export class ProgressBar {
    constructor(element){
      this.head = element;
      this.progress = document.getElementById('progress');
    }
    
    nextStep(){
      if(this.isEmpty(this.head?.nextElementSibling)) return;      
      this.head = this.head.nextElementSibling;
      this.toggleElemCss();
      this.updateProgress();
    }

    previousStep(){
      if(this.isEmpty(this.head?.previousElementSibling)) return;   
      this.toggleElemCss();
      this.head = this.head.previousElementSibling;
      this.updateProgress();
    }

    isEmpty(element){
      return !element;
    }

    toggleElemCss(){
        if(this.isEmpty(this.head)) return;        
        this.head.classList.toggle('active');
    }

    updateProgress() {
      const actives = document.querySelectorAll('.active');
      const circles = document.querySelectorAll('.circle');
      this.progress.style.width =
        ((actives.length - 1) / (circles.length - 1)) *100 + '%';
    }
}