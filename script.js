const agreementCheck = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

agreementCheck.addEventListener('change', () => {
  if (agreementCheck.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});

textarea.addEventListener('keyup', () => {
  counter.innerText = 500 - textarea.value.length;
});
