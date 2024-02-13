const openModal = document.querySelector('.open-modal-btn');
const closeModal = document.querySelector('.close-modal-btn');
const modal = document.querySelector('.modal');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('open-modal-btn')) {
    modal.style.display = 'block';
  } else if (e.target.classList.contains('close-modal-btn')) {
    modal.style.display = 'none';
  }
});

// openModal.addEventListener('click', () => {
//   modal.style.display = 'block';
// });

// closeModal.addEventListener('click', () => {
//   modal.style.display = 'none';
// });