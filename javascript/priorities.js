const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const step = Math.ceil(target / 50); // Tezligini sozlash

  const interval = setInterval(() => {
    if (count + step >= target) {
      counter.textContent = target;
      clearInterval(interval);
    } else {
      count += step;
      counter.textContent = count;
    }
  }, 20); // Qancha vaqtda bitta qadam (ms)
});