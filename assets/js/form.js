let startTime;

const form = document.getElementById('contactForm');

const confirmation = document.getElementById('confirmation');

const timeSpent = document.getElementById('timeSpent');

form.addEventListener('focusin', () => {
  if (!startTime) startTime = new Date();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const duration = Math.round((new Date() - startTime) / 1000);

  confirmation.textContent = 'Thank you for your message!';

  confirmation.classList.remove('hidden');

  timeSpent.textContent = `You took ${duration} seconds to fill the form.`;

  form.reset();

  startTime = null;
});
