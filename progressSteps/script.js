const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

class Step {
  constructor(elements, start = 0) {
    this.elements = elements;
    this.current = start;
  }
  getIterator() {
    let index = this.current;
    return {
      next: () => {
        return {
          value: index < this.elements.length ? this.elements[index++] : null,
          index,
        };
      },
      prev: () => {
        return {
          value: index > 0 ? this.elements[--index] : null,
          index,
        };
      },
    };
  }
}

const step = new Step(circles, 1);
const nextStep = step.getIterator();
next.addEventListener('click', () => {
  const circle = nextStep.next();
  if (circle.value) circle.value.classList.add('active');
  updateProgress();
  disableButtons(circle.index);
});

prev.addEventListener('click', () => {
  const circle = nextStep.prev();
  if (circle.value) circle.value.classList.remove('active');
  updateProgress();
  disableButtons(circle.index);
});

function updateProgress() {
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
}

function disableButtons(index) {
  if (index === 1) {
    prev.disabled = true;
  } else if (index === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
