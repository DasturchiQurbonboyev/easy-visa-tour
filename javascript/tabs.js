const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Avval hammasini non-active holatga o‘tkazamiz
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Bosilgan tugmaga active qo‘shamiz
    button.classList.add('active');

    const tabId = button.getAttribute('data-tab');
    document.getElementById(`tab-${tabId}`).classList.add('active');
  });
});