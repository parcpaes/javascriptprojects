const steps = document.querySelectorAll('.wizard__steps > div');
const nextBtn = document.getElementById('btn-next');
const prevBtn = document.getElementById('btn-prev');
const it = iterator();
nextBtn.addEventListener('click', () => {
  const value = it.next();
  if (value) {
    setActive(value.children, (item) => {
      item.classList.add('active');
    });
  }
});

prevBtn.addEventListener('click', () => {
  const value = it.prev();
  if (value) {
    if (value.children.length === 2) {
      setActive(value.children, (item) => {
        item.classList.remove('active');
      });
    }
  }
});

setActive = (items, callback) => {
  for (item of items) {
    callback(item);
  }
};

function iterator() {
  let index = 1;
  return {
    next: function () {
      if (this.done) return;
      return steps[index++];
    },
    prev: function () {
      if (index < 0) return;
      return steps[--index];
    },
    get done() {
      return index > steps.length - 1 || index < 0;
    },
  };
}
