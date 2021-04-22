const idCard = document.getElementById('cards');

idCard.addEventListener('click', (event) => {
  const image = event.target;
  if (image.tagName !== 'IMG') return;
  removeActiveClass();
  const panel = image.closest('div');
  panel.classList.add('active');
});

function removeActiveClass() {
  const activeClasses = document.querySelectorAll('.active');
  activeClasses.forEach((item) => {
    item.classList.remove('active');
  });
}
