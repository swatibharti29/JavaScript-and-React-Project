document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registrationForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('age');
  const mobileInput = document.getElementById('mobile');
  const submitBtn = document.getElementById('submitBtn');

  function validateForm() {
    let isValid = true;

    const namePattern = /^[A-Za-z\s]+$/;
    if (nameInput.value.trim().length >= 2 && namePattern.test(nameInput.value.trim())) {
      nameInput.classList.remove('error');
      nameInput.classList.add('valid');
    } else {
      nameInput.classList.remove('valid');
      nameInput.classList.add('error');
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailPattern.test(emailInput.value.trim())) {
      emailInput.classList.remove('error');
      emailInput.classList.add('valid');
    } else {
      emailInput.classList.remove('valid');
      emailInput.classList.add('error');
      isValid = false;
    }

    const age = parseInt(ageInput.value, 10);
    if (!isNaN(age) && age >= 10 && age <= 100) {
      ageInput.classList.remove('error');
      ageInput.classList.add('valid');
    } else {
      ageInput.classList.remove('valid');
      ageInput.classList.add('error');
      isValid = false;
    }

    const mobilePattern = /^\d{10}$/;
    if (mobilePattern.test(mobileInput.value.trim())) {
      mobileInput.classList.remove('error');
      mobileInput.classList.add('valid');
    } else {
      mobileInput.classList.remove('valid');
      mobileInput.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('disabled');
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.add('disabled');
    }
  }

  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  ageInput.addEventListener('input', validateForm);
  mobileInput.addEventListener('input', validateForm);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');

    form.reset();

    nameInput.classList.remove('valid', 'error');
    emailInput.classList.remove('valid', 'error');
    ageInput.classList.remove('valid', 'error');
    mobileInput.classList.remove('valid', 'error');

    submitBtn.disabled = true;
    submitBtn.classList.add('disabled');
  });
});
