// Valida o formulário do header de acordo como o requisito 3
function validarFormularioLogin(e) {
  e.preventDefault();

  const email = e.target[0].value;
  const password = e.target[1].value;
  const isTrybeEmailTest = email === 'tryber@teste.com' && password === '123456';

  if (isTrybeEmailTest) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const formHeader = document.querySelector('.trybewarts-login');
formHeader.addEventListener('submit', validarFormularioLogin);

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
